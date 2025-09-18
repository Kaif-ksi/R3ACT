const Errormsg = () => {
  let verse = [
    "Tsunade",
    "Kyomii",
    "Kuboshibo",
    "Upper Three",
    "Moon Breathing",
  ];

  return <>{verse.length === 0 && <h2>Hey there is nothing to print</h2>}</>;
};

export default Errormsg;
