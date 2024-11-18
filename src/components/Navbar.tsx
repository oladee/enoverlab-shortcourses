import { Link } from "react-router-dom"
import logo from "../assets/logo.svg"
import closeIcon from "../assets/close.svg"
import ham from "../assets/hammenu.svg"
import { useEffect } from "react"
import { useAuth } from "../context/AuthContext"
const Navbar = () => {
  const auth = useAuth()
  useEffect(()=>{
    const nav = document.getElementById('nav')!
    const navOff = nav.offsetTop
    const getScroll = ()=> {
      if(window.scrollY > navOff){
        nav.classList.add('sticky')
      }else{
        nav.classList.remove('sticky')
      }
    }
    window.addEventListener('scroll',getScroll)
    return ()=> window.removeEventListener('scroll', getScroll)
  })

  useEffect(()=>{
    const ham = document.getElementById('ham')!
    const mobby = document.getElementById('mobby')!
    const ul = document.querySelector('#mobby .ul')!
    const closeIcon = document.querySelector('#closeIcon')!
    const showSideBar = ()=>{
      mobby.classList.add('open')
      mobby.style.animation = "mymove 1s 1"
      if(mobby.classList.contains('open')){
        document.body.classList.add('bodyStiff')
      }else{
        document.body.classList.remove('bodyStiff')
      }
    }
    const stopUlpropagation = (e: Event)=>{
      e.stopPropagation()
    }
    const mobbyClose = (e: Event)=>{
      e.stopPropagation()
      mobby.classList.remove('open')
      document.body.classList.remove('bodyStiff')
    }

    const closeMobby = ()=>{
      mobby.style.animation = "mymoveopposite 1s 1"
      document.body.classList.remove('bodyStiff')
      setTimeout(()=>{
        mobby.classList.remove('open')
      },1000)
    }
    ham.addEventListener('click',showSideBar)
    ul.addEventListener('click',stopUlpropagation)
    mobby.addEventListener('click',mobbyClose)
    closeIcon.addEventListener('click', closeMobby)
  })

  return (
    <div className="flex justify-between py-4 px-4 lg:px-[100px] font-inter items-center" id="nav">
      <Link to='/'>
        <img src={logo} alt="Enoverlab Logo" />
      </Link>
      <nav className="hidden lg:flex lg:justify-between lg:items-center" id="mobby">
        <div className="text-white lg:flex lg:items-center lg:gap-16 ul">
          <div className="flex justify-end">
            <img src={closeIcon} alt="close icon" className="lg:hidden w-14" id="closeIcon" />
          </div>
          {
            auth?.isLoggedin ? <p>{auth.userData?.email}</p> : (<div className="lg:flex lg:items-center lg:gap-16">
              <Link to='/auth/login' className="border border-blue-100 rounded-md text-black-100 py-2 px-8">
              Log In
            </Link>
            <Link to='/auth/signup' className="border border-blue-100 bg-blue-100 rounded-md text-white py-2 px-8">
                Sign Up
            </Link>
            </div>)
          }
        </div>
    </nav>
    <img src={ham} alt="" className="w-14 lg:hidden" id="ham" />
    </div>
  )
}

export default Navbar
