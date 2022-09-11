import Link from 'next/link'
import Head from 'next/head'


export default function Index() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Live Retail Streaming</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-centre px-20 text-center">
        <card className="mt-12 w-100 rounded-xl border p-3 text-left hover:text-blue-600 focus:text-blue-600">
          <badge className="bg-blue-500 text-white px-2 py-1 rounded-full">
            New 
          </badge>
          <text className="text-1xl font-normal mt-2">
            <p className="text-1xl font-normal">Introducing next generation and future of live-retailing &rarr;</p>
          </text>
        </card>
        <h1 className="mt-6 text-6xl font-bold">
          Live retail streaming{' '}<br />
          <a className="text-orange-600" href="https://nextjs.org">
            platform
          </a>
        </h1>

        <p className="mt-6 text-2xl bottom-2">
          Where the retailers build own made the live streaming store and sell{' '}<br />experience to the customers.
        </p>
        <div className="mt-6 flex gap-4">
        <button className="bg-orange-600 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4">
          <Link href="/login">
            <a>Go live stream</a>
          </Link>
        </button>
        <button className="bg-orange-600 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4">
          <Link href="/register">
            <a>Watched live</a>
          </Link>
        </button>
        </div>
        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Real Selling</h3>
            <p className="mt-4 text-xl">
              Where retailers can meet to buyers and demonstrate their products.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Real Buying</h3>
            <p className="mt-4 text-xl">
              Where buyers can meet to sellers and buy their products.
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Real Chate</h3>
            <p className="mt-4 text-xl">
              Follow and  get started live video chatting.
            </p>
          </a>

          <a
            href="https://vercel.com/import"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Live Stream</h3>
            <p className="mt-4 text-xl">
              Get sell schedule for a live streaming free.
            </p>
          </a>
          <a 
            href="https://vercel.com/import"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
           <h3 className="text-2xl font-bold">Live Watch</h3>
            <p className="mt-4 text-xl">
              Watched previous live on demand streaming free.
            </p>
          </a>
          <a
            href="https://vercel.com/import"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Live Q & A</h3>
            <p className="mt-4 text-xl">
              Ask and answer live sell and buy questions.
            </p>
            </a>
            <a
            href="https://vercel.com/import"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Influencers</h3>
            <p className="mt-4 text-xl">
              Find and follow live influencers here you can support businesses.
            </p>
          </a>
          <a
            href="https://vercel.com/import"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Audio Stream</h3>
            <p className="mt-4 text-xl">
              Get sell schedule for a live audio stream free.
            </p>
            </a>
            <a
            href="https://vercel.com/import"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Votes & Polls</h3>
            <p className="mt-4 text-xl">
              Give instant feedback opinion and polling for live sell and buy.
            </p>
            </a>
            <a
            href="https://vercel.com/"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">About Us</h3>
            <p className="mt-4 text-xl">
              A live retail streaming hybrid platform.
            </p>
            </a>
            <a
            href="https://vercel.com/import"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Remote Jobs</h3>
            <p className="mt-4 text-xl">
              Find the best startup jobs curated by runash remote team.
            </p>
          </a>
          <a
            href="https://vercel.com/import"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Mobile App</h3>
            <p className="mt-4 text-xl">
              Download the live retail streaming app available for iSO and Android.
            </p>
          </a>
        </div>
          <div className='mt-6 text-xl'>
            <Link href="/">
              <a className="mb-6 p-6 text-centre hover:text-orange-600 focus:text-orange-600">
                <h4 className="text-1xl font-bold">BEGIN YOUR LIVE STREAMING JOURNEY</h4>
                <p className="mt-6 text-xl">
                  Build own made sell and buy expercence.
                </p>
              </a>
            </Link>
        </div>
      </main>
    </div>
  )
}


    
