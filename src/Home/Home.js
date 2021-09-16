import { Icon } from 'semantic-ui-react';
import './Home.css';


const Home = () => {
    return (
        <div id="home-page">
            <div className="my-name">
                <h1>DAN ILANDARAGE</h1>
            </div>
            <div className="work-titles">
                <h3>Full-Stack Developer</h3>
            </div>
            <div className="socialmedia">
                <Icon className="social-icon"  name="linkedin alternate" size="big"/>
                <Icon className="social-icon" name="github" size="big"/>
                <Icon className="social-icon" name="youtube" size="big"/>
                <Icon className="social-icon" name="github" size="big"/>                
            </div>
        </div>  
    )
}

export default Home
