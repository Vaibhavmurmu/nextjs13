import Link from 'next/link'

export default function Example() {
  return (
    <div className="w-full mt-12">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-2xl font-n tracking-tight text-black sm:text-3xl">
          <span className="block text-1xl text-left">Begin your live journey</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-black px-5 py-3 text-base font-medium text-white hover:bg-orange-600"
            >
              + Create
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-black px-5 py-3 text-base font-medium text-white hover:bg-white hover:text-black"
            >
              Give feedback
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
