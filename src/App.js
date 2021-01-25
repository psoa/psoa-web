import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PsoaNavbar from './components/PsoaNavBar'
import Intro from './components/Intro'
import Education from './components/Education'
import Experience from './components/Experience';


function App() {
  return (
    <div>
      <PsoaNavbar></PsoaNavbar>
      <div class="clearfix"></div>
        <Intro></Intro>
      <Education></Education>
      <Experience></Experience>
    </div>

  );
}

export default App;
