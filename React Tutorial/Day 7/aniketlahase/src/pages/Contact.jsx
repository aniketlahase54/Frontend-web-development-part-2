
import React from "react";

function Contact() {
    return (
        <div style={{
            minHeight: "100vh",
            padding: "30px",
            boxSizing: "border-box",
            backgroundColor: "#f1f5f9",
            fontFamily: "Arial"
        }}>
            <div style={{
                maxWidth: "600px",
                margin: "40px auto",
                padding: "30px",
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow: "0 5px 20px rgba(0,0,0,0.1)"
            }}>
                <h1 style={{ color: "#1e3a8a" }}>
                    Contact Us
                </h1>

                <p style={{ color: "#64748b" }}>
                    Need help with your learning? Contact our team.
                </p>

                <p><strong>Email:</strong> support@lms.com</p>
                <p><strong>Phone:</strong> +91 9876543210</p>
                <p><strong>Address:</strong> Pune, Maharashtra, India</p>

                <button
                    onClick={() => alert("Thank you for contacting us!")}
                    style={{
                        padding: "12px 20px",
                        backgroundColor: "#2563eb",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer"
                    }}
                >
                    Contact Support
                </button>
            </div>
        </div>
    );
}

export default Contact;