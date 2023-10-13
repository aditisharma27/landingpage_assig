import React,{useState} from 'react'
import {SiYourtraveldottv} from 'react-icons/si'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import './navbar.scss'
//import '../../app.css'
const Navbar = () => {
const [active, setActive]= useState('false')
const [ transparent, setTransparent] = useState('header')
 const showNav =()=>{
  setActive(!active);
}
const removeNav = ()=>{
  setActive(!active);
}
const addBg=()=>{
  if(window.scrollY >= 10){
    setTransparent('header activeHeader')
  }
  else{
    setTransparent('header')
  }
}
 window.addEventListener('scroll',addBg);

return(
  <section className='navBarSection'>
    <div className={transparent }>
      <div className="logoDiv">
        <a href="/logo" className="logo">
          <h1 className='flex '>
          <SiYourtraveldottv className='icon'/>TECH
          </h1>
        </a>
      </div>

<div className={active ?  "navBar activeNavbar" :"navBar "}>
  <ul className="navLists flex">
    <li className="navItem">
      <a href="/home" className="navLink">Home</a>
    </li>
    <li className="navItem">
      <a href="/" className="navLink">About</a>
    </li>
    <li className="navItem">
      <a href="/" className="navLink">Features</a>
    </li>
    <li className="navItem">
      <a href="/" className="navLink">Pricing</a>
    </li>
   
   <div className="headerBtns flex">
     <button className='btn loginBtn'>
        <a href='#'>Login</a>
     </button>
     <button className='btn loginBtn'>
        <a href='#'>Sign up</a>
     </button>
   </div>

  </ul>
   <div onClick={removeNav} className="closeNavbar">
      <AiFillCloseCircle className='icon'/>
   </div>
</div>

<div onClick={showNav} className="toggleNavbar">
  <TbGridDots className='icon'/>
</div>

    </div>
  </section>
)

}

export default Navbar