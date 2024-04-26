import React from "react";
import "./Home.css";

import { useLogin } from "../../hooks/useLogin"

export default function Home() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const { login, isLoading, error } = useLogin()


    const handleSignIn = () => {
        if (isLoading) return
        login(email, password)
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
                            Join now
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
                        <label htmlFor="email">BracU Email</label>
                        <input
                            type="text"
                            id="user"
                            placeholder="Enter your BracU email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="*******"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        {error && <p style={{ paddingTop: "10px", color: "red" }}>{error}</p>}
                        <button onClick={handleSignIn}>{isLoading ? "Loading..." : "Sign In"}</button>
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
