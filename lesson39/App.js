import {Routes, Route} from "react-router-dom";
import Map from "./components/Map";
import House from './components/House';
import Garden from './components/Garden';
import Museum from './components/Museum';
import School from './components/School';

function App() {
  return (
    <div>
      <h1>Map Navigation</h1>
      <Map />
      <Routes>
        <Route path="/" exact element= {<House />}/>
        <Route path="/garden" exact element= {<Garden />}/>
        <Route path="/school" exact element= {<School />}/>
        <Route path="/museum" exact element= {<Museum />}/>
      </Routes>
    </div>
  );
}

export default App;
