import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Development only */}
        <script src='https://cdn.tailwindcss.com/3.2.4' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
