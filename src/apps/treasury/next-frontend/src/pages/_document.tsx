import React from 'react';
import Document, {
    Html, Head, Main, NextScript, DocumentContext
} from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                    <div id="modal-root" />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
