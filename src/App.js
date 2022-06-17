import React from "react";
import Header from "./components/Header";

import InitialState from "./pages/InitialState";
import Main from "./pages/Main";
import UserNotFound from "./pages/UserNotFound";
import RepositoriesNotFound from "./pages/RepositoriesNotFound";

import {
  HashRouter,
  Routes,
  Navigate,
  Route
} from "react-router-dom";

function App() {

  return (
    <HashRouter>  
        <Header />   
        <Routes>
          <Route path="/" element={<InitialState/>} />       
          <Route path="/main/:enteredUserName" element={<Main/>}></Route>       
          <Route path="/usernotfound" element={<UserNotFound/>}></Route>
          <Route path="/repositoriesnotfound" element={<RepositoriesNotFound/>}></Route> 
          <Route path="*" element={<Navigate replace to={`/`} />} />
        </Routes>
    </HashRouter>
  );
}

export default App;
