import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

export default function Faq() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <h1 className="mt-12 text-6xl font-n">
                FAQ
            </h1>
            <p className="mt-6 text-2xl font-n">
                Frequently Asked Questions
            </p>
                <div className="mt-6 flex main-h-screen flex-col item-centre justify-centre py-2">
                <div className="mt-6 w-full rounded-xl border p-6 text-left item-centre justify-centre hover:text-blue-600 focus:text-blue-600">
                    <h3 className="text-2xl font-bold">What is runash live streaming?</h3>
                    <p className="mt-4 text-xl">
                        RunAsh is a live retail streaming platform, where retailers can meet to buyers and demonstrate their products.
                    </p>
                </div>
                <div className="mt-6 w-full rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
                    <h3 className="text-2xl font-bold">How does it work?</h3>
                    <p className="mt-4 text-xl">
                        Create account, and record or upload yor products,setup prefered date and time,then ready to live.
                    </p>
                </div>
                <div className="mt-6 w-full rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
                    <h3 className="text-2xl font-bold">How much does it cost?</h3>
                    <p className="mt-4 text-xl">
                    Free tier of cost upon initial use for 6 months then we charge pay as you go pricing,pay for total duration of live inpute.
                    </p>
                </div>
                <div className="mt-6 w-full rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
                    <h3 className="text-2xl font-bold">How to get started live straming?</h3>
                    <p className="mt-4 text-xl">
                        <Link href="/register">
                            <a></a>
                        </Link> First create a stream, install studio and create go live to open the live page and clicke stream tab.
                    </p>
                 </div>
                 <div className="mt-6 w-full rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
                    <h3 className="text-2xl font-bold">What we do for you?</h3>
                    <p className="mt-4 text-xl">
                        <Link href="/register">
                            <a></a>
                        </Link>RunAsh platform is managed yorur live streaming contents that lets you buld interactive real sell experience.
                    </p>
                 </div>
                 <div className="mt-6 w-full rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
                    <h3 className="text-2xl font-bold">How to schedule a live streaming?</h3>
                    <p className="mt-4 text-xl">
                        <Link href="/register">
                            <a></a>
                        </Link>Go to your dashbord and setup your prefered date and time then displaying your live products contents.
                    </p>
                 </div>
                    <div className="mt-6 w-full rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
                    <h3 className="text-2xl font-bold">If its your first live stream?</h3>
                    <p className="mt-4 text-xl">
                        <Link href="/register">
                            <a></a>
                        </Link>Go to your dashbord and edit your stream stting and preview stream .
                    </p>
                    </div>
                </div>   
         </div>
        <div className="mt-8 flex max-w-full flex-wrap item-centre justify-around bg-gray-50 sm:w-full p-8 rounded-xl border">
          <h2 className="mt-2 text-xl">
            Get live help
          </h2>
          <input className="mt-2 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-48 text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Email address" placeholder="Email address..."></input>
          <button className="mt-2 bg-black text-white hover:bg-white hover:text-black font-n py-1 px-3 rounded">Subscribe</button>
        </div>
        )
    }
