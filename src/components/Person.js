const Person = ({ persons }) => {
  return (
    <main>
      {persons.map((person) => {
        const { name, title, quote, image } = person;
        return (
          <div>
            <img src={image} alt={name} className="person-img"></img>
            <h4>{name}</h4>
            <h4>{title}</h4>
            <p>{quote}</p>
          </div>
        );
      })}
    </main>
  );
};

export default Person;
