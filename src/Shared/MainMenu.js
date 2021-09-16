import { Link } from "react-router-dom";
import "./Shared.css";

const MainMenu = ({activeLink, setActiveLink}) => {
    
    return (
        <div id="main-menu">
            <Link 
                className="nav-link link1"
                to="/"
            >
                <h2 
                    className={ activeLink === 'home' ? "active" : '' }
                    onClick={ () => {setActiveLink('home'); console.log(activeLink)}}
                >Home</h2>
            </Link>
            <Link 
                className="nav-link link2"
                to="/aboutme"
            >
                <h2 
                    className={ activeLink === 'aboutme' ? "active" : '' }
                    onClick={ () => setActiveLink('aboutme')}
                >About Me</h2>
            </Link>
            <Link 
                className="nav-link link3"
                to="/mywork"
            >
                <h2 
                    className={ activeLink === 'projects' ? "active" :  ''}
                    onClick={ () => setActiveLink('projects')}
                >Projects</h2>
            </Link>
            <Link 
                className="nav-link link4"
                to="/contactme"
            >
                <h2 
                    className={ activeLink === 'contactme' ? "active" : '' }
                    onClick={ () => setActiveLink('contactme')}
                >Contact me</h2>
            </Link>
        </div>
    )
}

export default MainMenu
