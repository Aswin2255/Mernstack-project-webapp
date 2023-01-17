
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './pages/Register';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route element = {<Register/>} path = '/signup'></Route>
        <Route element = {<Home/>} path = '/'></Route>
      </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
