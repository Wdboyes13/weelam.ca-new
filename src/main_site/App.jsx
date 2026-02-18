import "../shared/default.css";
import { Footer } from "../shared/footer";
import { MainLinks, Socials, SpotifyPlaylist } from "./sections";
import { MdWavingHand } from "react-icons/md";

export default function App() {
    return (
        <>
            <h1>
                Hey! My name is william <MdWavingHand />
            </h1>
            <div className="about-container">
                <p>
                    I'm just a normal canadian high school programmer. <br />
                    My current main languages are C/C++, Python, Rust,
                    JavaScript, Java. <br />
                    I've done stuff like made games, apps, OSes, programming
                    languages, and embedded stuff. <br />I also do some
                    electrical engineering and FPGA stuff.
                    <br />I also play piano and tenor saxophone.
                    <br />
                    Learning french, native language is english.
                    <br />
                    <br />
                    My favourites <br />
                </p>
                <ul>
                    <li>Programming language: C++</li>
                    <li>Programming topic: Data structures</li>
                    <li>Colour: Blue</li>
                    <li>Food: Sushi</li>
                    <li>Pen: Lamy Safari (Medium nib)</li>
                    <li>Instrument: Piano</li>
                </ul>
            </div>

            <MainLinks />
            <hr />
            <Socials />
            <hr />
            <SpotifyPlaylist />
            <hr />
            <Footer />
        </>
    );
}
