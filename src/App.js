import "./App.css";
import React ,{useContext} from "react";
import SignInSide from "./Login/SignInSide";
import { UserContext } from "./Login/Context/LoginContext"
import ProductAppBar from "./Components/Fetch/ProductAppBar";
import StakeHolderSearch from "./Components/Forms/StakeHolderSearch";
function App() {

 const [user] = useContext(UserContext);

  return (
    <div className="App">
          {user ?  <ProductAppBar /> : <SignInSide />}
         {/* <ProductAppBar /> */}
         {/* <StakeHolderSearch /> */}
    </div>
  );
}

export default App;
