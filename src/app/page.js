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
    { id: 0, name: "Sally Kelly", location: "New York" },
    { id: 1, name: "James Allen", location: "Abu Dhabi" },
    { id: 2, name: "Zainab Ali", location: "Mecca" },
    { id: 3, name: "Sam Peter", location: "Nairobi" },
    { id: 4, name: "Caitlin John", location: "Capetown" },
  ]

  return (
    <>
      <h1 className="font-bold">Hello, world!</h1>
      <button className="hover:bg-sky-500 focus:outline-sky-500  active:bg-sky-400">Save changes</button>
      <button className="bg-lime-900 text-slate-50 hover:bg-lime-700 focus:outline-lime-700 focus:outline-offset-2 active:bg-lime-600">Learn more</button>
      <article>
        <h2>A list of careers</h2>
        <ul >
          {careers.map(career => (
            <li key={career.id} className="first:text-amber-500 last:text-amber-500">{career.career}</li>
          ))}
        </ul>
      </article>
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
