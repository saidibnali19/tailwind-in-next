"use client"

import { useRef } from "react"

export default function Home() {

  const careers = [
    { id: 0, career: "Full stack developer" },
    { id: 1, career: "Front end developer" },
    { id: 2, career: "Business Analyst" },
    { id: 3, career: "Data Analyst" },
  ]

  const towns = [
    { id: 0, town: "Mombasa" },
    { id: 1, town: "Nairobi" },
    { id: 2, town: "Kisumu" },
    { id: 3, town: "Eldoret" },
    { id: 4, town: "Naivasha" },
  ]

  const people = [
    { id: 0, name: "Sally Kelly", location: "New York", email: "sally@example.com" },
    { id: 1, name: "James Allen", location: "Abu Dhabi", email: "james@example.com" },
    { id: 2, name: "Zainab Ali", location: "Mecca", email: "zainab@example.com" },
    { id: 3, name: "Sam Peter", location: "Nairobi", email: "sam@example.com" },
    { id: 4, name: "Caitlin John", location: "Capetown", email: "caitlin@example.com" },
  ]

  const dialogRef = useRef(null)

  return (
    <>
      <div className="m-4 p-4 border-2 border-pink-400 border-solid w-60 bg-gray-900 text-white rounded-lg">
        <p className="print:hidden">This is a secret</p>
        <p>Are you trying to print this? It's a secret.</p>
      </div>
      <div className="m-4 p-4 w-40 bg-gray-900 text-white rounded-lg">
        <p className="landscape:hidden">Portrait content</p>
        <p className="hidden landscape:block">Landscape content</p>
      </div>
      <form className="m-4 p-4 border-2 border-solid border-pink-400 rounded-md">
        <label>
          <input className="appearance-none forced-colors:appearance-auto" type="radio" />
          <span className="hidden forced-colors:block">Cyan</span>
          <div className="size-4 bg-cyan-400"></div>
        </label>
      </form>
      <article className="grid gap-4 w-40 p-4 border-solid border-2 border-pink-400 rounded-md m-4 text-gray-900 dark:bg-gray-900 dark:text-white">
        <h2 className="text-2xl">Zero gravity pen</h2>
        <p>The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.</p>
        <p className="motion-reduce:hidden">Animation</p>
        <p className="motion-safe:transition motion-safe:hover:-translate-x-4 motion-reduce:hover:bg-pink-300 justify-self-start">save</p>
        <p className="opacity-10 contrast-more:opacity-100">More content here</p>
      </article>
      <div className="grid gap-4 grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
          <div key={num} className="bg-pink-400 h-40"></div>
        ))}
      </div>
      <div>
        <button onClick={() => dialogRef.current.showModal()}>Show dialog</button>
        <dialog className="backdrop:bg-gray-50" ref={dialogRef}>
          <h1>Dialog box</h1>
          <p>Dialog box content</p>
          <button onClick={() => dialogRef.current.close()}>close</button>
        </dialog>
      </div>
      <p className="text-gray-700 first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 first-line:tracking-widest first-line:uppercase p-4 selection:text-fuchsia-900 selection:bg-fuchsia-300">
        So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.
      </p>
      <article className="p-4">
        <h2>A list of careers</h2>
        <ul className="px-4 list-decimal marker:text-pink-400" role="list">
          {careers.map(career => (
            <li key={career.id} className="first:text-amber-500 last:text-amber-500">{career.career}</li>
          ))}
        </ul>
      </article>
      <form>
        <input placeholder="search" className="border-solid border-2 border-slate-100 placeholder:text-slate-400 placeholder:italic placeholder:font-serif" type="search" />
        <input className="file:bg-pink-400 file:text-slate-50 file:rounded-full file:px-4 file:border-0 hover:file:bg-pink-500" type="file" />
      </form>
      <form>
        <label>
          <span className="flex gap-4 before:content-['*'] before:text-pink-400 before:order-2">Email</span>
          <input className="border-solid border-2 border-slate-100" type="email" />
          <button>Submit</button>
        </label>
      </form>
      <form>
        <label>
          <span className="flex gap-4 before:text-pink-500 before:size-4 before:block before:content-['*'] before:order-2" >Email</span>
          <input className="border-solid border-2 border-slate-100" type="email" />
        </label>
        <button>Submit</button>
      </form>
      <form>
        <input className="peer is-dirty" type="email" placeholder="Email" required />
        <p className="hidden peer-[.is-dirty]:peer-required:block">This field is required</p>
      </form>
      <form>
        <label>Email</label>
        <input className="border-solid border-2 border-slate-100 peer dirty" type="email" required />
        <p className="hidden peer-[.dirty]:peer-required:block">This field is required</p>
        <button>Submit</button>
      </form>
      <fieldset>
        <legend>Published status</legend>
        <input className="peer/draft" id="draft" type="radio" name="status" />
        <label htmlFor="draft">Draft</label>
        <input className="peer/published" id="published" type="radio" name="status" />
        <label htmlFor="published">Published</label>
        <p className="hidden peer-checked/draft:block">Drafts are only visible to admins</p>
        <p className="hidden peer-checked/published:block">Published posts are visible to the public</p>
      </fieldset>
      <fieldset>
        <legend>Published status</legend>
        <input className="peer/draft" id="draft" type="radio" name="status" />
        <label htmlFor="draft">Draft</label>
        <input className="peer/published" type="radio" name="status" id="published" />
        <label htmlFor="published">Published</label>
        <p className="hidden peer-checked/draft:block">Drafts are only visible to admins</p>
        <p className="hidden peer-checked/published:block">Published posts are available for the public</p>
      </fieldset>
      <form>
        <label>Email:
          <input className="border-solid border-2 border-slate-100 peer" type="email" />
          <p className="invisible peer-invalid:visible">Please input a valid email</p>
        </label>
        <button>Submit </button>
      </form>
      <form>
        <label>Email<input className="border-solid border-slate-300 border-2 peer" type="email" />
          <p className="invisible peer-invalid:visible">Please input a valid email</p>
        </label>
        <button>Submit</button>
      </form>
      <div tabIndex="0">
        <div className="bg-amber-500 h-64 opacity-50 in-focus:opacity-100" tabIndex="0"></div>
      </div>
      <article className="bg-pink-400 p-4">
        <h5>Contacts</h5>
        <ul>
          {people.map(person => (
            <li className="p-4 bg-pink-500 group/person hover:bg-red-400" key={person.id}>
              <h6>{person.name}</h6>
              <p>Location: {person.location}</p>
              <p className="invisible group-hover/person:visible group/email"><span className="group-hover/email:text-slate-50">Email:</span> <span className="group-hover/email:text-slate-50">{person.email}</span></p>
            </li>
          ))}
        </ul>
      </article>
      <div className="bg-slate-50 p-4 group hover:bg-slate-500">
        <h6 className="group-hover:text-slate-50">New project</h6>
        <p className="group-hover:text-slate-50">Create a new project from our templates</p>
      </div>
      <div className="bg-slate-100 p-4 group hover:bg-indigo-400">
        <h5 className="group-hover:text-slate-50">New project</h5>
        <p className="group-hover:text-slate-50">Create a new project from our templates</p>
      </div>
      <div className="bg-blue-300 size-44 text-slate-50 p-4 group">
        <h3>James Allen</h3>
        <button className="hidden group-has-[a]:block">Learn more</button>
        <p>Product designer at
          <a href="#"> site.com</a>
        </p>
      </div>
      <h1 className="font-bold">Hello, world!</h1>
      <button className="hover:bg-sky-500 focus:outline-sky-500  active:bg-sky-400">Save changes</button>
      <button className="bg-lime-900 text-slate-50 hover:bg-lime-700 focus:outline-lime-700 focus:outline-offset-2 active:bg-lime-600">Learn more</button>
      <article>
        <h3>A list of towns</h3>
        <ul>
          {towns.map(town => (
            <li className="first:text-blue-800 last:text-blue-800" key={town.id}>{town.town}</li>
          ))}
        </ul>
      </article>
      <table>
        <tbody>
          {people.map(person => (
            <tr className="odd:bg-gray-50 even:bg-white" key={person.id}>
              <td>{person.name}</td>
              <td>{person.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <form className="p-4 grid gap-4">
        <label className="grid gap-4">Username<input className="bg-slate-300 p-4 border-slate-100 border-solid border-2 invalid:border-pink-500" type="text" placeholder="Username" /></label>
        <label className="grid gap-4">Email<input className="outline-none bg-slate-300 p-4 border-slate-100 border-solid border-2 invalid:border-pink-500 invalid:text-pink-500" type="email" /></label>
        <label className="grid gap-4">Password<input className="bg-slate-300 p-4 border-slate-100 border-solid border-2 invalid:border-pink-500" type="password" /></label>
        <button className="bg-blue-500 text-slate-100 p-4">Save changes</button>
      </form>
      <form className="bg-blue-300 p-4">
        <label>
          Email<input className="outline-none border-2 border-solid invalid:border-pink-400 invalid:text-pink-500" type="email" />
        </label>
        <button>Save changes</button>
      </form>
    </>
  );
}
