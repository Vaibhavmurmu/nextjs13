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
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
    <main className="flex w-full flex-1 flex-col items-center justify-centre px-20 text-center">
    
      <h1 className="mt-12 text-6xl font-bold">
        <Link href="/">
          <a>RunAsh</a>
        </Link>{' '}
      </h1>
      
      <p className="mt-12 text-2xl bottom-2">
        👏 Welcome to runash<br />Lets being the live streaming journey<br />
      </p>
      <div className="mt-6 w-96 rounded-xl border p-6 text-left focus:text-blue-600">
      <p className="mt-12 text-2xl bottom-2">Create your account ID</p>
      <form onSubmit={handleSubmit}>
        <label className='' htmlFor="email">email</label>
        <input className="" type="text" id="email" name="email" required />
        <label htmlFor="fast">Fast Name</label>
        <input type="text" id="first" name="first" required />
        <label htmlFor="last">Last Name</label>
        <input type="text" id="last" name="last" required />
        <label htmlFor="Phone number">Phone number</label>
        <input type="text" id="Phone number" name="Optional" required />
        <label htmlFor="password">Password</label>
        <input type="text" id="password" name="password" required />
        <button type="sign up">Sign Up</button>
      </form>
      
      <p className="mt-12 text-0xl bottom-2">
        Have an account? Sign in &rarr;
      </p>
     </div>
    </main>
    <p className="mt-12 text-0xl bottom-2">By creating an account,you agree to terms of services</p>
     <div className="flex flex-row item-center space-x-4">
     <ul className="flex flex-row item-center">
       <li className="mt-10">
         <Link href='/term'>
            <a>Terms</a>
         </Link>
       </li>
       <li className="mt-10">
         <Link href='/privacy'>
            <a>Privacy</a>
         </Link>
       </li>
       <li className="mt-10">
         <Link href='/security'>
           <a>Security</a>
         </Link>
       </li>
      </ul>
     </div>
     </div>
  )
}
