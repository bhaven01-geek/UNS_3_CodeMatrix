import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="dashboard/*" element={<Dashboard />} /> */}
          {/* <Route path="test/*" element={<AboutTest />} /> */}
          <Route exact path="/login" component={Login} />
          {/* <Route path="quizStart" element={<TestPage />} /> */}
        </Switch>
      </BrowserRouter>
   
    </>
  );
}

export default App;
