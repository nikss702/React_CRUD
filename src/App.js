import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Home from './component/pages/Home';
import About from './component/pages/About';
import Contact from './component/pages/Contact';
import Navbar from "./component/layout/Navbar";
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import NotFound from "./component/pages/NotFound";
import CreateUser from "./component/users/CreateUser";
function App() {
  return (
   <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/users/create" element={<CreateUser />}/>
          <Route path='*' element={<NotFound />} />
        </Routes>
       
      </div>
   </Router>
  );
}

export default App;
