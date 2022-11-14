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
        <h1 className="mt-14 text-6xl font-bold">
          Live-on demand{' '}<br /> 
          <a className="text-black" href="https://nextjs.org">
          </a>
        </h1>

        <p className="mt-6 text-2xl bottom-2 text-gray-150">
        Watch previous live streams and get notified when we go live again.
        </p>
        <div className="flex gap-6 mt-2 max-w-0xl flex-wrap items-left justify-around">
        <label className="flex gap-6 mt-2 max-w-0xl flex-wrap item-left justify-around">
                <span className="text-black text-left text-b">Categeries</span>
                <input className="flex w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="text" aria-label="Search" placeholder="Search..."></input>
              </label>
            
            </div>
            <div className="flex gap-6 mt-2 max-w-0xl flex-wrap items-center justify-around">
            <label className="flex gap-6 mt-2 max-w-0xl flex-wrap item-center justify-around">
                <span className="text-gray-700">All categeries</span>
                <select className="flex w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  <option>Select categeries</option>
                  <option>Fruit</option>
                  <option>Dairy food</option>
                  <option>Dray food</option>
                </select>
              </label>
            </div>
            
            <div className="mt-6 flex max-w-7xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Vegetables</h3>
            <p className="mt-4 text-xl">
               Buy fresh vegetables from local farmers.
            </p>
          </a>

            <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
            <h3 className="text-2xl font-bold">Fruits</h3>
            <p className="mt-4 text-xl">
              Buy fresh organic fruits from local farmers. 
            </p>
            </a>

            <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
            <h3 className="text-2xl font-bold">Dairy food</h3>
            <p className="mt-4 text-xl">
              Buy fresh dairy food from local farmers.
            </p>
            </a>

            <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
            <h3 className="text-2xl font-bold">Spices</h3>
            <p className="mt-4 text-xl">
              Buy fresh spices from local farmers.
            </p>
            </a>

            <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
            <h3 className="text-2xl font-bold">Dray food</h3>
            <p className="mt-4 text-xl">
              Buy fresh dry food from local farmers.
            </p>
            </a>

            <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
            <h3 className="text-2xl font-bold">Flower</h3>
            <p className="mt-4 text-xl">
              Buy fresh flowers from local farmers.
            </p>
            </a>

            <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
            <h3 className="text-2xl font-bold">Sea food</h3>
            <p className="mt-4 text-xl">
              Buy fresh sea food from local farmers.
            </p>
            </a>

            <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
            <h3 className="text-2xl font-bold">Meat</h3>
            <p className="mt-4 text-xl">
              Buy fresh meat from local farmers.
            </p>
            </a>

            <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
            <h3 className="text-2xl font-bold">Oil</h3>
            <p className="mt-4 text-xl">
              Buy fresh oil from local farmers.
            </p>
            </a>

            <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
            <h3 className="text-2xl font-bold">Grocery</h3>
            <p className="mt-4 text-xl">
              Buy fresh grocery from local farmers.
            </p>
            </a>

            <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
            <h3 className="text-2xl font-bold">Agri product</h3>
            <p className="mt-4 text-xl">
              Buy fresh agri product from local farmers. 
            </p>
            </a>

            <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
            <h3 className="text-2xl font-bold">Handicraft</h3>
            <p className="mt-4 text-xl">
              Buy fresh handicraft from local farmers.
            </p>
            </a>
        </div>
        <h2 className='mt-24 text-2xl font-normal text-left'>
            Organic products
        </h2>
            <div className="mt-6 flex max-w-7xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Apple</h3>
            <p className="mt-4 text-xl">
              Buy fresh apple from local farmers.
            </p>
          </a>
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Banana</h3>
            <p className="mt-4 text-xl">
              Buy fresh banana from local farmers.
            </p>
          </a>
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Grapes</h3>
            <p className="mt-4 text-xl">
              Buy fresh grapes from local farmers.
            </p>
          </a>
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Orange</h3>
            <p className="mt-4 text-xl">
              Buy fresh orange from local farmers.
            </p>
          </a>
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Blackberry</h3>
            <p className="mt-4 text-xl">
              Buy fresh blackberry from local farmers.
            </p>
          </a>
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Pineapple</h3>
            <p className="mt-4 text-xl">
              Buy fresh pineapple from local farmers.
            </p>
          </a>
          </div>
          <h2 className='mt-12 text-3xl font-b'>
            New products
          </h2>
          <p className="mt-6">
          <code className="text-white bg-blue-700 rounded-xl font-n p-1 text-centre">Coming soon</code>
          </p>
          <div className="mt-8 flex max-w-full flex-wrap item-centre justify-around bg-gray-50 sm:w-full p-8 rounded-xl border">
          <h2 className="mt-2 text-xl">
            Get live notification 
          </h2>
          <input className="mt-2 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-48 text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Email address" placeholder="Email address..."></input>
          <button className="mt-2 bg-black text-white hover:bg-white hover:text-black font-n py-1 px-3 rounded">Subscribe</button>
        </div>
        </main>
        </div>
        )
    }
