import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

export default function Contact() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <h1 className="text-6xl font-n">
                RunAsh teams are here to help us
            </h1>
            <p className="mt-6 text-2xl font-n">
                Get in touch and let us know how we can help you.
            </p>
        <div className="mt-12 flex max-w-7xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left focus:text-black shadow-lg shadow-white"
          >
            <h3 className="text-2xl font-bold">Help</h3>
            <p className="mt-4 text-xl">
              Need .
              <br />
                <Link href="/login">
                <a className='text-blue-600'><button className="bg-orange-600 hover:bg-black text-white font-medium py-3 px-12 rounded-lg p-3 mt-12">Get Help &rarr;</button></a>
                </Link>
            </p>
          </a>
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left focus:text-black shadow-lg shadow-white"
          >
            <h3 className="text-2xl font-bold">Support</h3>
            <p className="mt-4 text-xl">
              We are here to help with any RunAsh releted questions.
              <br />
                <Link href="/login">
                <a className='text-blue-600'><button className="bg-orange-600 hover:bg-black text-white font-medium py-3 px-12 rounded-lg p-3 mt-12">Get Support &rarr;</button></a>
                </Link>
            </p>
          </a>
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left focus:text-black shadow-lg shadow-white"
          >
            <h3 className="text-2xl font-bold">Become a seller</h3>
            <p className="mt-4 text-xl">
              We did love to talk about how we can work together.
              <br />
                <Link href="/login">
                <a className='text-blue-600'><button className="bg-orange-600 hover:bg-black text-white font-medium py-3 px-12 rounded-lg p-3 mt-12">Contact Sales &rarr;</button></a>
                </Link>
            </p>
          </a>
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left focus:text-black shadow-lg shadow-white"
          >
            <h3 className="text-2xl font-bold">Become a buyer</h3>
            <p className="mt-4 text-xl">
              We did love to talk about how we can work together.
              <br />
                <Link href="/login">
                <a className='text-blue-600'><button className="bg-orange-600 hover:bg-black text-white font-medium py-3 px-12 rounded-lg p-3 mt-12">Contact Buying &rarr;</button></a>
                </Link>
            </p>
          </a>
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left focus:text-black shadow-lg shadow-white"
          >
            <h3 className="text-2xl font-bold">Partner</h3>
            <p className="mt-4 text-xl">
              Join our partner ecosystem and accelerate your business with us.
              <br />
                <Link href="/login">
                <a className='text-blue-600'><button className="bg-orange-600 hover:bg-black text-white font-medium py-3 px-12 rounded-lg p-3 mt-12">Become a Partner &rarr;</button></a>
                </Link>
            </p>
          </a>
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left focus:text-black shadow-lg shadow-white"
          >
            <h3 className="text-2xl font-bold">Influencer</h3>
            <p className="mt-4 text-xl">
              Join our helpfullness ecosysytem and accelerate your business with us.
              <br />
                <Link href="/login">
                <a className='text-blue-600'><button className="bg-orange-600 hover:bg-black text-white font-medium py-3 px-12 rounded-lg p-3 mt-12">Join Us Community &rarr;</button></a>
                </Link>
            </p>
          </a>
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left focus:text-black shadow-lg shadow-white"
          >
            <h3 className="text-2xl font-bold">Docs</h3>
            <p className="mt-4 text-xl">
              Learn more about how runash makes you business journey easier.
              <br />
                <Link href="/login">
                <a className='text-blue-600'><button className="bg-orange-600 hover:bg-black text-white font-medium py-3 px-12 rounded-lg p-3 mt-12">Visit Docs &rarr;</button></a>
                </Link>
            </p>
          </a>

        </div>
        <div className="mt-12 flex main-h-screen flex-col item-centre justify-centre py-2">
        <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl p-6 text-left focus:text-black shadow-lg shadow-white"
          >
            <h3 className="text-2xl font-bold">Facebook</h3>
            <p className="mt-4 text-xl">
              Get latest update and lunched for live stream.
              <br />
                <Link href="/login">
                <a className='text-blue-600'></a>
                </Link>
            </p>
          </a>
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl p-6 text-left focus:text-black shadow-lg shadow-white"
          >
            <h3 className="text-2xl font-bold">Join our community</h3>
            <p className="mt-4 text-xl">
              For business related support join our influencer program.
              <br />
                <Link href="/login">
                <a className='text-blue-600'></a>
                </Link>
            </p>
          </a>
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl p-6 text-left focus:text-black shadow-lg shadow-white"
          >
            <h3 className="text-2xl font-bold">Twitter</h3>
            <p className="mt-4 text-xl">
              Get RunAsh new,company information, and media resource @runash_.
              <br />
                <Link href="/login">
                <a className='text-blue-600'></a>
                </Link>
            </p>
          </a>
        </div>
        <div className="mt-8 flex max-w-8xl flex-wrap item-centre justify-around sm:w-full bg-amber-50 p-8 rounded">
          <h2 className="text-bold">
            Buil Growing 10x Fast
          </h2>
          <button className="bg-black text-white hover:bg-white hover:text-black font-n py-1 px-3 rounded mt-0">Subscribe</button>
        </div>
        </div>
        )
    }