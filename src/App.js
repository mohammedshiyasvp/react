import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Singleview from './Singleview';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h2 className='text-center mt-2'>Let's FIND <br />the best<span className='text-primary'> TASTE</span> <i class="fa-solid fa-face-smile-wink fa-fade"></i></h2>

      <Routes>
        
        <Route path='' element={<Home></Home>}></Route>
        <Route path='restaurantview/:id' element={<Singleview></Singleview>}></Route>

      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
