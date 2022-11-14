import Link from 'next/link'
import Head from 'next/head'

export default function About() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>About RunAsh live</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-centre px-20 text-center">
        <div className='mt-14 text-1xl card'>
                OUR MISSION
        </div>
        <h1 className="mt-12 text-6xl font-bold">
          We enable retailers to build<br /> real sell expercence.
        </h1>

        <p className="mt-14 text-2xl">
        We build live streaming platform for retaile businesses.
        </p>
        <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-16 rounded mt-12">
          <Link href="/">
            <a>Join us</a>
          </Link>
        </button>
        <div className="mt-6 flex max-w-6xl flex-wrap items-center justify-around sm:w-full">
            <a
                href="https://nextjs.org/docs"
                className="mt-6 w-96 rounded-xl border-none p-6 text-centre hover:text-blue-600 focus:text-blue-600"
            >
                <h3 className="text-2xl font-bold">Affordable </h3>
                <p className="mt-4 text-xl">
                    Build run and grow first 
                </p>
            </a>
            <a
                href="https://nextjs.org/learn"
                className="mt-6 w-96 rounded-xl border-none p-6 text-centre hover:text-blue-600 focus:text-blue-600"
                >
                <h3 className="text-2xl font-bold">Sustainable </h3>
                <p className="mt-4 text-xl">
                    Trusted and secure platform 
                </p>
            </a>
            <a
                href="https://nextjs.org/learn"
                className="mt-6 w-96 rounded-xl border-none p-6 text-centre hover:text-blue-600 focus:text-blue-600"
                >
                <h3 className="text-2xl font-bold">Efficent </h3>
                <p className="mt-4 text-xl">
                    Reduce operational cost 
                </p>
            </a>
            <a
                href="https://nextjs.org/learn"
                className="mt-6 w-96 rounded-xl border-none p-6 text-centre hover:text-blue-600 focus:text-blue-600"
                >
                <h3 className="text-2xl font-bold">Scalable</h3>
                <p className="mt-4 text-xl">
                    Build your own live streaming store
                </p>
            </a>
        </div>
        <div className="mt-6 flex main-h-screen flex-col item-centre justify-centre py-2">
        <div className="mt-6 w-full rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
            <h1 className="text-2xl font-bold ">What we do</h1>
            <p className="mt-4 text-xl w-full text-left">
            We are created new model of live streaming marketplace and environment where retailers can <br />meet to buyers and face to face demonstrate and presentation their products<br />
            <Link href="/about">
                <a className="text-blue-600 hover:text-blue-700">Learn more &rarr;</a>
            </Link>
            </p>
        </div>
        <div className="mt-6 w-full rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
            <h1 className="mt-9 text-2xl font-bold">What we going to make</h1>
            <p className="mt-4 text-xl w-full text-left">
            We are committed to building a live retail streaming hybrid platform for unorganised retailers <br />and new ways to use physical reality experience<br />
            <Link href="/about">
                <a className="text-blue-600">Learn more &rarr;</a>
            </Link>
            </p>
        </div>
        <div className="mt-6 w-full rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
            <h1 className="mt-9 text-2xl font-bold">Founder story</h1>
            <p className="mt-4 text-xl text-left">
            We are both brothers,our business journey started in 2007 from a small offline retail store, the <br />Journey from the school classroom to the board room<br />
            <Link href="/about">
                <a className="text-blue-600">Read more &rarr;</a>
            </Link>
            </p>
        </div>
        <div className="mt-6 w-full rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
            <h1 className="mt-9 text-2xl font-bold">Journey</h1>
            <p className="mt-4 text-xl text-left">
            Journey from a small village in India to Sillicone Valley Y Combinator startup school community <br />member<br />
            <Link href="/">
                <a className="text-blue-600">Read more &rarr;</a>
            </Link>
            </p>
        </div>
        </div>
        <p className="mt-6 text-0xl">
            Backed by the best open source MIT Github
        </p>
         <div className="mt-8 flex max-w-full flex-wrap item-centre justify-around bg-gray-50 sm:w-full p-8 rounded-xl border">
          <h2 className="mt-2 text-xl">
            Shape the future of retail 
          </h2>
          <input className="mt-2 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-48 text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Email address" placeholder="Email address..."></input>
          <button className="mt-2 bg-black text-white hover:bg-white hover:text-black font-n py-1 px-3 rounded">Join us</button>
        </div>
        

     </main>
    </div>
    )
}


