import { RedirectButton } from "../shared/buttons";
import { Footer } from "../shared/footer";

export default function Minecraft() {
    return (
        <div className="site-container">
            <h1>Welcome to SilqCraft</h1>
            <div className="card-container">
                <RedirectButton location="/minecraft/rules">
                    Rules
                </RedirectButton>
                <button>Minecraft Java 1.21.5</button>
                <button
                    id="ipButton"
                    onClick={() => {
                        navigator.clipboard.writeText(
                            document.getElementById("ipButton").innerText,
                        );
                    }}
                >
                    washhouse-fly.gl.joinmc.link
                </button>
            </div>
            <hr />
            <sub>
                We can't get a custom IP since Playit charges more than my
                entire domain costs <br />
            </sub>
            <Footer />
        </div>
    );
}
