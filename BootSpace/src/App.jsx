import AppListOne from "./Components/AppListOne";
import AppListTwo from "./Components/AppListTwo";
import AppListThird from "./Components/AppListThird";
import AppName from "./Components/AppName";
import "./App.css";

function App() {
  return (
    <center class="Todo-Container">
      <AppName />
      <AppListOne />
      <div class="item-container">
        <AppListTwo />
        <AppListThird />
      </div>
    </center>
  );
}

export default App;
