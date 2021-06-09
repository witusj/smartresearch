import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <title>Smart Research &#127891;</title>
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <meta name="description" content="Tools and methods for doing Smart Research. Audit you research process, discover new research tools and methods and find interesting material in the selected libguides."></meta>
                    <meta property="og:title" content="Smart Research &#127891;" />
                    <meta property='og:description' content="Tools and methods for doing Smart Research. Audit you research process, discover new research tools and methods and find interesting material in the selected libguides."/>
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content="smartresearch.jpeg" />
                    <meta property="og:url" content="https://smartresearch.businessdatasolutions.nl" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}