import Link from 'next/link'
import Head from 'next/head'

export default function About() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>About RunAsh live</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-centre px-20 text-center">
        <h1 className="mt-6 text-6xl font-bold">
          We enable retailers to{' '}<br />build real sell and buy expercence.
        </h1>

        <p className="mt-6 text-2xl">
            We are a team of passionate people who are building a platform to help retailers to build their<br /> own live streaming store.
        </p>
        <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-9">
          <Link href="/">
            <a>Join us RunAsh journey</a>
          </Link>
        </button>
        <div className="mt-6 flex max-w-6xl flex-wrap items-center justify-around sm:w-full">
            <a
                href="https://nextjs.org/docs"
                className="mt-6 w-96 rounded-xl border-none p-6 text-centre hover:text-blue-600 focus:text-blue-600"
            >
                <h3 className="text-2xl font-bold">Affordable </h3>
                <p className="mt-4 text-xl">
                    Build run and grow first 
                </p>
            </a>
            <a
                href="https://nextjs.org/learn"
                className="mt-6 w-96 rounded-xl border-none p-6 text-centre hover:text-blue-600 focus:text-blue-600"
                >
                <h3 className="text-2xl font-bold">Sustainable </h3>
                <p className="mt-4 text-xl">
                    Trusted and secure platform 
                </p>
            </a>
            <a
                href="https://nextjs.org/learn"
                className="mt-6 w-96 rounded-xl border-none p-6 text-centre hover:text-blue-600 focus:text-blue-600"
                >
                <h3 className="text-2xl font-bold">Efficent </h3>
                <p className="mt-4 text-xl">
                    Reduce operational cost 
                </p>
            </a>

            <a
                href="https://nextjs.org/learn"
                className="mt-6 w-96 rounded-xl border-none p-6 text-centre hover:text-blue-600 focus:text-blue-600"
                >
                <h3 className="text-2xl font-bold">Scalable</h3>
                <p className="mt-4 text-xl">
                    Build your own live streaming store
                </p>
            </a>
        </div>
        <h1 className="mt-6 text-2xl font-n">
            RunAsh is a live retail streaming hybrid platform{' '}<br />
        </h1>
        <p className="mt-6 text-2xl ">
            Where the retailer can sell their products and services in real time to their customers.
        </p>
        <hr className="mt-6 w-96" />

     </main>
    </div>
    )
}


