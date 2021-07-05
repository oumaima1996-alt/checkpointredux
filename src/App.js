//import logo from './logo.svg';
import './App.css';
import ADDtask from "./Components/ADDtask"
import Listtask from "./Components/Listtask"

function App() {
  return (
    <div className="App">
      <h1 className = "todo">Todo List</h1>
      <ADDtask/>
      <Listtask />
      
       
    </div>
  );
}

export default App;
