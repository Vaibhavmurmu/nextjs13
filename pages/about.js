import Link from 'next/link'
import Head from 'next/head'

export default function About() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-centre px-20 text-center">
        <h1 className="text-6xl font-bold">
          We enable retailers to{' '}<br />build real sell and buy expercence.
        </h1>

        <p className="mt-3 text-2xl">
            We are a team of passionate people who are building a platform to help retailers to build their own live streaming store.
        </p>
        <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4">
          <Link href="/">
            <a>Home</a>
          </Link>
        </button>
        <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4">
            <Link href="/register">
                <a>Register &rarr;</a>
            </Link>
        </button>
        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
            <a
                href="https://nextjs.org/docs"
                className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
                <h3 className="text-2xl font-bold">Affordable &rarr;</h3>
                <p className="mt-4 text-xl">
                    Build run and grow first 
                </p>
            </a>
            <a
                href="https://nextjs.org/learn"
                className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
                >
                <h3 className="text-2xl font-bold">Sustainable &rarr;</h3>
                <p className="mt-4 text-xl">
                    Trusted and secure platform 
                </p>
            </a>
            <a
                href="https://nextjs.org/learn"
                className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
                >
                <h3 className="text-2xl font-bold">Efficent &rarr;</h3>
                <p className="mt-4 text-xl">
                    Reduce operational cost 
                </p>
            </a>

            <a
                href="https://nextjs.org/learn"
                className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
                >
                <h3 className="text-2xl font-bold">Scalable &rarr;</h3>
                <p className="mt-4 text-xl">
                    Build your own live streaming store
                </p>
            </a>
        </div>
     </main>
    </div>
    )
}


