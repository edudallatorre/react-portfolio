import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo.png';
import './index.scss';


const Home = () => {

    return (
     <div className="container home-page">
        <div>
            <h1>Hi, <br />I'm
            <img src={LogoTitle} alt="developer" />
             dallatorre.dev
             <br />
             Web developer
             </h1>
             <h2>HTML / CSS / JS / PHP / React </h2>
            <Link to="/contact" className="flag-button">CONTACT ME</Link>
        </div>

     </div>   
    )

}

export default Home