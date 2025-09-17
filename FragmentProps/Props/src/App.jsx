function App() {
  //let verse = [];
  let verse = [
    "Tsunade",
    "Kyomii",
    "Kuboshibo",
    "Upper Three",
    "Moon Breathing",
  ];

  // if (verse.length === 0) {
  //   return <h2>Hey there is nothing to print</h2>;
  // }

  return (
    <>
      <center>
        <h1>The Unique Universe</h1>
        {verse.length === 0 ? <h2>Hey there is nothing to print</h2> : null}
        <ul className="list-group">
          {verse.map((item) => (
            <li key={item} className="item-group-list">
              {item}
            </li>
          ))}
        </ul>
      </center>
    </>
  );
}

export default App;
