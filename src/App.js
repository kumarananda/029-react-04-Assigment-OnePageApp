import Admin from "./components/Admin/Admin";
import Profile from "./components/Team/Profile/Profile";
import Team from "./components/Team/Team";
import AddDevs from './components/Admin/AddDevs'
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditDevs from "./components/Admin/EditDevs";


function App() {


  return (
    <>
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path='/' element={ <Team></Team> }/>
          <Route path='/profile' element={ <Profile></Profile> }/>
          <Route path='/addDevs' element={ <AddDevs></AddDevs> }/>
          <Route path='/admin' element={ <Admin></Admin> }/>
          <Route path='/editDevs' element={ <EditDevs></EditDevs> }/>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
  
    </>
  );
}

export default App;

/**
 *       <Header></Header>
      <AddDevs></AddDevs>
      <Admin></Admin>
      <Team></Team>
      <Profile></Profile>
      <Footer></Footer>
 */