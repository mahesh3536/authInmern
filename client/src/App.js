import {Route,Routes,Navigate} from "react-router-dom";
import Main from "./components/Main/index"
import Signup from "./components/signUp/index";
import Login from "./components/login/index";
function App() {
  const user = localStorage.getItem("token");
  return (
    <Routes>
      {user && <Route path="/" exact element={<Main/>}></Route>}
      <Route path="/signup" exact element={<Signup/>}/>
      <Route path="/login" exact element={<Login/>}/>
      <Route path="/" exact element = {<Navigate replace to="/login"/>}></Route>
    </Routes>
  );
}

export default App;
