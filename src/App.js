import React, { useEffect } from 'react'
import { Home, Navbar, About, Footer, FAQ, Team, Portfolio } from './Components'
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  useLocation 
} from 'react-router-dom'
import style from './App.module.css'
import classNames from 'classnames'
import Contact from './Components/Contact/Contact'

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
   
  const cursor=(e)=>{
    var mouseCursor = document.querySelector("#cursor");
      
    if(mouseCursor)
    {
       mouseCursor.style.top = e.pageY+"px";
       mouseCursor.style.left = e.pageX+"px";
    }
 
}

React.useEffect(()=>{
   function watchCursor()
   {
    window.addEventListener('mousemove',cursor);
   }
   watchCursor();

  
 return () => {
    window.addEventListener('mousemove',cursor);
    }
  }, [])

  return(
    <Router basename={process.env.PUBLIC_URL}>
       <div id="cursor" className={style.customCursor} ></div>
      <div className={classNames(style.navbar, style.dark )} id="navbar">
        <Navbar />
      </div>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/faq" component={FAQ}/>
        <Route path="/team" component={Team}/>
        <Route path="/portfolio" component={Portfolio}/>
      </Switch>
      <div className={style.footer} >
        <Footer />
      </div>
    </Router>
  )
}

export default App