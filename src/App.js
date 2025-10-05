import './css/App.css';
import About from'./components/about.js';
import Products from'./components/product.js';
import Home from './components/hero.js';
import Services from './components/services.js'



 function App(){
return(
  <div>
    <Home />
    <About />
    <Products></Products>
    <Services />
  </div>
)
}

export default App;
