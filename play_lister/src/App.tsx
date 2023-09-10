import { useEffect } from 'react';
import './App.css';
import AllRoutes from './Routes/AllRoutes';

function App() {

  useEffect(()=>{
    document.title = "Play Lister"
  },[])

  return (
    <div className="App bg-gray-600 ">
      <AllRoutes/>
    </div>
  );
}

export default App;
