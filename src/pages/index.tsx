import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "../css/main_style.css"

export const Head: HeadFC = () => (
    <>
        <title>Oxford Growers Todo</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""/>
        <link href="https://fonts.googleapis.com/css2?family=Signika+Negative:wght@300&amp;display=swap" rel="stylesheet"/>
    </>
)

const IndexPage: React.FC<PageProps> = () => {
    return (
        <main>
            <div id="centre">
                <div id="header">
                    <div id="header-text">
                        <h1>Oxford Growers Network</h1>
                    </div>
                </div>
                <div id="content">
                    <input placeholder="Project Name"></input>
                    <p><a href="https://oxfordgrowersnetwork.github.io" target="_blank">Learn more about the Oxford Growers Network</a></p>
                </div>
                <div id="footer">
                </div>
            </div>
        </main>
    )
}

export default IndexPage