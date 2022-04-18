import Admin from "./components/Admin/Admin";
import Profile from "./components/Team/Profile/Profile";
import Team from "./components/Team/Team";
import AddDevs from './components/Admin/AddDevs'
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";


function App() {


  return (
    <>
      <Header></Header>
      
      <AddDevs></AddDevs>
      <Admin></Admin>
      <Team></Team>
      <Profile></Profile>
      <Footer></Footer>
  
    </>
  );
}

export default App;
