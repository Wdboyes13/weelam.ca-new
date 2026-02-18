import "./shared/default.css";

export default function License() {
    return (
        <div
            style={{ maxWidth: "700px", margin: "0 auto", padding: "2em 1em" }}
        >
            <h1>License</h1>
            <h4>SPDX-License-Identifier: MIT</h4>
            <hr />
            <pre
                style={{
                    whiteSpace: "pre-wrap",
                    fontFamily: "inherit",
                    lineHeight: "1.7",
                    color: "#ccc",
                    fontSize: "0.95rem",
                }}
            >
                {`Copyright (c) 2025-2026 Wdboyes13

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice (including the next paragraph) shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`}
            </pre>
        </div>
    );
}
