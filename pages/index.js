import Link from 'next/link'
import Head from 'next/head'
import Image from "next/image"
import Button from '../components/Button'
import Cta from '../components/Cta'

export default function Index() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Live Retail Streaming</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mt-16 flex w-full flex-1 flex-col items-center justify-centre px-20 text-center ">
        <card className="mt-14 w-100 rounded-xl border bg-white/40 backdrop-blur-md p-3 text-left hover:text-blue-600 focus:text-blue-600">
          <badage className="text-1xl font-normal mt-2">
            <p className="text-1xl w-96 font-normal"><button className='bg-blue-600 text-white font-n py-1 px-3 rounded mt-0'>New</button> Introducing NextGen and future of retail &rarr;</p>
          </badage>
        </card>
        <h1 className="mt-12 text-8xl font-bold tracking-tight sm:text-center sm:text-6xl">
          Live retail streaming<br />
          <a className="text-orange-600" href="https://nextjs.org">
            platform
          </a>
        </h1>

        <p className="mt-12 text-2xl bottom-2 sm:text-center">
          Where the retailers build own made live streaming store
        </p>
        <Button />
           <p className='mt-12 text-0 bottom-2'>
            Get started free
           </p>
           <h1 className="mt-2 text-2xl bottom-2">
                <a className="text-black-600" href="https://nextjs.org">
                Unique experience ✨
                </a>
            </h1>
            <p className="mt-2 text-1xl bottom-2">
                Real worlds real selling and buying experience
            </p>
        <div className="mt-12 flex max-w-5xl columns-3 flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-80 rounded-xl border p-6 text-left focus:text-black shadow-lg shadow-white"
          >
            <h3 className="text-2xl font-bold">Real Selling</h3>
            <p className="mt-4 text-xl">
              Retailers can meet to buyers and demonstrate products
              <br />
                <Link href="/login">
                <a className='text-blue-600'>Learn more &rarr;</a>
                </Link>
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="mt-6 w-80 rounded-xl border p-6 text-left focus:text-blue-600"
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
            className="mt-6 w-80 rounded-xl border p-6 text-left focus:text-blue-600"
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
            className="mt-6 w-80 rounded-xl border p-6 text-left focus:text-blue-600"
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
            className="mt-6 w-80 rounded-xl border p-6 text-left focus:text-blue-600"
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
            className="mt-6 w-80 rounded-xl border p-6 text-left focus:text-blue-600"
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
            className="mt-6 w-80 rounded-xl border p-6 text-left focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Influencers</h3>
            <p className="mt-4 text-xl">
              Find live influencers here you can support businesses.
              <br />
                <Link href="/register">
                <a className='text-blue-600'>Learn more &rarr;</a>
                </Link>
            </p>
          </a>
          <a
            href="https://vercel.com/import"
            className="mt-6 w-80 rounded-xl border p-6 text-left focus:text-blue-600"
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
            className="mt-6 w-80 rounded-xl border p-6 text-left focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Votes & Polls</h3>
            <p className="mt-4 text-xl">
              Give instant feedback opinion and polling for live sell
              <br />
                <Link href="/register">
                <a className='text-blue-600'>Learn more &rarr;</a>
                </Link>
            </p>
            </a>
            <a
            href="https://vercel.com/"
            className="mt-6 w-80 rounded-xl border p-6 text-left focus:text-blue-600"
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
            className="mt-6 w-80 rounded-xl border p-6 text-left focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Remote Jobs</h3>
            <p className="mt-4 text-xl">
              Find the best jobs curated by runash remote team
              <br />
                <Link href="/register">
                <a className='text-blue-600'>Learn more &rarr;</a>
                </Link>
            </p>
          </a>
          <a
            href="https://vercel.com/import"
            className="mt-6 w-80 rounded-xl border p-6 text-left focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Mobile App</h3>
            <p className="mt-4 text-xl">
              Download the live stream app available for iSO and Android.
              <br />
                <Link href="/register">
                <a className='text-blue-600'>Learn more &rarr;</a>
                </Link>
            </p>
          </a>
        </div>
        <p className="mt-8 text-xl leading-8 bottom-0 sm:text-center text-black hover:text-black">
          Explore more features,benifits and experience 
        </p>
        <h1 className="mt-12 text-2xl text-black font-b tracking-tight sm:text-center sm:text-3xl">
            Being your live journey
        </h1>

        <p className="mt-12 text-xl leading-8 bottom-0 sm:text-center">
          Lets build your live broadcast product contents
        </p>
        <div className="flex gap-4 flex-wrap mt-4 items-center justify-around">
        <button className="bg-black text-white hover:text-black hover:bg-white border hover:border-black font-medium py-4 px-16 rounded-md mt-10">
          <Link href="/register">
            <a>Get strarted</a>
         </Link>
        </button>
        <button className="bg-black text-white hover:bg-white hover:text-black border hover:border-black font-medium py-4 px-16 rounded-lg mt-10">
          <Link href="/register">
            <a>Schedule</a>
          </Link>
        </button>
        </div>   
        <p className='mt-12 text-xl sm:text-center leading-8 bottom-0'>
          <a>Give your most valuable feedback to improve live experience better &rarr;</a>
        </p>
        <div className="mt-3 flex max-w-80 flex-wrap item-centre rounded-xl border justify-around bg-shadow-xl sm:w-full py-8">
          <p className="mt-3 text-2xl text-bold">
            Get live stream updates
          </p>
          <input className=" mt-3 w-48 text-sm rounded-md" type="search" placeholder="Email address..."></input>
          <button className="mt-3 bg-orange-600 text-white hover:bg-white hover:text-orange-600 font-b py-3 px-14 border hover:border-orange-600 rounded-md">Subscribe</button>
        </div>
      </main>
    </div>
  )
}


