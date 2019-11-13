import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./Pages/HomePage/Homepage.component";
import "./App.css";
import Shop from "./Pages/Shop/Shop.component";
import Header from "./Components/Header/Header.componenet";

// const HatsPage = () => {
//   return (
//     <div>
//       <h1>Hats Page</h1>
//     </div>
//   );
// };
/**
 *Switch will match the route / first and will not match anything else after that if you don't use exact
 */
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        {/* <Route path="/hats" component={HatsPage} /> */}
        <Route path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
