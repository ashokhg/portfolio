import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo1-a.png'
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo'
import { useEffect, useState } from "react";

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['A','s','h', 'o', 'k']
    const jobArray = ['w', 'e', 'b',' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    // useEffect(() => {
    //     return setTimeout(() => {
    //         setLetterClass('text-animate-hover')
    //     }, 4000)
    // }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass} >H</span>
                    <span className={'${letterClass} _12'} >i,</span>     
                 <br /> 
                 <span className={'${letterClass} _13'} >I'</span>
                    <span className={'${letterClass} _14'} >m </span> 
                  <img src={LogoTitle} />
                 <AnimatedLetters letterClass={ letterClass }
                 strArray = { nameArray }
                 idx = { 15 } />
                 <br />
                 <AnimatedLetters letterClass={ letterClass }
                 strArray = { jobArray }
                 idx = { 22 } />
                 </h1>
                 <h2>Full-stack Developer</h2>
                 <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>

    );
}

export default Home

//doing first commit