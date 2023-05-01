import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
// import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';



const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = [
      'I',
      '\'m',
      '',
      'E',
      'd', 
      'u', 
      'a', 
      'r', 
      'd', 
      'o'
    ]
    const jobArray = [
      'D',
      'e',
      'v',
      'e',
      'l',
      'o',
      'p',
      'e',
      'r',
    ]

    useEffect(() => {
      return setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000)
    }, [])
  

    return (
     <div className="container home-page">
        <div>
            <h1>
             <span className={letterClass}>H</span>
             <span className={`${letterClass} _12`}>i,</span><br />
            <AnimatedLetters letterClass={letterClass} 
             strArray={nameArray}
            idx={15}
             /><br />
             <AnimatedLetters letterClass={letterClass}
             strArray={jobArray} 
             idx={22}/>
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
