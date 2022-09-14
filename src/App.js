import "./App.css";
import React ,{useContext} from "react";
import SignInSide from "./Login/SignInSide";
import { UserContext } from "./Login/Context/LoginContext"
import ProductAppBar from "./Components/Fetch/ProductAppBar";
function App() {

 const [user] = useContext(UserContext);

  return (
    <div className="App">
          {user ?  <ProductAppBar /> : <SignInSide />}
         {/* <ProductAppBar /> */}
    </div>
  );
}

export default App;
