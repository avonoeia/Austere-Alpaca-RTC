const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { createClient } = require("redis");
const { sendVerificationEmail } = require("../helpers/sendValidationCode");

// Utility function that returns a token
function createToken(id) {
    return jwt.sign({ id }, process.env.SECRET);
}
// Utility function checks valid BracU email
function isValidBracUEmail(email) {
    return email.endsWith("@g.bracu.ac.bd");
}

// Handles user email verification step 1
async function userEmailVerification1(req, res) {
    let { email } = req.body;

    email = email.toLowerCase();
    if (isValidBracUEmail(email) === false) {
        return res
            .status(400)
            .json({ error: "Please use a valid BracU email." });
    }

    const client = createClient();
    client.on("error", (err) => console.log("Redis Client Error", err));

    await client
        .connect()
        .then(async () => {
            console.log("Connected to Redis");
            await client.set("name", "naveed", {'EX': 60})
        })
        .catch((err) => console.log(err));

    try {
        // Send welcome email to the user
        const code = await sendVerificationEmail(email);

        // Error sending email
        if (code === false)
            return res
                .status(500)
                .json({ error: "Error sending email. Please try again." });

        // Save the code in Redis
        await client.set(`verification_${email}`, `${code}`, { 'EX': 120 });

        return res
            .status(200)
            .json({
                message: `We've sent an email to ${email} with your verifation code.`,
            });
    } catch (err) {
        console.log(err);
        return res.status(400).json({ error: err.message });
    }
}

// Handles user email verification step 2
async function userEmailVerification2(req, res) {
    let { email, code } = req.body;
    email = email.toLowerCase();
    
    const client = createClient();
    client.on("error", (err) => console.log("Redis Client Error", err));

    await client
        .connect()
        .then(async () => {
            console.log("Connected to Redis");
            await client.set("name", "naveed", {'EX': 60})
        })
        .catch((err) => console.log(err));

    try {
        // Get the code from Redis
        const verificationCode = await client.get(`verification_${email}`);

        if (verificationCode == null)
            return res
                .status(400)
                .json({
                    error: "Verification code may have expired. Please request a new one.",
                });

        // Check if the code is correct
        if (verificationCode === code) {
            // Create a new entry in Redis
            await client.set(`verified_${email}`, "true");
            return res
                .status(200)
                .json({ message: "User verification successful." });
        } else {
            return res
                .status(400)
                .json({ error: "Invalid verification code." });
        }
    } catch (err) {
        console.log(err);
        return res.status(400).json({ error: err.message });
    }
}

// Handles user signup, i.e create the user document in db
async function userSignup(req, res) {
    const { email } = req;
    const isVerified = await client.get(`verified_${email}`);

    if (isVerified === null)
        return res
            .status(400)
            .json({ error: "Please verify your email first." });

    try {
        const user = await User.signup(req.body);

        const token = createToken(user._id);
        return res.status(200).json({ token });
    } catch (err) {
        console.log(err);
        return res.status(400).json({ error: err.message });
    }
}

// Handling login request from an existing user
async function userLogin(req, res) {
    const { email, password } = req.body;

    console.log("Hit registered at userLogin controller");

    try {
        const user = await User.login(email, password);

        const token = createToken(user._id, "30d");

        res.status(200).json({ username: user.username, token });
    } catch (err) {
        console.log(err);
        res.status(401).json({ error: err.message });
    }
}

module.exports = {
    userEmailVerification1,
    userEmailVerification2,
    userSignup,
    userLogin,
};
