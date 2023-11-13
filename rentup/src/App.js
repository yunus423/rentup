
import './App.css';
import Hero from './components/Home/Hero/Hero';
import Home from './components/Home/Home';
import Featured from './components/Home/featured/Featured';
import About from './components/about/About';
import Footer from './components/common/footer/Footer';

import Header from './components/common/header/Header';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Services from './components/services/Services';
import Blog from './components/blog/Blog';
import Pricing from './components/pricing/Pricing';
import Contact from './components/contact/Contact';


function App() {
  return (

<>
<Router>
<Header/>
      
<Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/services" exact component={Services}></Route>
          <Route path="/blog" exact component={Blog}></Route>
          <Route path="/pricing" exact component={Pricing}></Route>
          <Route path="/contact" exact component={Contact}></Route>
      
   </Switch>
<Footer/>
    </Router>
    </>
  )
}

export default App;
