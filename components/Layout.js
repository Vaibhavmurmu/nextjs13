import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <><>
      <Head>

        <title>Live Retail Streaming</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </><>
        <Navbar />
        <main className>{children}</main>

        <Footer />
      </></>
  )
}
