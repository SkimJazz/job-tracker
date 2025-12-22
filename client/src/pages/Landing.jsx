/**
 * @file Landing.jsx
 * @description
 * This file defines the Landing page component for the Job Tracker application.
 * The Landing page serves as the main entry point for users, providing an overview
 * of the application's features, navigation options, and links to register or log in.
 * It includes a logo, descriptive text, and a main illustrative image to
 * engage users and introduce the application's purpose.
 *
 * @module pages/Landing
 */

import Wrapper from "../assets/wrappers/LandingPage.js";
import LandingImage from '../assets/images/main.svg'
import {Link} from "react-router-dom";
import {Logo} from "../components";


/**
 * Landing page component.
 *
 * Renders the main landing page with navigation, application description,
 * and links to register or login. Includes a logo, descriptive
 * text about the application's features, and a main illustrative image.
 *
 * @component
 * @returns {JSX.Element} The rendered landing page.
 */
const Landing = () => {
    return (
        <Wrapper>

            <nav>
                <Logo />
            </nav>

            <div className="container page">
                <div className="info">
                    <h1>
                        job <span> tracking </span> app
                    </h1>
                    <p>
                        Navigating the job market is now easier with our Job Tracker application.
                        Tailored for job seekers, this tool helps you manage and track the status
                        of all your job applications in one place. From application dates to
                        interview schedules, Job Tracker keeps you updated and organized. Whether
                        you're a fresh graduate exploring opportunities or a professional seeking
                        a career change, Job Tracker is your reliable partner in your job search
                        journey. Start your path to your dream job with us today!
                    </p>
                    <Link to='/register' className='btn register-link'>
                        Register
                    </Link>
                    <Link to='/login' className='btn'>
                        Login / Demo User
                    </Link>
                </div>
                <img src={LandingImage} alt='job hunt' className='img main-img'/>
            </div>

        </Wrapper>
    );
};


export default Landing