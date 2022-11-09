import React from 'react'
import Link from 'next/link'
import style from '../styles/Home.module.css'
import {useSession, signIn,signOut} from 'next-auth/react'

export default function Login() {
const {data: session} = useSession()
console.log(session)

if (session) {
    return (
      <>
       <p>Welcome back {session.user.name}</p>
       <img src={session.user.image} alt="" styles={{width: "75px", borderRadiuss: "50px" }}/>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
     </>
    );
}
return (
    <main className="flex w-full flex-1 flex-col items-center justify-centre px-20 text-center">
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <h1 className="mt-16 text-2xl font-bold">
        <Link href="/">
          <a>Welcome to</a>
        </Link>{' '}RunAsh live
      </h1>
      
      <p className="mt-10 text-1xl bottom-2">
        Lets being the live streaming journey
      </p>
      <div className="mt-6 w-96 rounded-xl border p-6 text-center focus:text-blue-600">
      <p className="mt-12 text-2xl bottom-2">Have an account? </p>
    <button  className="mt-8 bg-black text-white hover:bg-orange-600 hover:text-white font-n py-2 px-4 rounded" onClick={() => signIn()}>Sign in &rarr;</button>
    </div>
    </div>
</main>
)
}





