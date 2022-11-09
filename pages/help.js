import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

export default function Help() {
    return (
        <main className="mt-16 flex w-full flex-1 flex-col items-center justify-centre px-20 text-center">
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <h1 className="mt-12 text-6xl font-n">
                How can we help?
            </h1>
            <div className="py-8">
          <p className="text-1xl font-b"> Get schedule a live help and reach out 24 x 7 x 365 days</p>
          <div className="mt-12 max-w-md w-full rounded-xl border p-6 text-left focus:text-black shadow-lg shadow-white">
            <div className="grid grid-cols-1 gap-6">
              <label className="block">
                <span className="text-gray-700">Your name</span>
                <input
                  type="text"
                  className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                  placeholder="your name..."
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Email address</span>
                <input
                  type="email"
                  className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                  placeholder="email address..."
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Help schedule?</span>
                <input
                  type="date"
                  className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                />
              </label>
              <label className="block">
                <span className="text-gray-700">What type of help do you want?</span>
                <select
                  className="
                    block
                    w-full
                    mt-1
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                >
                  <option>Choose</option>
                  <option>Live stream</option>
                  <option>Live sell</option>
                  <option>Live buy</option>
                  <option>Influencer</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="block">
                <span className="text-gray-700">Whate help do you need?</span>
                <textarea
                  className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                  rows="3"
                ></textarea>
              </label>
              <div className="block">
                <div className="mt-2">
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="
                          rounded
                          border-gray-600
                          text-orange-600
                          shadow-sm
                          focus:border-black 
                          focus:ring
                          focus:ring-offset-0
                          focus:ring-green-400
                          focus:ring-opacity-50
                        "
                        unchecked
                      />
                      <span className="ml-2">I agree to the privacy policy</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     </div>
    </main>
 )
}