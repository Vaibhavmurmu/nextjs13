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

      <main className="mt-16 flex w-full flex-1 flex-col items-center justify-centre px-20 text-center">
        <card className="mt-12 w-100 rounded-xl border p-3 text-left hover:text-blue-600 focus:text-blue-600">
          <badage className="text-1xl font-normal mt-2">
            <p className="text-1xl font-normal"><button className='bg-blue-600 text-white font-n py-1 px-3 rounded mt-0'>New</button> Introducing next generation and future of retail &rarr;</p>
          </badage>
        </card>
        <h1 className="mt-12 text-6xl font-bold">
          Live retail streaming<br />
          <a className="text-orange-600" href="https://nextjs.org">
            platform
          </a>
        </h1>

        <p className="mt-12 text-2xl bottom-0">
          Where the retailers build own made live streaming store.
        </p>
        <div className="flex gap-4 mt-2 max-w-1xl flex-wrap items-center justify-around sm:w-full">
        <button className="bg-black hover:bg-blue-600 text-white font-medium hover:text-black py-4 px-14 rounded-lg mt-12">
          <Link href="/register">
            <a>Go live stream</a>
         </Link>
        </button>
        <button className="bg-black hover:bg-blue-600 text-white font-medium hover:text-black py-4 px-14 rounded-lg mt-12">
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
                Real worlds real selling and buying experience
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
        <p className="mt-8 text-1xl text-center text-black hover:text-black">
          Explore more features,benifits and experience on runash live streaming platform.
        </p>
          <div className='mt-16 text-2xl'>
                <h4 className="text-2xl text-black font-bold">Begin your live streaming journey</h4>
        </div>
        <div className="mt-12 flex max-w-7xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left focus:text-black shadow-lg shadow-white "
          >
            <h3 className="text-2xl text-red-600 font-bold">.Live</h3>
            <p className="mt-4 text-xl">
            On Site Schedule
              <br />
              Virtual schedule
              <br />
              When
              <br />
              November 30-10,2022
              <br />
              Type
              <br />
              Streaming
              <br />
              Where
              <br />
              Watch live streaming
              <br />
                <Link href="/login">
                <a className='text-blue-600'>By Seller</a>
                </Link>
            </p>
          </a>
          <a 
            href="https://vercel.com/import"
            className="mt-6 w-96 rounded-xl border p-6 text-left focus:text-black shadow-lg shadow-white"
          >
            <h3 className="text-2xl text-red-600 font-bold">.Live</h3>
            <p className="mt-4 text-xl">
            On Site Schedule
              <br />
              Virtual schedule
              <br />
              When
              <br />
              November 30-10,2022
              <br />
              Type
              <br />
              Streaming
              <br />
              Where
              <br />
              Watch live streaming
              <br />
                <Link href="/login">

                <a className='text-blue-600'>By Seller</a>
                </Link>
            </p>
          </a>
          <a
            href="https://vercel.com/import"
            className="mt-6 w-96 rounded-xl border p-6 text-left focus:text-black shadow-lg shadow-white"
          >
            <h3 className="text-2xl text-red-600 font-bold">.Live</h3>
            <p className="mt-4 text-xl">
            On Site Schedule
              <br />
              Virtual schedule
              <br />
              When
              <br />
              November 30-10,2022
              <br />
              Type
              <br />
              Streaming
              <br />
              Where
              <br />
              Watch live streaming
              <br />
                <Link href="/login">
                <a className='text-blue-600'>By Seller</a>
                </Link>
            </p>
          </a>
          
          <a
            href="https://vercel.com/import"
            className="mt-6 w-96 rounded-xl border p-6 text-left focus:text-black shadow-lg shadow-white "
          >
            
            
            <h3 className="text-2xl text-red-600 font-bold"><code className="">.Live</code></h3>
            <p className="mt-4 text-xl">
            On Site Schedule
              <br />
              Virtual schedule
              <br />
              When
              <br />
              November 30-10,2022
              <br />
              Type
              <br />
              Streaming
              <br />
              Where
              <br />
              Watch live streaming
              <br />
                <Link href="/login">
                <a className='text-blue-600'>By Seller</a>
                </Link>
            </p>
          </a>
          <a
            href="https://vercel.com/import"
            className="mt-6 w-96 rounded-xl border p-6 text-left focus:text-black shadow-lg shadow-white "
          >
            
            
            <h3 className="text-2xl text-red-600 font-bold"><code className="">.Live</code></h3>
            <p className="mt-4 text-xl">
              On Site Schedule
              <br />
              Virtual schedule
              <br />
              When
              <br />
              November 30-10,2022
              <br />
              Type
              <br />
              Streaming
              <br />
              Where
              <br />
              Watch live streaming
                <Link href="/login">
                <a className='text-blue-600'>By Seller</a>
                </Link>
            </p>
          </a>
          </div>


        <div className="flex gap-4 mt-2 max-w-1xl flex-wrap items-center justify-around">
        <button className="bg-black hover:bg-blue-600 text-white font-medium hover:text-black py-4 px-14 rounded-lg mt-12">
          <Link href="/login">
            <a>Get Started</a>
          </Link>
        </button>
        <button className="bg-black hover:bg-blue-600 text-white font-medium hover:text-black py-4 px-14 rounded-lg mt-12">
          <Link href="/register">
            <a>Learn More</a>
          </Link>
        </button>
        </div>
        
         <p className="mt-12 w-full p-5 text-1xl text-centre">
           <Link href="/feedback">
             <a>Give your most valuable feedback to improve live experience better &rarr;</a>
          </Link>
          </p>
        

        <div className="mt-8 flex max-w-full flex-wrap item-centre border justify-around bg-shadow-lg sm:w-full p-8 rounded">
          <p className="mt-8 text-1xl text-bold">
            Get live stream updates
          </p>
          <input className=" mt-3 w-48 text-sm leading-2 rounded-md py-2 pl-10" type="text" aria-label="Email address" placeholder="Email address..."></input>
          <button className="mt-3 bg-black text-white hover:bg-orange-600 hover:text-white font-b py-3 px-14 rounded">Subscribe</button>
        </div>
      </main>
    </div>
  )
}


