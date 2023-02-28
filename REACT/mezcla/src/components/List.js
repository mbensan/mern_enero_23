function List(props) {

  console.log(props.items)

  return (
    <div>
      <h4>Resultado de filtrar por "{props.filter}"</h4>
      <ul className="list">
        {props.items.map(item => 
          <li key={item}>{item}</li>
        )}
      </ul>
    </div>
  );
}

export default List;