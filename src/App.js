import './App.css';
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    //Changed my className from "App" to "app" because of a special naming convension that is 
    //called BEM
    <div className="app">

    
     <Header />
     <Home />
    </div>
  );
}

export default App;
