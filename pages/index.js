import Link from 'next/link'
import Head from 'next/head'
import Image from "next/image"


export default function Index() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Live Retail Streaming</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-centre px-20 text-center">
        <card className="mt-12 w-100 rounded-xl border p-3 text-left hover:text-blue-600 focus:text-blue-600">
          <badage className="text-1xl font-normal mt-2">
            <p className="text-1xl font-normal"><button className='bg-blue-600 text-white font-n py-1 px-3 rounded mt-0'>New</button> Introducing next generation and future of retail &rarr;</p>
          </badage>
        </card>
        <h1 className="mt-12 text-6xl font-bold">
          Live retail streaming{' '}<br />
          <a className="text-orange-600" href="https://nextjs.org">
            platform
          </a>
        </h1>

        <p className="mt-12 text-2xl bottom-2">
          Where the retailers build own made live streaming store.
        </p>
        <div className="flex gap-6 mt-10 max-w-0xl flex-wrap items-center justify-around">
        <button className="bg-orange-600 hover:bg-black text-white font-medium py-3 px-12 rounded-lg p-3 mt-10">
          <Link href="/register">
            <a>Go live stream</a>
         </Link>
        </button>
        <button className="bg-orange-600 hover:bg-black text-white font-medium py-3 px-12 rounded-lg p-3 mt-10">
          <Link href="/register">
            <a>Watched live</a>
          </Link>
        </button>
        </div>
        <p className="mt-12 text-0xl bottom-2">
            Get started free
        </p>
           <h1 className="mt-2 text-2xl font-b">
                <a className="text-black-600" href="https://nextjs.org">
                Unique experience ✨
                </a>
            </h1>
            <p className="mt-2 text-1xl bottom-2">
                Real worlds real selling and buying reality
            </p>
        <div className="mt-12 flex max-w-7xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left focus:text-black shadow-lg shadow-white"
          >
            <h3 className="text-2xl font-bold">Real Selling</h3>
            <p className="mt-4 text-xl">
              Where retailers can meet to buyers and demonstrate their products.
              <br />
                <Link href="/login">
                <a className='text-blue-600'>Learn more &rarr;</a>
                </Link>
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="mt-6 w-96 rounded-xl border p-6 text-left focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Real Buying</h3>
            <p className="mt-4 text-xl">
              Where buyers can meet to sellers and buy their products.
              <br />
                <Link href="/register">
                <a className='text-blue-600'>Learn more &rarr;</a>
                </Link>
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className="mt-6 w-96 rounded-xl border p-6 text-left focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Real Chat</h3>
            <p className="mt-4 text-xl">
              Follow and  get started live video chatting.
              <br />
                <Link href="/register">
                <a className='text-blue-600'>Learn more &rarr;</a>
                </Link>
            </p>
          </a>

          <a
            href="https://vercel.com/import"
            className="mt-6 w-96 rounded-xl border p-6 text-left focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Live Stream</h3>
            <p className="mt-4 text-xl">
              Get sell schedule for a live streaming free.
              <br />
                <Link href="/register">
                <a className='text-blue-600'>Learn more &rarr;</a>
                </Link>
            </p>
          </a>
          <a 
            href="https://vercel.com/import"
            className="mt-6 w-96 rounded-xl border p-6 text-left focus:text-blue-600"
          >
           <h3 className="text-2xl font-bold">Live Watch</h3>
            <p className="mt-4 text-xl">
              Watched previous live on demand streaming free.
              <br />
                <Link href="/register">
                <a className='text-blue-600'>Learn more &rarr;</a>
                </Link>
            </p>
          </a>
          <a
            href="https://vercel.com/import"
            className="mt-6 w-96 rounded-xl border p-6 text-left focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Live Q & A</h3>
            <p className="mt-4 text-xl">
              Ask and answer live sell and buy questions.
              <br />
                <Link href="/register">
                <a className='text-blue-600'>Learn more &rarr;</a>
                </Link>
            </p>
            </a>
            <a
            href="https://vercel.com/import"
            className="mt-6 w-96 rounded-xl border p-6 text-left focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Influencers</h3>
            <p className="mt-4 text-xl">
              Find and follow live influencers here you can support businesses.
              <br />
                <Link href="/register">
                <a className='text-blue-600'>Learn more &rarr;</a>
                </Link>
            </p>
          </a>
          <a
            href="https://vercel.com/import"
            className="mt-6 w-96 rounded-xl border p-6 text-left focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Audio Stream</h3>
            <p className="mt-4 text-xl">
              Get sell schedule for a live audio stream free.
              <br />
                <Link href="/register">
                <a className='text-blue-600'>Learn more &rarr;</a>
                </Link>
            </p>
            </a>
            <a
            href="https://vercel.com/import"
            className="mt-6 w-96 rounded-xl border p-6 text-left focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Votes & Polls</h3>
            <p className="mt-4 text-xl">
              Give instant feedback opinion and polling for live sell and buy.
              <br />
                <Link href="/register">
                <a className='text-blue-600'>Learn more &rarr;</a>
                </Link>
            </p>
            </a>
            <a
            href="https://vercel.com/"
            className="mt-6 w-96 rounded-xl border p-6 text-left focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">About Us</h3>
            <p className="mt-4 text-xl">
              A live retail streaming hybrid platform.
              <br />
                <Link href="/register">
                <a className='text-blue-600'>Learn more &rarr;</a>
                </Link>
            </p>
            </a>
            <a
            href="https://vercel.com/import"
            className="mt-6 w-96 rounded-xl border p-6 text-left focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Remote Jobs</h3>
            <p className="mt-4 text-xl">
              Find the best startup jobs curated by runash remote team.
              <br />
                <Link href="/register">
                <a className='text-blue-600'>Learn more &rarr;</a>
                </Link>
            </p>
          </a>
          <a
            href="https://vercel.com/import"
            className="mt-6 w-96 rounded-xl border p-6 text-left focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Mobile App</h3>
            <p className="mt-4 text-xl">
              Download the live retail streaming app available for iSO and Android.
              <br />
                <Link href="/register">
                <a className='text-blue-600'>Learn more &rarr;</a>
                </Link>
            </p>
          </a>
        </div>
        <p className="mt-8 text-0xl text-center text-base text-black hover:text-black">
          Explore more features and experience on runash
        </p>
          <div className='mt-12 text-xl'>
                <h4 className="text-1xl text-orange-600 font-bold">Begin your live streaming journey ✨</h4>
                <p className="mt-4 text-centre text-base text-black text-1xl bottom-2">
                  Lets building your own made sell and buy expercence.
                </p>
        </div>
        <div className="flex gap-6 mt-12 max-w-1xl flex-wrap items-center justify-around">
        <button className="bg-black hover:bg-white text-white font-medium hover:text-black py-3 px-12 rounded-lg p-3 mt-12">
          <Link href="/login">
            <a>Go live stream</a>
          </Link>
        </button>
        <button className="bg-black hover:bg-white text-white font-medium hover:text-black py-3 px-12 rounded-lg p-3 mt-12">
          <Link href="/register">
            <a>Watched live</a>
          </Link>
        </button>
        </div>
        
         <p className="mt-12 w-full p-5 text-centre">
           <Link href="/">
             <a>Give your most valuable feedback to improve live experience better</a>
          </Link>
          </p>
        <div className="mt-2 grid grid-flow-col">
          <button className="bg-white-600 text-gray-400 hover:bg-amber-50 hover:text-black font-n py-1 px-3 rounded mt-0">😭</button>
          <button className="bg-white-600 text-gray-400 hover:bg-amber-50 hover:text-black font-n py-1 px-3 rounded mt-0">😕</button>
          <button className="bg-white-600 text-gray-400 hover:bg-amber-50 hover:text-black font-n py-1 px-3 rounded mt-0">😃</button>
          <button className="bg-white-600 text-gray-400 hover:bg-amber-50 hover:text-black font-n py-1 px-3 rounded mt-0">🤩</button>
         </div>
          <button className="mt-12 bg-blue-600 text-white hover:bg-amber-50 hover:text-black font-n py-1 px-3 rounded">feedback</button>
        

        <div className="mt-8 flex max-w-full flex-wrap item-centre justify-around bg-gray-50 sm:w-full p-8 rounded">
          <h2 className="text-bold">
            Get live updates
          </h2>
          <input className="mt-2 placeholder-show:border text-centre p-4..." placeholder="email address"></input><button className="mt-2 bg-black text-white hover:bg-white hover:text-black font-n py-1 px-3 rounded mt-0">Subscribe</button>
        </div>
      </main>
    </div>
  )
}


    
