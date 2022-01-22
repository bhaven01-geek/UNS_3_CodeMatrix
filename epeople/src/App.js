import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import choice from "./components/choice";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/choice' component={choice} />
          {/* {/* <Route path="test/*" element={<AboutTest />} /> */}
          <Route exact path='/login' component={Login} />
          {/* <Route path="quizStart" element={<TestPage />} /> */}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
