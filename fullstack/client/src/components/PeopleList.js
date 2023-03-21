function PeopleList(props) {
  const people = props.people

  return (
    <section>
      <h3>Lista de Personas</h3>
      <ul>
        {
          people.map(person => 
            <li key={person._id}>{person.name} {person.lastName}</li>
          )
        }
      </ul>
    </section>
  );
}

export default PeopleList;