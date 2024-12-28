import React from 'react'
import { Link } from 'react-router'

function sign_in() {
  return (
    <section className="size-full glassmorphism flex-center px-6">
    <div className="sign-in-card">
        <header className="header">
            <Link to="/">
                <img
                    src="/assets/icons/logo.svg"
                    alt="logo"
                    className="size-[30px]"
                />
            </Link>
            <h1 className="p-28-bold text-dark-100">Tourvisto</h1>
        </header>

        <article>
            <h2 className="p-28-semibold text-dark-100 text-center">Start Your Travel Journey</h2>

            <p className="p-18-regular text-center text-gray-100 !leading-7">Sign in with Google to manage destinations, itineraries, and user activity with ease.</p>
        </article>
       </div>
       </section>
  )
}

export default sign_in