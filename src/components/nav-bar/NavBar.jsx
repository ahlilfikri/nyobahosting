import {useState,useEffect} from 'react';
import './NavBar.css';

const NavBar = () => {
    const [isopen, setIsOpen] = useState(true);
    
    const handleIsOpen = () => {
        setIsOpen(!isopen)
    }

    useEffect(() => {
        const handleResize = () => {
          const screenWidth = window.innerWidth;

          if (screenWidth > 600) {
            setIsOpen(true);
          } else {
            setIsOpen(false);
          }
        };
        window.addEventListener('resize', handleResize);

        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    

    return (
        <nav className="navbar">
            <div className="container">
                <h2>Muhamad Ahlil Fikri</h2>
                {(window.innerWidth < 600) &&(
                     <button className="menu-drop-down" onClick={handleIsOpen}>=</button>
                     )
                }
                {isopen && (
                    <ul className="nav-links">
                        <li><a href="#">About-me</a></li>
                        <li><a href="#">Video</a></li>
                        <li><a href="#">Experience</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    )
                }
            </div>
        </nav>
    );
};

export default NavBar;
