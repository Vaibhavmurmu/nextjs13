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

      <main className="mt-16 flex w-full flex-1 flex-col items-center justify-centre px-20 text-center">
        <card className="mt-12 w-100 rounded-xl border p-3 text-left hover:text-blue-600 focus:text-blue-600">
          <text className="text-1xl font-normal mt-2">
            <p className="text-1xl font-normal"><button className="bg-blue-600 text-white font-n py-1 px-3 rounded mt-0">Latest</button> Introducing next generation and futre of shopping &rarr;</p>   
          </text>
          </card> 
        <h1 className="mt-12 text-6xl font-bold">
          NextGen shopping{' '}<br /> 
          <a className="text-orange-600" href="https://nextjs.org">
           experience
          </a>
        </h1>

        <p className="mt-12 text-2xl bottom-2">
        You can meet to seller with face-to-face real life experience
        </p>
        <div className="flex gap-6 mt-2 max-w-0xl flex-wrap items-center justify-around">
        <button className="bg-orange-600 hover:bg-green-600 text-white font-bold py-3 px-14 rounded mt-4">
          <Link href="/login">
            <a>Start shopping</a>
          </Link>
        </button>
        <button className="bg-orange-600 hover:bg-green-600 text-white font-bold py-3 px-14 rounded mt-4">
          <Link href="/register">
            <a>Watch products</a>
          </Link>
        </button>
        </div>
            <p className='mt-8 text-2xl font-normal'>
                Unique real experience 
            </p>
            <div className="mt-6 flex max-w-7xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Ubiquity</h3>
            <p className="mt-4 text-xl">
               Reduce your shopping costs and sustain more efficient
            </p>
          </a>

            <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
            <h3 className="text-2xl font-bold">Global reach</h3>
            <p className="mt-4 text-xl">
               Reaches your organic product need,around the worlds 
            </p>
            </a>

            <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
            <h3 className="text-2xl font-bold">Universal standards</h3>
            <p className="mt-4 text-xl">
               High quality organic and fresh products across the globe collection
            </p>
            </a>

            <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
            <h3 className="text-2xl font-bold">Richness</h3>
            <p className="mt-4 text-xl">
              Organic products are possible and cusuming in the future
            </p>
            </a>

            <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
            <h3 className="text-2xl font-bold">Interactivity</h3>
            <p className="mt-4 text-xl">
              Engaged face to face interaction with seller 
            </p>
            </a>

            <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
            <h3 className="text-2xl font-bold">Information density</h3>
            <p className="mt-4 text-xl">
              Reduce costs and raises high quality organic products 
            </p>
            </a>

            <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
            <h3 className="text-2xl font-bold">Personalization</h3>
            <p className="mt-4 text-xl">
               Technology allows personalized own made shopping experience
            </p>
            </a>

            <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
            <h3 className="text-2xl font-bold">Customisation</h3>
            <p className="mt-4 text-xl">
               Technology delivered real experience on shopping characteristics
            </p>
            </a>

            <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
            <h3 className="text-2xl font-bold">DiffServe</h3>
            <p className="mt-4 text-xl">
                The promise of high quality organic products and experice
            </p>
            </a>

            <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
            <h3 className="text-2xl font-bold">Physcial reality</h3>
            <p className="mt-4 text-xl">
                Real shopping experice on organic products
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
            Advantage for live shopping
        </h2>
        <p className="mt-6 text-xl">
          Real shopping and barganing experience
        </p>
            <div className="mt-6 flex max-w-7xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Secure payment</h3>
            <p className="mt-4 text-xl">
                Payment gatway is secured and safe
            </p>
          </a>
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Trusted product</h3>
            <p className="mt-4 text-xl">
                Trusted organic products and services
            </p>
          </a>
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Secure transaction</h3>
            <p className="mt-4 text-xl">
                Your shopping data is safe and secure
            </p>
          </a>
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Verified</h3>
            <p className="mt-4 text-xl">
                Organic products is runash verified
            </p>
          </a>
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Private</h3>
            <p className="mt-4 text-xl">
                Your live streaming content is private
            </p>
          </a>
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Organic product</h3>
            <p className="mt-4 text-xl">
                Organic and fresh products
            </p>
          </a>
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Fast delivery</h3>
            <p className="mt-4 text-xl">
                Fast delivery in your door step
            </p>
          </a>
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Easy return</h3>
            <p className="mt-4 text-xl">
                Easy return of organic products
            </p>
          </a>
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Pay on delivery</h3>
            <p className="mt-4 text-xl">
                Products your hands before you pay
            </p>
          </a>
          </div>
          <h2 className='mt-12 text-3xl font-b'>
            How it works
          </h2>
          <p className="mt-6 text-xl">
           Few steps and get started live shopping
          </p>
          <div className="mt-8 flex  max-w-7xl flex-wrap items-center justify-around sm:w-full">
          <p className='mt-6 w-96 rounded-xl border p-6 text-left bg-white hover:text-blue-600 focus:text-blue-600'><button className="bg-black text-white font-n py-0 px-2 rounded-3xl mt-0">1</button> Create your live account
          </p>
          <p className='mt-6 w-96 rounded-xl border p-6 text-left bg-white hover:text-blue-600 focus:text-blue-600'><button className="bg-black text-white font-n py-0 px-2 rounded-3xl mt-0">2</button> Watch and schedule a live streaming 
          </p>
          <p className='mt-6 w-96 rounded-xl border p-6 text-left bg-white hover:text-blue-600 focus:text-blue-600'><button className="bg-black text-white font-n py-0 px-2 rounded-3xl mt-0">3</button> schedule prefered date and time
          </p>
          <p className='mt-6 w-96 rounded-xl border p-6 text-left bg-white hover:text-blue-600 focus:text-blue-600'><button className="bg-black text-white font-n py-0 px-2 rounded-3xl mt-0">4</button> Get ready for join live-stream
          </p>
          </div>
          <h2 className='mt-24 text-3xl font-b'>
            Real experience
            </h2>
          <p className="mt-6 text-xl">
           Watched and schedule live streaming
          </p>
          <div className="mt-8 flex max-w-full flex-wrap item-centre justify-around bg-gray-50 sm:w-full p-8 rounded-xl border">
          <h2 className="mt-2 text-xl">
            Get live stream updates
          </h2>
          <input className="mt-2 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-48 text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Email address" placeholder="Email address..."></input>
          <button className="mt-2 bg-black text-white hover:bg-white hover:text-black font-n py-1 px-3 rounded">Subscribe</button>
        </div>
        </main>
        </div>
        )
    }
