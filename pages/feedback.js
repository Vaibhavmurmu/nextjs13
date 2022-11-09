import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function PageWithJSbasedFormFeedback() {
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
    <div className="flex min-h-screen flex-col items-center justify-center py-12">
    <Head> 
        <title>Feedback</title>
        <meta name="description" content="Have feedback "/>
        <link rel="icon" href="favicon.icon"/>
      </Head>
    <main className="flex w-full flex-1 flex-col items-center justify-centre px-20 text-center">
      <h1 className="mt-16 text-4xl font-b">
        <Link href="/">
          <a> Give your feedback</a>
        </Link>{' '}
      </h1>
      
      <p className="mt-8 text-1xl bottom-1">
        Your most valuable feedback make runash live better for you
      </p>
     <div className="mt-8 max-w-md w-full grid grid-cols-1 gap-6 rounded-xl border p-6 text-center focus:text-blue-600">
      <form onSubmit={handleSubmit}>
              <label className="mt-4 block">
                <span className="text-gray-700">Email addresss...</span>
                <input type="text" className="mt-1 block w-full rounded-md  border-gray-300 shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="email address" />
              </label>
              <label className="block">
                <span className="text-gray-700">Your feedback...</span>
                <textarea className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" rows="3" placeholder="Your feedback">
                </textarea>
              </label>
      </form>
     <div className="mt-2 text-1xl font-b">
     <div className="">Your  feed make runash better</div>
       <p className="mt-2 w-full p-4 text-center ">😭  😕  🥱  🤩</p>
       <p className="mt-2 w-full p-4 text-center">
         ⭐ ⭐ ⭐ ⭐ ⭐  ⭐  ⭐ 
      </p>
      <button type="send" className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-14 rounded">Send</button>
       <p className="mt-1 w-full p-5 text-center">
          <Link href="/">
            <a>Share your feedback &rarr;</a>
          </Link>
       </p>
     </div>
     </div>
       <p className="mt-4 w-full text-1xl p-5 text-centre">
           <Link href="/">
             <a>Leave feedback to improve live experience better &rarr;</a>
          </Link>
      </p>
     </main>
    </div>
  )
} 