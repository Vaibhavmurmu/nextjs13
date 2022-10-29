import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

export default function Sell() {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Live Retail Streaming</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-centre px-20 text-center">
        <card className="mt-12 w-100 rounded-xl border p-3 text-left hover:text-blue-600 focus:text-blue-600">
          <text className="text-1xl font-normal mt-2">
            <p className="text-1xl font-normal"><button className="bg-blue-600 text-white font-n py-1 px-3 rounded mt-0">Latest</button> Introducing next generation and futre of retail &rarr;</p>   
          </text>
          </card> 
        <h1 className="mt-12 text-6xl font-bold">
          Build your own live{' '}<br /> 
          <a className="text-orange-600" href="https://nextjs.org">
           streaming.
          </a>
        </h1>

        <p className="mt-12 text-2xl bottom-2">
        Give your store a real selling experience on a complete digitization.
        </p>
        <div className="flex gap-6 mt-6 max-w-0xl flex-wrap items-center justify-around">
        <button className="bg-orange-600 hover:bg-green-600 text-white font-bold py-3 px-8 rounded mt-12">
          <Link href="/login">
            <a>Start building</a>
          </Link>
        </button>
        <button className="bg-orange-600 hover:bg-green-600 text-white font-bold py-3 px-8 rounded mt-12">
          <Link href="/register">
            <a>Get a demo</a>
          </Link>
        </button>
        </div>
            <p className='mt-8 text-2xl font-normal'>
                Unique features
            </p>
            <div className="mt-6 flex max-w-7xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Ubiquity</h3>
            <p className="mt-4 text-xl">
               Reduce your selling costs and sustain more efficient
            </p>
          </a>

            <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
            <h3 className="text-2xl font-bold">Global reach</h3>
            <p className="mt-4 text-xl">
               Reaches your customers,around the earth 
            </p>
            </a>

            <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
            <h3 className="text-2xl font-bold">Universal standards</h3>
            <p className="mt-4 text-xl">
               High quality live streaming technology across the globe
            </p>
            </a>

            <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
            <h3 className="text-2xl font-bold">Richness</h3>
            <p className="mt-4 text-xl">
              Real video selling are possible and cusuming real experience
            </p>
            </a>

            <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
            <h3 className="text-2xl font-bold">Interactivity</h3>
            <p className="mt-4 text-xl">
              Engaged face to face interaction with customers 
            </p>
            </a>

            <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
            <h3 className="text-2xl font-bold">Information density</h3>
            <p className="mt-4 text-xl">
              Reduces costs and raises high quality business 
            </p>
            </a>

            <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
            <h3 className="text-2xl font-bold">Personalization</h3>
            <p className="mt-4 text-xl">
               Technology allows personalized own made business experience
            </p>
            </a>

            <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
            <h3 className="text-2xl font-bold">Customisation</h3>
            <p className="mt-4 text-xl">
               Technology delivered real experience on business characteristics
            </p>
            </a>

            <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
            <h3 className="text-2xl font-bold">DiffServe</h3>
            <p className="mt-4 text-xl">
                The promise of high quality live streaming
            </p>
            </a>

            <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
            <h3 className="text-2xl font-bold">Physcial reality</h3>
            <p className="mt-4 text-xl">
                Real selling experice on real digitization
            </p>
            </a>

            <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
            <h3 className="text-2xl font-bold">Light/dark theme</h3>
            <p className="mt-4 text-xl">
               Light and dark protanopia and deuterannopia theme 
            </p>
            </a>

            <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
            <h3 className="text-2xl font-bold">Mobile fast</h3>
            <p className="mt-4 text-xl">
                High performance real streaming on mobile devices
            </p>
            </a>
        </div>
        <h2 className='mt-24 text-2xl font-normal'>
            Unique advantage for live sell
        </h2>
        <p className="mt-6 text-xl">
          Your business and sales experience with earning more benifits.
        </p>
            <div className="mt-6 flex max-w-7xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">1st payment</h3>
            <p className="mt-4 text-xl">
                Real time disvered your payment
            </p>
          </a>
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Trusted</h3>
            <p className="mt-4 text-xl">
                Trusted payment system
            </p>
          </a>
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Secure</h3>
            <p className="mt-4 text-xl">
                Your conten is safe and secure
            </p>
          </a>
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Verified</h3>
            <p className="mt-4 text-xl">
                Your products will be verified by us
            </p>
          </a>
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Private</h3>
            <p className="mt-4 text-xl">
                Your live streaming is private
            </p>
          </a>
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Organic</h3>
            <p className="mt-4 text-xl">
                Organic business,product and brand
            </p>
          </a>
          </div>
          <h2 className='mt-12 text-3xl font-b'>
            How it works
          </h2>
          <p className="mt-6 text-xl">
           Get started in few steps and go live streaming
          </p>
          <div className="mt-8 flex  max-w-10xl flex-wrap items-center justify-around sm:w-full">
          <p className='mt-6 w-96 rounded-xl border p-6 text-left bg-white hover:text-blue-600 focus:text-blue-600'><button className="bg-black text-white font-n py-0 px-2 rounded-3xl mt-0">1</button> Create your live account
          </p>
          <p className='mt-6 w-96 rounded-xl border p-6 text-left bg-white hover:text-blue-600 focus:text-blue-600'><button className="bg-black text-white font-n py-0 px-2 rounded-3xl mt-0">2</button> Record and upload content
          </p>
          <p className='mt-6 w-96 rounded-xl border p-6 text-left bg-white hover:text-blue-600 focus:text-blue-600'><button className="bg-black text-white font-n py-0 px-2 rounded-3xl mt-0">3</button> Set prefered date and time
          </p>
          <p className='mt-6 w-96 rounded-xl border p-6 text-left bg-white hover:text-blue-600 focus:text-blue-600'><button className="bg-black text-white font-n py-0 px-2 rounded-3xl mt-0">4</button> Get ready for live-stream
          </p>
          </div>
          <h2 className='mt-24 text-3xl font-b'>
            Live Demonstration
            </h2>
          <p className="mt-6 text-xl">
           Our team personally explains you, how to go live 
          </p>
          <div className="mt-8 flex max-w-full flex-wrap item-centre justify-around bg-gray-50 sm:w-full p-8 rounded">
          <h2 className="mt-2 text-bold">
            Get live stream updates
          </h2>
          <input className="mt-2 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-48 text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Email address" placeholder="Email address..."></input>
          <button className="mt-2 bg-black text-white hover:bg-white hover:text-black font-n py-1 px-3 rounded">Subscribe</button>
        </div>
        </main>
        </div>
        )
    }