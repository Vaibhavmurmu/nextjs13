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
          <a>Feedback</a>
        </Link>{' '}
      </h1>
      
      <p className="mt-12 text-2xl bottom-2">
        Your most valuable feedback make runash better for you
      </p>
     <div className="mt-8 max-w-md grid grid-cols-1 gap-6 rounded-xl border p-6 text-center focus:text-blue-600">
      <form onSubmit={handleSubmit}>
              <label class="block">
                <span class="text-gray-700">Email addresss</span>
                <input type="text" className="mt-1 block w-full rounded-md  border-gray-300 shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="email address" />
              </label>


        

      <button className="mt-12 bg-blue-600 text-white hover:bg-amber-50 hover:text-black font-n py-1 px-3 rounded" type="sign up">Send</button>
      </form>
        

      <div className="mt-12 text-1xl font-b">
      <fieldset>
      <p className="mt-6 text-b ">How satisfied are you with runash live streaming</p>

      <input id="draft" className="peer/draft" type="radio" name="status" checked />
      <label for="draft" className="peer-checked/draft:text-sky-500 mt-2 flex">Not satisfied</label>

     <input id="published" className="peer/published" type="radio" name="status" />
     <label for="published" className="peer-checked/published:text-sky-500 mt-2 flex ">Satisfied</label>

    <div className="hidden peer-checked/draft:block">Very satisfied</div>
    <div className="hidden peer-checked/published:block">Your  feed make runash better</div>
   </fieldset>
</div>

       <p className="mt-12 w-full p-5 text-centre">
           <Link href="/">
             <a>Give your most valuable feedback to improve live experience better</a>
          </Link>
          </p>
        <div className="mt-2 grid grid-flow-col">
          <button className="bg-white">😭</button>
          <button className="bg-white">😕</button>
          <button className="bg-white">😃</button>
          <button className="bg-white">🤩</button>
         </div>
          <button className="mt-12 bg-blue-600 text-white hover:bg-amber-50 hover:text-black font-n py-1 px-1 rounded">feedback</button>
         
         <p className="mt-12 w-full p-5 text-center">
          <Link href="/">
            <a>Share your feedback &rarr;</a>
          </Link>
        </p>
      
       <p className="mt-6 w-full p-5 text-center">🤔  🥰  🥱  😭</p>


      
      <p className="mt-6 w-full p-5 text-center">
         ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ &rarr;
      </p>
     </div>
     </main>
    </div>
  )
} 