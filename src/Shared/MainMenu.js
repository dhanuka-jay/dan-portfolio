
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import "./Shared.css";

const MainMenu = ({toggleMenu, setToggleMenu, activeLink, setActiveLink}) => {
    
    return (
        <div id="main-menu">
            <div className={ toggleMenu ? "toggle-btn show" : "toggle-btn" } >
                <Icon 
                    name="arrow circle left" 
                    size="big" 
                    onClick={ () => setToggleMenu(!toggleMenu) }
                />
            </div>
            <div className={ toggleMenu ? "link-container show" : "link-container hide" }>
                <Link 
                    className="nav-link link1"
                    to="/"
                >
                    <h2 
                        className={ activeLink === 'home' ? "active" : '' }
                        onClick={ () => {setActiveLink('home'); setToggleMenu(!toggleMenu)}}
                    >Home</h2>
                </Link>
                <Link 
                    className="nav-link link2"
                    to="/aboutme"
                >
                    <h2 
                        className={ activeLink === 'aboutme' ? "active" : '' }
                        onClick={ () => {setActiveLink('aboutme'); setToggleMenu(!toggleMenu)}}
                    >About Me</h2>
                </Link>
                <Link 
                    className="nav-link link3"
                    to="/mywork"
                >
                    <h2 
                        className={ activeLink === 'projects' ? "active" :  ''}
                        onClick={ () => {setActiveLink('projects'); setToggleMenu(!toggleMenu)}}
                    >Projects</h2>
                </Link>
                <Link 
                    className="nav-link link4"
                    to="/contactme"
                >
                    <h2 
                        className={ activeLink === 'contactme' ? "active" : '' }
                        onClick={ () => {setActiveLink('contactme'); setToggleMenu(!toggleMenu)}}
                    >Contact me</h2>
                </Link>
            </div>
        </div>
    )
}

export default MainMenu
