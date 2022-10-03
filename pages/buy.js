import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

export default function Buy() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <h1 className="text-6xl font-n">
                NextGen shoppping experience
            </h1>
            <p className="mt-12 text-2xl bottom-2">
            You can meet to seller with face to face real life experience.
            </p>
            <div className="mt-10 flex gap-4">
            <button className="bg-orange-600 hover:bg-green-600 text-white font-bold py-3 px-8 rounded mt-12">
                <Link href="/login">
                    <a>Watch live</a>
                </Link>
            </button>
            <button className="bg-orange-600 hover:bg-green-600 text-white font-bold py-3 px-8 rounded mt-12">
                <Link href="/register">
                    <a>On demand</a>
                </Link>
            </button>
            </div>
            <p className='mt-8 text-2xl font-normal'>
                Categories
            </p>
            <div className="mt-6 flex max-w-7xl flex-wrap items-center justify-around sm:w-full">
                <a
                href="https://nextjs.org/docs"
                className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
                >
                <h3 className="text-2xl font-bold">Fruit</h3>
                <p className="mt-4 text-xl">
                    Organic and fresh fruits
                </p>
                <a href="https://nextjs.org/docs">
                    <Image
                    src="/images/fruit.jpg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    />
                </a>

                </a>
            </div>

            
        </div>
        )
    }