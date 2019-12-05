import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document'
import {LoginState} from '../stateproviders/LoginState'

class AppDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return <Html>
            <Head title={'My app'}>
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>

    }
}

export default AppDocument

