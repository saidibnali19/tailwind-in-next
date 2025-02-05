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
    </>
  );
}
