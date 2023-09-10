import { useEffect } from 'react';
import './App.css';
import AllRoutes from './Routes/AllRoutes';

function App() {

  useEffect(()=>{
    document.title = "Play Lister"
  },[])

  return (
    <div className="App ">
      <AllRoutes/>
    </div>
  );
}

export default App;
