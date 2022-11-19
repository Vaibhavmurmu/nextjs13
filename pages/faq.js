import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

export default function Faq() {
    return (
        <div className="mt-16 flex min-h-screen flex-col items-center justify-center py-2">
            <h1 className="mt-12 text-2xl font-n">
                Frequently Asked Question
            </h1>
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
                    <div className="mt-6 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600 pt-20 max-w-md max-auto px-8 space-y-z">
                    <details className="text-2xl font-bold p-4 rounded-lg bg-white">
                    <summary className="text-sm loading-6 font-semibold">If its your first live stream?</summary>
                    <p className="text-gray-600 text-sm mt-4 leading-6">
                       Go to your dashbord and edit your stream stting and preview stream 
                    </p>
                   </details>
                   </div>
                </div>   
         </div>
       
        )
    }
