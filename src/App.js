import React, { useEffect } from 'react'
import { Home, Navbar, About } from './Components'
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  useLocation 
} from 'react-router-dom'
import style from './App.module.css'
import classNames from 'classnames'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


const App = () =>{
 
  function setBackground(){
    if(
      document.body.scrollTop > 200 || 
      document.documentElement.scrollTop < 200
    ){
      document.getElementById("navbar").classList.remove(style.light)
      document.getElementById("navbar").classList.add(style.dark)
    }else{
      document.getElementById("navbar").classList.remove(style.dark)
      document.getElementById("navbar").classList.add(style.light)
    }
  }

  useEffect(() => {
    
    function watchScroll(){
      window.addEventListener("scroll", setBackground)
    }
    watchScroll()

    return () => {
      window.removeEventListener("scroll", setBackground)
    }
  }, [])
  
  return(
    <Router basename={process.env.PUBLIC_URL}>
      <div className={classNames(style.navbar, style.dark )} id="navbar">
        <Navbar />
      </div>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
      </Switch>
    </Router>
  )
}

export default App