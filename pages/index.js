import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

export default function Index() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-centre px-20 text-center">
        <h1 className="text-6xl font-bold">
          Live retail streaming{' '}<br />
          <a className="text-orange-600" href="https://nextjs.org">
            platform
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Where the retailers build own made the live streaming store{' '}<br />
          <tage className="mr-4 rounded-md bg-orange-500 p-2 font-mono text-lg text-white">
            Go live & sell
          </tage>
          <tage className="mr-4 rounded-md bg-orange-500 p-2 font-mono text-lg text-white">
            Go live & buy
          </tage>
        </p>
        <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4">
          <Link href="/login">
            <a>Get Started</a>
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
            <h3 className="text-2xl font-bold">Real Selling &rarr;</h3>
            <p className="mt-4 text-xl">
              Where retailers can meet to buyers & demonstrate their products.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Real Buying &rarr;</h3>
            <p className="mt-4 text-xl">
              Where buyers can meet to sellers & buy their products.
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Real Chate &rarr;</h3>
            <p className="mt-4 text-xl">
              Follow & get started live video chatting.
            </p>
          </a>

          <a
            href="https://vercel.com/import"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Live Stream &rarr;</h3>
            <p className="mt-4 text-xl">
              Schedule a live streaming free.
            </p>
          </a>
          <a 
            href="https://vercel.com/import"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
           <h3 className="text-2xl font-bold">Live Watch &rarr;</h3>
            <p className="mt-4 text-xl">
              Watched live on demand streaming free.
            </p>
          </a>
          <a
            href="https://vercel.com/import"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Live Q & A &rarr;</h3>
            <p className="mt-4 text-xl">
              Ask & answer live questions.
            </p>
            </a>
            <a
            href="https://vercel.com/import"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Influencers &rarr;</h3>
            <p className="mt-4 text-xl">
              Find live influencers community here you can support businesses to follow.
            </p>
          </a>
          <a
            href="https://vercel.com/import"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Audio Stream &rarr;</h3>
            <p className="mt-4 text-xl">
              Schedule a live audio stream free.
            </p>
            </a>
            <a
            href="https://vercel.com/import"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Votes & Polls &rarr;</h3>
            <p className="mt-4 text-xl">
              Create a live vote poll free & give instant feedback opinion & polling for sell.
            </p>
            </a>
            <a
            href="https://vercel.com/"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">About Us &rarr;</h3>
            <p className="mt-4 text-xl">
              A live retail streaming hybrid platform.
            </p>
            </a>
            <a
            href="https://vercel.com/import"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Remote Jobs &rarr;</h3>
            <p className="mt-4 text-xl">
              Find the best startup jobs curated by runash remote team.
            </p>
          </a>
          <a
            href="https://vercel.com/import"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Mobile App &rarr;</h3>
            <p className="mt-4 text-xl">
              Download the live retail streaming app available for iSO & Android.
            </p>
          </a>
          <div className='text-2xl font-normal mt-6'>
            <Link href='/'>
          <a className="mt-6 w-96 p-6 text-centre hover:text-orange-600 focus:text-blue-600">
          <h4 className="text-2xl font-bold ">
            Create ID 
          </h4>
            <p className="mt-4 text-xl">
              Create a unique ID for live.
            </p>
          </a>
          </Link>
          </div>
          <div className='text-2xl font-normal mt-6'>
            <Link href="/">
              <a className="mb- w-96 p-6 text-centre hover:text-orange-600 focus:text-blue-600">
                <h4 className="text-2xl font-bold">
                  Sign Up 
                  </h4>
                <p className="mt-4 text-xl">
                  Sign up for a free account.
                </p>
              </a>
            </Link>
          </div>
          <div className='scroll-m-3 first-line:'>
            <Link href="/">
              <a className="mb-6 p-6 text-centre hover:text-blue-600 focus:text-blue-600">
                <h4 className="text-2xl font-bold">Build own made sell & buy expercence</h4>
                <p className="mt-4 text-xl">
                  New ways to use physical reality.
                </p>
              </a>
            </Link>
          </div>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          2022 RunAsh{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}


    
