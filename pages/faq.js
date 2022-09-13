import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

export default function Faq() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <h1 className="mt-6 text-6xl font-n">
                FAQ
            </h1>
            <p className="mt-6 text-2xl font-n">
                Frequently Asked Questions
            </p>

                <div className="mt-6 w-50 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
                    <h3 className="text-2xl font-bold">What is Live Retail Streaming?</h3>
                    <p className="mt-4 text-xl">
                        Live Retail Streaming is a platform where retailers can meet to buyers and demonstrate their products.
                    </p>
                </div>
                <div className="mt-6 w-50 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
                    <h3 className="text-2xl font-bold">How does it work?</h3>
                    <p className="mt-4 text-xl">
                        Where retailers can create their own made live streaming store and sell experience to the customers.
                    </p>
                </div>
                <div className="mt-6 w-50 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
                    <h3 className="text-2xl font-bold">How much does it cost?</h3>
                    <p className="mt-4 text-xl">
                    Where retailers can create their own made live streaming store and sell experience to the customers.
                    </p>
                </div>
                <div className="mt-6 w-50 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
                    <h3 className="text-2xl font-bold">How do I get started?</h3>
                    <p className="mt-4 text-xl">
                        <Link href="/register">
                            <a>Register</a>
                        </Link> Where retailers can create their own made live streaming store and sell experience to the .
                    </p>
                 </div>
                 <div className="mt-6 w-50 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
                    <h3 className="text-2xl font-bold">How do I get started?</h3>
                    <p className="mt-4 text-xl">
                        <Link href="/register">
                            <a>Register</a>
                        </Link> Where retailers can create their own made live streaming store and sell experience to the .
                    </p>
                 </div>
                 <div className="mt-6 w-50 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
                    <h3 className="text-2xl font-bold">How do I get started?</h3>
                    <p className="mt-4 text-xl">
                        <Link href="/register">
                            <a>Register</a>
                        </Link> Where retailers can create their own made live streaming store and sell experience to the .
                    </p>
                 </div>
                    <div className="mt-6 w-50 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
                    <h3 className="text-2xl font-bold">How do I get started?</h3>
                    <p className="mt-4 text-xl">
                        <Link href="/register">
                            <a>Register</a>
                        </Link> Where retailers can create their own made live streaming store and sell experience to the .
                    </p>
                </div>   
         </div>
        )
    }