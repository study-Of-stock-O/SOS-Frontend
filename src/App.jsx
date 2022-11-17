import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginView from "./Pages/Login/index";
import SignUpView from "./Pages/Signup";
import ErrorPage from "./Pages/Auth/ErrorPage/index";
import Header from "./Pages/Auth/Header/index";
import Landing from "./Pages/Landing/index";
import Main from "./Pages/Main/index";
import LS_Layout from './Pages/Auth/Layout/LS_Layout';
import Main_Layout from './Pages/Auth/Layout/Main_Layout';
import { AnimatePresence } from "framer-motion";
import { createGlobalStyle } from "styled-components";
import { Fragment } from 'react';

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
  }
`;


function App() {
  return (
    <Fragment>
      <AnimatePresence>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route element={<Main_Layout />}>
              <Route path='/' element={<Landing />}></Route>
              <Route path='/main' element={<Main />}></Route>
            </Route>
            <Route element={<LS_Layout />}>
              <Route path='/login' element={<LoginView />}></Route>
              <Route path='/signup' element={<SignUpView />}></Route>
              <Route path='*' element={<ErrorPage />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </Fragment>
  );
}

export default App;