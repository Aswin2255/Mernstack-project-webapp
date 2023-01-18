
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './pages/Register';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import Home from './pages/Home';
import Login from './pages/Login';
import Protected from './components/Protected';
import Modal from './components/Modal';

function App() {
  return (
    <div>
      <Provider store={store}>
      <BrowserRouter>
      <Routes>
       <Route element = {<Protected/>}>
       <Route element = {<Home/>} path = '/'></Route>
       </Route>
        <Route element = {<Register/>} path = '/signup'></Route>
       
        <Route element = {<Login/>} path = '/login'></Route>
        <Route element = {<Modal/>} path = '/s'></Route>
      
       
      </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
