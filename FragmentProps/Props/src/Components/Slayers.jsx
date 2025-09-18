const Slayers = () => {
  let verse = [
    "Tsunade",
    "Kyomii",
    "Kuboshibo",
    "Upper Three",
    "Moon Breathing",
  ];

  return (
    <ul className="list-group lead">
      {verse.map((item) => (
        <li key={item} className="item-group-list">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Slayers;
