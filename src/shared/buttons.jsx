export function RedirectButton({ children, location, ...props }) {
    return (
        <button
            {...props}
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
            className="social-button"
            onClick={() => {
                window.location.href = location;
            }}
        >
            {children}
        </button>
    );
}
