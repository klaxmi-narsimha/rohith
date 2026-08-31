

import Login from "./pages/login"
import Register from "./pages/register"
import Home from "./pages/home"
import Profile from "./pages/profile";
import {Routes,Route} from 'react-router-dom';
import { useEffect } from "react";
function App() {
  useEffect(() => {
    async function fetchData() {
      let requestedData = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Warangal&appid=083bbed5b5dc29206b099619530b6726&units=metric`
      );
      let formattedData = await requestedData.json();
      console.log(formattedData);
    }

    fetchData();
  }, []);

  return (
    <>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profile' element={<Profile/>}/>
         <Route path='/' element={<Login/>}/>
          <Route path='*' element={<h1>Error 404 page not found</h1>}/>
      </Routes>
    </>
  
  )
}
export default App
