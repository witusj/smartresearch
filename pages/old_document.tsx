import Document, { Html, Head, Main, NextScript } from 'next/document'

import { GA_TRACKING_ID } from '../lib/gtag'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.1/cookieconsent.min.css" />
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.1/cookieconsent.min.js" data-cfasync="false"></script>
                    <script>
                    var popup;
                    window.addEventListener('load', function(){
                    window.cookieconsent.initialise({
                    //set revokeBtn if you don't want to see a tiny pullup bar overlapping your website
                    //if revokeBtn is set, make sure to include a link to cookie settings in your footer
                    //you can open your banner again with: popup.open();
                    //revokeBtn: "<div class='cc-revoke'></div>",
                    type: "opt-in",
                    theme: "classic",
                    palette: {
                        popup: {
                            background: "#000",
                            text: "#fff"
                            },
                        button: {
                            background: "#fd0",
                            text: "#000"
                            }
                        },
                        onInitialise: function(status) {
                        // request gtag.js on page-load when the client already consented
                        if(status == cookieconsent.status.allow) setCookies();
                        },
                        onStatusChange: function(status) {
                        // resquest gtag cookies on a new consent
                        if (this.hasConsented()) setCookies();
                        else deleteCookies(this.options.cookie.name)
                        },
                    /* enable this to hide the cookie banner outside GDPR regions
                        law: {
                        regionalLaw: false,
                        },
                        location: true,
                        },
                    */
                        function (p) {
                            popup = p;
                    })
                    });

                    //it is absolutely crucial to define gtag in the global scope
                    dangerouslySetInnerHTML={{
                            __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', '${GA_TRACKING_ID}', {
                            page_path: window.location.pathname,
                            });
                        `,
                        }}

                    function setCookies() {
                        var s = document.createElement('script');
                        s.type = "text/javascript"
                        s.async = "true";
                        s.src = "https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}";
                        var x = document.getElementsByTagName('script')[0];
                        x.parentNode.insertBefore(s, x);

                        // you can add facebook-pixel and other cookies here
                    };

                    function deleteCookies(cookieconsent_name) {
                            var keep = [cookieconsent_name, "DYNSRV"];

                            document.cookie.split(';').forEach(function(c) {
                                c = c.split('=')[0].trim();
                                if (!~keep.indexOf(c))
                                    document.cookie = c + '=;' + 'expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/';
                            });
                    };
                    </script>
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