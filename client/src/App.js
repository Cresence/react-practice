import React from "react";
import Books from "./pages/Books";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
       <Switch>
     <div>
       <Nav />
       <Route exact path="/" component={Books} />
       <Redirect link="/books" to="/" />
       <Route component={NoMatch} />
       <Route path="/books/:id" component={Detail}/>
     </div>
     </Switch>
    </Router>
  );
}

export default App;
