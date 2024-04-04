import './App.css';
import Footer from './Nav/Footer';
import Header from './Nav/Header';
import Home from './Components/Pages/Homepage';
import Homepage from './Components/Pages/Homepage';
import { Route, Routes } from 'react-router-dom';
import Productcards from './Components/Pages/Products/Productcards';
import Productdetails from './Components/Pages/Products/Productdetails';
import Categories from './Components/Pages/Category/Categories';
import Categoryitems from './Components/Pages/Category/Categoryitems';
import User from './Components/Pages/User/User';

function App() {
  return (
    <div className="App">

      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/category' element={<Categories />} />
        <Route path='/productdetails/:id' element={<Productdetails />} /> 
        <Route path='/categoryitemdetails/:id/products' element={<Categoryitems />} /> 
        <Route path='/users' element={<User />} /> 
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
