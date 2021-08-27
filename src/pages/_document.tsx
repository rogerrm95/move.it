import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel='preconnect' href='https://fonts.gstatic.com' />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
                        rel="stylesheet" />
                    <link rel="shortcut icon" href="favicon.png" type='image/png'/>
                </Head>

                <body>
                    <Main />
                    <NextScript />
                    <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>
                </body>
            </Html>
        )
    }
}