import Errormsg from "./Components/Errormsg";
import Slayers from "./Components/Slayers";

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

  // let emptymsg =
  //   verse.length === 0 ? <h2>Hey there is nothing to print</h2> : null;

  return (
    <>
      <center>
        <h1>The Unique Universe</h1>
        {/* {emptymsg} */}
        <Slayers></Slayers>
        <Errormsg></Errormsg>
      </center>
    </>
  );
}

export default App;
