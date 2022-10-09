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
          Build your own made{' '}<br /> 
          <a className="text-orange-600" href="https://nextjs.org">
           live streaming.
          </a>
        </h1>

        <p className="mt-12 text-2xl bottom-2">
        Give your store a real selling experience on a complete real digitization.
        </p>
        <div className="mt-10 flex gap-4">
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
            Benifits for live sell
        </h2>
        <p className="mt-6">
          Your business,your sell experience.your benifits and earn more.
        </p>
        <div className="tm-6 flex max-w-8xl flex-wrap items-center justify-around sm:w-full"> 
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl  p-6 text-left hover:text-blue-600 focus:text-orange-600"
          >
            <h3 className="text-2xl font-bold">1st payment</h3>
            <p className="mt-4 text-xl">
                Real time disvered your payment
            </p>
          </a>
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl  p-6 text-left hover:text-blue-600 focus:text-orange-600"
          >
            <h3 className="text-2xl font-bold">Trusted</h3>
            <p className="mt-4 text-xl">
                Trusted payment system
            </p>
          </a>
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl  p-6 text-left hover:text-blue-600 focus:text-orange-600"
          >
            <h3 className="text-2xl font-bold">Secure</h3>
            <p className="mt-4 text-xl">
                Your conten is safe and secure
            </p>
          </a>
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl  p-6 text-left hover:text-blue-600 focus:text-orange-600"
          >
            <h3 className="text-2xl font-bold">Verified</h3>
            <p className="mt-4 text-xl">
                Your products will be verified by us
            </p>
          </a>
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl  p-6 text-left hover:text-blue-600 focus:text-orange-600"
          >
            <h3 className="text-2xl font-bold">Private</h3>
            <p className="mt-4 text-xl">
                Your live streaming is private
            </p>
          </a>
          </div>
          <h2 className='mt-12 text-3xl font-b'>
            How it works
          </h2>
          <p className="mt-6">
           Get started in few steps and go live streaming
          </p>
          <div className="mt-8 flex max-w-8xl flex-wrap items-center justify-around sm:w-full bg-amber-50 p-8 rounded">
          <p className='mt-0 w-25 rounded-xl p-6 text-left bg-white hover:text-blue-600 focus:text-blue-600'><button className="bg-black text-white font-n py-0 px-2 rounded-3xl mt-0">1</button>Create your live seller account
          </p>
          <p className='mt-0 w-25 rounded-xl p-6 text-left bg-white hover:text-blue-600 focus:text-blue-600'><button className="bg-black text-white font-n py-0 px-2 rounded-3xl mt-0">1</button>Create and upload your live streaming
          </p>
          <p className='mt-0 w-25 rounded-xl p-6 text-left bg-white hover:text-blue-600 focus:text-blue-600'><button className="bg-black text-white font-n py-0 px-2 rounded-3xl mt-0">1</button>Set your prefered date and time
          </p>
          <p className='mt-0 w-25 rounded-xl p-6 text-left bg-white hover:text-blue-600 focus:text-blue-600'><button className="bg-black text-white font-n py-0 px-2 rounded-3xl mt-0">1</button>Than you are ready to go live
          </p>
          </div>
          <h2 className='mt-24 text-3xl font-b'>
            The Live Demonstration
            </h2>
          <p className="mt-6">
           Our team explain you how to go live sell
          </p>
          <div className="mt-24 flex max-w-8xl flex-wrap items-centre justify-around sm:-w-full bg-amber-50 p-8 rounded">
           <h2 className="text-1xl font-bold">
            Get support 24 x 7 x 365 days with CEO.
            </h2>
            <p className="text-centre">
            "We belive our helpfullness discipline and culture"
            </p>
            <button className="bg-black hover:bg-blue-600 text-white font-bold py-3 px-8 rounded mt-0 text-centre">Connect with us</button>
          </div>
        </main>
        </div>
        )
    }