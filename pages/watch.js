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

      <main className="mt-16 flex w-full flex-1 flex-col bg-black dark:bg-black dark:text-white items-center justify-centre px-20 text-center">
        <h1 className="mt-16 text-4xl font-bold text-white dark:text-white tracking-tight sm:text-center sm:text-6xl">
          Live-on demand{' '}<br /> 
          <a className="text-white" href="https://nextjs.org">
            streaming
          </a>
        </h1>

        <p className="mt-6 text-lg leading-8 text-white sm:text-center">
        Watch previous streams and get notified when we go live again.
        </p>
        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
        <label className="mt-6 w-96 rounded-xl border p-6 text-left text-white hover:text-white focus:text-white">
                <span className="text-whitw text-left text-b">Categeries</span>
                <input className="flex w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="text" aria-label="Search" placeholder="Search..."></input>
              </label>
            <label className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
                <span className="text-white">All categeries</span>
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
            className="mt-6 w-96 rounded-xl border p-6 text-left text-white hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Vegetables</h3>
            <p className="mt-4 text-xl">
               Buy fresh vegetables from local farmers.
            </p>
          </a>

            <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left text-white hover:text-blue-600 focus:text-blue-600"
            >
            <h3 className="text-2xl font-bold">Fruits</h3>
            <p className="mt-4 text-xl">
              Buy fresh organic fruits from local farmers. 
            </p>
            </a>

            <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left text-white hover:text-blue-600 focus:text-blue-600"
            >
            <h3 className="text-2xl font-bold">Dairy food</h3>
            <p className="mt-4 text-xl">
              Buy fresh dairy food from local farmers.
            </p>
            </a>

            <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left text-white hover:text-blue-600 focus:text-blue-600"
            >
            <h3 className="text-2xl font-bold">Spices</h3>
            <p className="mt-4 text-xl">
              Buy fresh spices from local farmers.
            </p>
            </a>

            <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left text-white hover:text-blue-600 focus:text-blue-600"
            >
            <h3 className="text-2xl font-bold">Dray food</h3>
            <p className="mt-4 text-xl">
              Buy fresh dry food from local farmers.
            </p>
            </a>

            <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left text-white hover:text-blue-600 focus:text-blue-600"
            >
            <h3 className="text-2xl font-bold">Flower</h3>
            <p className="mt-4 text-xl">
              Buy fresh flowers from local farmers.
            </p>
            </a>

            <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left text-white hover:text-blue-600 focus:text-blue-600"
            >
            <h3 className="text-2xl font-bold">Sea food</h3>
            <p className="mt-4 text-xl">
              Buy fresh sea food from local farmers.
            </p>
            </a>

            <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left text-white hover:text-blue-600 focus:text-blue-600"
            >
            <h3 className="text-2xl font-bold">Meat</h3>
            <p className="mt-4 text-xl">
              Buy fresh meat from local farmers.
            </p>
            </a>

            <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left text-white hover:text-blue-600 focus:text-blue-600"
            >
            <h3 className="text-2xl font-bold">Oil</h3>
            <p className="mt-4 text-xl">
              Buy fresh oil from local farmers.
            </p>
            </a>

            <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left text-white hover:text-blue-600 focus:text-blue-600"
            >
            <h3 className="text-2xl font-bold">Grocery</h3>
            <p className="mt-4 text-xl">
              Buy fresh grocery from local farmers.
            </p>
            </a>

            <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left text-white hover:text-blue-600 focus:text-blue-600"
            >
            <h3 className="text-2xl font-bold">Agri product</h3>
            <p className="mt-4 text-xl">
              Buy fresh agri product from local farmers. 
            </p>
            </a>

            <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left text-white hover:text-blue-600 focus:text-blue-600"
            >
            <h3 className="text-2xl font-bold">Handicraft</h3>
            <p className="mt-4 text-xl">
              Buy fresh handicraft from local farmers.
            </p>
            </a>
        </div>
        <h2 className='mt-24 text-2xl text-white font-normal text-left'>
            Organic products
        </h2>
            <div className="mt-6 flex max-w-7xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left text-white hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Apple</h3>
            <p className="mt-4 text-xl">
              Buy fresh apple from local farmers.
            </p>
          </a>
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left text-white hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Banana</h3>
            <p className="mt-4 text-xl">
              Buy fresh banana from local farmers.
            </p>
          </a>
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left text-white hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Grapes</h3>
            <p className="mt-4 text-xl">
              Buy fresh grapes from local farmers.
            </p>
          </a>
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left text-white hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Orange</h3>
            <p className="mt-4 text-xl">
              Buy fresh orange from local farmers.
            </p>
          </a>
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left text-white hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Blackberry</h3>
            <p className="mt-4 text-xl">
              Buy fresh blackberry from local farmers.
            </p>
          </a>
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left text-white hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Pineapple</h3>
            <p className="mt-4 text-xl">
              Buy fresh pineapple from local farmers.
            </p>
          </a>
          </div>
          <h2 className='mt-12 text-3xl text-white font-b'>
            New products
          </h2>
          <p className="mt-6">
          <span className="mt-2 bg-black text-white hover:bg-white hover:text-black font-n py-1 px-3 border-xl rounded">Coming soon</span>
          </p>
          
        </main>
        </div>
        )
    }
