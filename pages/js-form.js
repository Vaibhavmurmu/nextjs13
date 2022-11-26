import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function PageWithJSbasedForm() {
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
        RunAsh
      </h1>
      <div className="mt-2 w-96 grid grid-cols-1 gap-4 rounded-xl border p-6 text-center focus:text-blue-600">
      <p className="mt-2 text-1xl bottom-2">Create your account</p>
      <form onSubmit={handleSubmit}>
        <label className='block text-left' htmlFor="email"></label>
        <span className="">  Email</span>
        <input className="mt-1 block w-80 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="text" id="email" name="email" required />

        <label  className="mt-2 w-96 rounded-xl p-6 text-left" htmlFor="fast"></label>
        <span className="">Full name</span>
        <input className="mt-1 block w-80 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="text" id="first" name="first" required />

        <label className="mt-2 w-96 rounded-xl p-6" htmlFor="Phone number">Phone number</label>
        <input className="mt-1 block w-80 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="text" id="Phone number" name="Optional" required />

        <label className="mt-2 w-96 rounded-xl p-6" htmlFor="password">Password</label>
        <input className="mt-1 block w-80 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="text" id="password" name="password" required />

        <button className="mt-4 item-center bg-orange-600 text-white w-80 hover:bg-blue-600 hover:text-white font-n py-3 border rounded-md" type="sign up">Sign Up</button>
      </form> 
      <p className="mt-1 text-0xl text-blue-600 bottom-2">
        Have an account? Sign in &rarr;
      </p>
     </div>
    </main>
  )
}
