import licenseText from './LICENSE?raw';

export default function License() {
    return (
        <div className="license-container">
            <h1>License</h1>
            <h4>SPDX-License-Identifier: MIT</h4>
            <hr />
            <pre>
                {licenseText}
            </pre>
        </div>
    );
}
