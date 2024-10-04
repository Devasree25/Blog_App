
import './App.css';
import Post from "./Post";
import Header from './Header';
import { Route, Routes } from "react-router-dom"
import Layout from './Layout';
import IndexPage from './Pages/IndexPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route path="/Post" element={<Post />}></Route>

        <Route index element={<IndexPage />}/>

        <Route path='/login' element={<LoginPage/>} />
        <Route path='/Register' element={<RegisterPage/>}/>

      </Route>

    </Routes>

  );
}

export default App;
