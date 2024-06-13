import logo from './logo.svg';
import './App.css';
import Router from './Router/Router';
import { RagisterForm } from './components/ragister/RagisterForm';
import Login from './components/ragister/Login';

function App() {
  return (
   <div className=' w-full min-h-screen secMAin'>

      <Router/>
      {/* <RagisterForm/> */}
       {/* <Login/> */}
   </div>
  );
}

export default App;
