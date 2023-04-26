import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
// import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';



const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['E','d', 'u', 'a', 'r', 'd', 'o', '','D','a','l','l','a','','T','o','r','r','e']
    const jobArray = [
      'w',
      'e',
      'b',
      ' ',
      'd',
      'e',
      'v',
      'e',
      'l',
      'o',
      'p',
      'e',
      'r',
      '.',
    ]
  

    return (
     <div className="container home-page">
        <div>
            <h1>
            <AnimatedLetters letterClass={letterClass} 
             strArray={nameArray}
            idx={15}
             />
            {/* <img src={LogoTitle} alt="developer" /> */}
             <br />
             </h1>
             <h2>@dallatorre.dev</h2>
            <Link to="/contact" className="flag-button">CONTACT ME</Link>
        </div>

     </div>   
    )

}

export default Home
