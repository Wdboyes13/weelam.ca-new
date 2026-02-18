export function RedirectButton({ children, location }) {
    return (
        <button
            onClick={() => {
                window.location.href = location;
            }}
        >
            {children}
        </button>
    );
}

export function SocialButton({ children, location }) {
    return (
        <button
            onClick={() => {
                window.location.href = location;
            }}
            style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "#1a1a1a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: "18px",
                color: "white",
                padding: 0,
            }}
        >
            {children}
        </button>
    );
}
