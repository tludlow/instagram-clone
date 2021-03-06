import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
// import { DocumentContext, DocumentInitialProps } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <Main />
                    <div id="modal-portal"></div>
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
