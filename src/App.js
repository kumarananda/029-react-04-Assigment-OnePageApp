import Admin from "./components/Admin/Admin";
import Profile from "./components/Team/Profile/Profile";
import Team from "./components/Team/Team";
import AddDevs from './components/Admin/AddDevs'


function App() {


  return (
    <>
      <AddDevs></AddDevs>
      <Admin></Admin>
      <Team></Team>
      <Profile></Profile>
  
    </>
  );
}

export default App;
