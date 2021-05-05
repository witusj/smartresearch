import Document, { Html, Head, Main, NextScript } from 'next/document'

import { GA_TRACKING_ID } from '../paused_lib/gtag'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <meta name="description" content="Tools and methods for doing Smart Research. Audit you research process, discover new research tools and methods and find interesting material in the selected libguides."></meta>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}