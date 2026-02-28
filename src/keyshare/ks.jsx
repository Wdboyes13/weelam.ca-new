import { RedirectButton } from "../shared/buttons";
import { Footer } from "../shared/footer";

export default function Keyshare() {
    return (
        <div className="site-container">
            <h1>Public GPG/PGP keys</h1>
            <h4>All keys are ED25519/CV25519</h4>
            <div className="card-container">
                <RedirectButton location="/keyfiles/data_pubkey.bin.asc">
                    Binary pubkey (encrypting data)
                </RedirectButton>
                <RedirectButton location="/keyfiles/data_pubkey.txt.asc">
                    Plaintext pubkey (encrypting data)
                </RedirectButton>
                <RedirectButton location="/keyfiles/dev_pubkey.bin.asc">
                    Binary pubkey (signing commits)
                </RedirectButton>
                <RedirectButton location="/keyfiles/dev_pubkey.txt.asc">
                    Plaintext pubkey (signing commits)
                </RedirectButton>
            </div>
            <hr />
            <Footer />
        </div>
    );
}
