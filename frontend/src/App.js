import './App.css';
import AddStudent from './components/AddStudent';
import Home from './components/Home';
import Header from './components/Header';
import EditStudent from './components/EditStudent';
import {BrowserRouter as Router,Route} from "react-router-dom"; 
import StudentDetails from './components/StudentDetails';


function App() {
  return (
    <Router>
    <div className="App">
    
    <Header/>
    <Route path="/" exact component={Home}/>
    <Route path="/add" exact component={AddStudent}/>
    <Route path="/get/:id" exact component={StudentDetails}/>
    <Route path="/edit/:id" exact component={EditStudent}/>
   
    </div>
    </Router>
  );
}

export default App;
