import { LuSwords } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaReddit, FaXbox, FaKey } from "react-icons/fa";
import { SiRoblox } from "react-icons/si";
import { TbBrandMinecraft } from "react-icons/tb";

import { SocialButton, RedirectButton } from "../shared/buttons";

export function MainLinks() {
    return (
        <div className="card-container">
            <RedirectButton className="sphore-button" location="/sphore/index.html">
                Here's a cool sphere!
            </RedirectButton>
        </div>
    );
}

export function Socials() {
    return (
        <div className="card-container">
            <SocialButton location="https://scoresaber.com/u/76561199128989009">
                <LuSwords className="icon" />
            </SocialButton>
            <SocialButton location="https://github.com/Wdboyes13">
                <FaGithub className="icon" />
            </SocialButton>
            <SocialButton location="https://www.reddit.com/user/HappyHuman4123/">
                <FaReddit className="icon" />
            </SocialButton>
            <SocialButton location="mailto:william@mail.weelam.ca">
                <MdEmail className="icon" />
            </SocialButton>
            <SocialButton location="https://www.xbox.com/en-CA/play/user/weelam2025">
                <FaXbox className="icon" />
            </SocialButton>
            <SocialButton location="https://www.roblox.com/users/2719172644/profile">
                <SiRoblox className="icon" />
            </SocialButton>
            <SocialButton location="/minecraft">
                <TbBrandMinecraft className="icon" />
            </SocialButton>
            <SocialButton location="/keys">
                <FaKey className="icon" />
            </SocialButton>
        </div>
    );
}

export function SpotifyPlaylist() {
    return (
        <div>
            <div id="spotifyframe" className="card-container">
                <iframe
                    data-testid="embed-iframe"
                    style={{ borderRadius: 13 }}
                    src="https://open.spotify.com/embed/playlist/3MRHnXdiXISxRELvTFydgI?utm_source=generator&theme=0"
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
}
