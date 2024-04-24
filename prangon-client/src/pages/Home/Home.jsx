import React from "react";
import "./Home.css";

export default function Home() {
    const [user, setUser] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSignIn = () => {
        console.log("Signing in button clicked.");
    }

    return (
        <>
            <div className="main">
                <h1 className="text-wrapper">
                    Freshly cooked Prangon{" "}
                    <span className="text-highlight-wrapper">vibes</span>
                    <span
                        className="baked-bugs"
                        style={{ color: "#e69a9a", display: "block" }}
                    >
                        Currently served with a side of baked bugs.{" "}
                        <a
                            href="signup"
                            style={{
                                color: "inherit",
                                textDecoration: "underline",
                            }}
                        >
                            Join
                        </a>
                    </span>
                </h1>
                <div className="card-wrapper">
                    <div className={"outline rotate1"}></div>
                    <div className={"outline rotate2"}></div>
                    <div className={"outline rotate3"}></div>
                    <div className={"outline rotate4"}></div>
                    <div className={"outline rotate5"}></div>
                    <div className={"card"}>
                        <div className="prangon-logo">Prangon</div>

                        <hr />
                        <label htmlFor="email">Email or Username</label>
                        <input
                            type="text"
                            id="user"
                            placeholder="username or BracU email"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                        />
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="*******"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button onClick={handleSignIn}>Sign In</button>
                    </div>
                </div>
            </div>
            <footer>
                <div>
                    <p>
                        23.02.1:{" "}
                        <span style={{ fontFamily: "Rubik Bubbles" }}>
                            Austere Alpaca.
                        </span>
                    </p>
                </div>
            </footer>
        </>
    );
}
