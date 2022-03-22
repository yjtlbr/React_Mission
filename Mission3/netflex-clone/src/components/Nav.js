import React, {useState, useEffect} from 'react'
import "./Nav.css"

export default function Nav() {
  const [show, setShow] = useState(false);

  useEffect (() => {
    window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      setShow(true);
    } else {
      setShow(false);
    }
  });

    return () => {
      window.removeEventListener("scroll", ()=> {

      })
    }
    }, []);

  


  return (
    <nav className={`nav ${show && "nav_black"}`}>
        <img
            alt='NetflexLogo'
            src="https://www.4flix.co.kr/data/file/gallery/1938524331_VHMpcxQR_9b8495c397c63babae72a7bda3a971c21b61b887.png"
            className="nav_logo"
            onClick={()=>window.loacation.reload()}
        />
         <img
            alt='User Logged'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6q8XYXGI3yhiOJy1HG1vR1JSShbgw9a47dA&usqp=CAU"
            className="nav_avarta"
        />
    </nav>
  )
}
