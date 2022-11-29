import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function PageWithJSbasedPayment() {
  // Handle the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.
    const data = {
      first: event.target.first.value,
      last: event.target.last.value,
    }

    const JSONdata = JSON.stringify(data)

    // Send the form data to our API and get a response.
    const response = await fetch('/api/form', {
      // Body of the request is the JSON data we created above.
      body: JSONdata,

      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // The method is POST because we are sending data.
      method: 'POST',
    })

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    alert(`Is this your full name: ${result.data}`)
  }
  return (
       <main className="mt-16 flex w-2xl flex-1 flex-col items-center justify-centre px-20 text-center">
      <h1 className="mt-14 py-4 text-3xl font-bold">
       RunAsh Pay  
      </h1>
      <div className="mt-2 w-96 grid grid-cols-1 gap-4 rounded-xl border p-6 text-center focus:text-blue-600">
      <p className="mt-2 text-1xl bottom-2">Get Secure Payment System By UPI</p>
      <div className="mt-12 flex max-w-5xl columns-3 flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-80 rounded-xl border p-6 text-left focus:text-black shadow-lg shadow-white"
          >
            <h3 className="text-2xl font-bold">Scan QR Code</h3>
            <p className="mt-4 text-xl">
              Powred By UPI
              <br />
                <Link href="/login">
                <a className='text-blue-600'>Your Payment is Safe and Secure</a>
                </Link>
            </p>
          </a>
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-80 rounded-xl border p-6 text-left focus:text-black shadow-lg shadow-white"
          >
            <h3 className="text-2xl font-bold">Pay Phone Number</h3>
            <p className="mt-4 text-xl">
              Enter our phone number<br />Pay our UPI verified phone number
              <br />
                <Link href="/login">
                <a className='text-blue-600'>Direct payment system</a>
                </Link>
            </p>
          </a>
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-80 rounded-xl border p-6 text-left focus:text-black shadow-lg shadow-white"
          >
            <h3 className="text-2xl font-bold">Pay UPI ID OR Number</h3>
            <p className="mt-4 text-xl">
              Enter UPI ID or Number
              <br />
                <Link href="/login">
                <a className='text-blue-600'>Continue</a>
                </Link>
            </p>
          </a>
          </div>
          <h1 className="mt-14 py-4 text-3xl font-bold">
            Bank Transfer  
          </h1>
      <form onSubmit={handleSubmit}>
        <label className='block text-left' htmlFor="UPI"></label>
        <span className="">  UPI</span>
        <input className="mt-1 block w-80 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="text" id="email" name="email" required />
     </div>
    </main>
  )
}
