import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import Technologies from './Components/Technologies';
import Product from './Components/Product';
import ReactBasic from './Components/ReactBasic';
import CompHTML from './Components/CompHTML';
import CompCSS from './Components/CompCSS';
import ReactJS from './Components/ReactJS';
import NodeJS from './Components/NodeJS';

function App() {

  return (
    <div className="App">

      
        <Navbar/> 
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/tech' element={<Technologies />} >
          <Route path="" element={<Navigate to="html" />} />
          <Route path="html" element={<CompHTML />} />
          <Route path="css" element={<CompCSS />} />
          <Route path="react" element={<ReactJS />} />
          <Route path="node" element={<NodeJS />} />
        </Route>
        <Route path='/product' element={<Product />} />
        <Route path='/react' element={<ReactBasic /> } />
      </Routes>
    </div>
  );
}

export default App;
