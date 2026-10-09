
import React, { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        if (email && password) {
            alert("Login successful!");
        } else {
            alert("Please enter email and password");
        }
    };

    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(135deg, #141e30, #243b55)",
            fontFamily: "Arial"
        }}>
            <form onSubmit={handleLogin} style={{
                width: "320px",
                padding: "30px",
                backgroundColor: "white",
                borderRadius: "15px",
                boxShadow: "0 8px 25px rgba(0,0,0,0.3)"
            }}>
                <h1 style={{
                    textAlign: "center",
                    color: "#243b55"
                }}>
                    LMS Login
                </h1>

                <p style={{ textAlign: "center", color: "#666" }}>
                    Welcome to Learning Portal
                </p>

                <label>Email Address</label>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                        width: "100%",
                        padding: "12px",
                        margin: "10px 0 20px",
                        boxSizing: "border-box",
                        border: "1px solid #ccc",
                        borderRadius: "6px"
                    }}
                />

                <label>Password</label>
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{
                        width: "100%",
                        padding: "12px",
                        margin: "10px 0 20px",
                        boxSizing: "border-box",
                        border: "1px solid #ccc",
                        borderRadius: "6px"
                    }}
                />

                <button type="submit" style={{
                    width: "100%",
                    padding: "12px",
                    backgroundColor: "#2563eb",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontSize: "16px"
                }}>
                    Login
                </button>

                <p style={{
                    textAlign: "center",
                    fontSize: "13px",
                    color: "#777",
                    marginTop: "20px"
                }}>
                    Learn. Practice. Grow.
                </p>
            </form>
        </div>
    );
}

export default Login;