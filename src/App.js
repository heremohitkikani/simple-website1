import './App.css';
// import './image';
import { MdMarkEmailUnread, MdOutlineFacebook } from "react-icons/md";
import { IoLogoFacebook, IoLogoTwitter, IoLogoGoogleplus, IoLogoLinkedin, IoLogoInstagram, IoLogoYoutube, IoLogoWhatsapp, IoIosArrowRoundForward, IoMdPlayCircle, IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiSun } from "react-icons/hi";

import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import { PiQuotesFill } from "react-icons/pi";

import logo from './image/logo.svg';
import slider from './image/slider.webp';
import offered1 from './image/offered1.webp';
import offered2 from './image/offered2.webp';
import offered3 from './image/offered3.webp';
import offered4 from './image/offered4.webp';
import offered5 from './image/offered5.jpeg';
import offered6 from './image/offered6.jpeg';

import about from './image/about.jpeg';
import k11 from './image/11.png';
import k22 from './image/22.png';
import k33 from './image/33.png';
import k44 from './image/44.png';

import happy1 from './image/happy1.jpeg';
import happy2 from './image/happy2.png';
import happyper from './image/happyper.jpeg';
import i11 from './image/111.png';
import i22 from './image/222.png';
import i33 from './image/333.png';
import i55 from './image/555.png';
import i44 from './image/444.png';
import i66 from './image/666.png';

import r1 from './image/r1.png';
import r2 from './image/r2.png';
import r3 from './image/r3.png';
import r4 from './image/r4.png';
import r5 from './image/r5.png';
import r6 from './image/r6.png';
import lastlogo from './image/lastlogo.svg';

import { FaHandPointRight } from "react-icons/fa";
import { BiSolidBank } from "react-icons/bi";





function App() {
    return (
        <div>
            {/* TOP-MENU START*/}
            <div className='top-menu'>
                <div className="container">
                    <div className="d_flex">
                        <div className="d_flex">
                            <div className="d_flex top-right">
                                <MdMarkEmailUnread></MdMarkEmailUnread>
                                <p className='top-text'>info@cdmi.in</p>
                            </div>
                            <div className="d_flex">
                                <HiSun></HiSun>
                                <p className='top-text'>Verify Certificate</p>
                            </div>
                        </div>
                        <div className='top-middile'>
                            <p>HAVE ANY QUESTION ? +91 90333 16003</p>
                        </div>
                        <div className='d_flex'>
                            <IoLogoFacebook className='top-icon'></IoLogoFacebook>
                            <IoLogoTwitter className='top-icon'></IoLogoTwitter>
                            <IoLogoGoogleplus className='top-icon'></IoLogoGoogleplus>
                            <IoLogoLinkedin className='top-icon'></IoLogoLinkedin>
                            <IoLogoInstagram className='top-icon'></IoLogoInstagram>
                            <IoLogoYoutube className='top-icon'></IoLogoYoutube>
                            <IoLogoWhatsapp className='top-icon'></IoLogoWhatsapp>
                        </div>
                    </div>
                </div>
            </div>

            {/*TOP-MENU END */}

            {/* MAIN-MENU START */}
            <div className='container'>
                <div className='d_flex main-menu'>
                    <div className='main-left'>
                        <img src={logo}></img>
                    </div>
                    <div className='main-right'>
                        <ul className='d_flex'>
                            <li><a>HOME</a></li>
                            <li>COURCES<a></a><MdKeyboardArrowDown className='main-icon'></MdKeyboardArrowDown></li>
                            <li>ACTIVITIES<MdKeyboardArrowDown className='main-icon'></MdKeyboardArrowDown></li>
                            <li>BLOG<MdKeyboardArrowDown className='main-icon'></MdKeyboardArrowDown></li>
                            <li>KNOW US<MdKeyboardArrowDown className='main-icon'></MdKeyboardArrowDown></li>
                            <li>GET IN TOUCH<MdKeyboardArrowDown className='main-icon'></MdKeyboardArrowDown></li>
                            <li className='main-student'>STUDENT ZON<MdKeyboardArrowDown className='main-icon'></MdKeyboardArrowDown></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* MAIN-MENU END */}

            {/* SLIDER START */}

            <img src={slider} className='slider-img'></img>

            {/* SLIDER END */}

            {/* OFFERED COURCE SECTION START */}
            <div className='spacery container offered'>
                <p className='offered-p'>CREATIVE COURCES
                    <div className='offered-div'></div>
                </p>
                <h1>OFFERED COURSES</h1>
                <div className='d_flex offered-div2'>
                    <div>
                        <img src={offered1}></img>
                        <h2>Full Stack Cource</h2>
                        <div className='d_flex offered-bottom'>
                            <div>
                                <i><IoMdStar></IoMdStar></i>
                                <i><IoMdStar></IoMdStar></i>
                                <i><IoMdStar></IoMdStar></i>
                                <i><IoMdStar></IoMdStar></i>
                                <i><IoMdStarHalf ></IoMdStarHalf ></i>
                            </div>
                            <button><a>Know more..!</a></button>
                        </div>
                    </div>
                    <div>
                        <img src={offered2}></img>
                        <h2>Data Science</h2>
                        <div className='d_flex offered-bottom'>
                            <div>
                                <i><IoMdStar></IoMdStar></i>
                                <i><IoMdStar></IoMdStar></i>
                                <i><IoMdStar></IoMdStar></i>
                                <i><IoMdStar></IoMdStar></i>
                                <i><IoMdStarHalf ></IoMdStarHalf ></i>
                            </div>
                            <button>Know more..!</button>
                        </div>
                    </div>
                    <div>
                        <img src={offered3}></img>
                        <h2>React Native</h2>
                        <div className='d_flex offered-bottom'>
                            <div>
                                <i><IoMdStar></IoMdStar></i>
                                <i><IoMdStar></IoMdStar></i>
                                <i><IoMdStar></IoMdStar></i>
                                <i><IoMdStar></IoMdStar></i>
                                <i><IoMdStarHalf ></IoMdStarHalf ></i>
                            </div>
                            <button>Know more..!</button>
                        </div>
                    </div>
                    <div>
                        <img src={offered4}></img>
                        <h2>Game Development</h2>
                        <div className='d_flex offered-bottom'>
                            <div>
                                <i><IoMdStar></IoMdStar></i>
                                <i><IoMdStar></IoMdStar></i>
                                <i><IoMdStar></IoMdStar></i>
                                <i><IoMdStar></IoMdStar></i>
                                <i><IoMdStarHalf ></IoMdStarHalf ></i>
                            </div>
                            <button>Know more..!</button>
                        </div>
                    </div>
                    <div>
                        <img src={offered5}></img>
                        <h2>C programming</h2>
                        <div className='d_flex offered-bottom'>
                            <div>
                                <i><IoMdStar></IoMdStar></i>
                                <i><IoMdStar></IoMdStar></i>
                                <i><IoMdStar></IoMdStar></i>
                                <i><IoMdStar></IoMdStar></i>
                                <i><IoMdStarHalf ></IoMdStarHalf ></i>
                            </div>
                            <button>Know more..!</button>
                        </div>
                    </div>
                    <div>
                        <img src={offered6}></img>
                        <h2>Node Js</h2>
                        <div className='d_flex offered-bottom'>
                            <div>
                                <i><IoMdStar></IoMdStar></i>
                                <i><IoMdStar></IoMdStar></i>
                                <i><IoMdStar></IoMdStar></i>
                                <i><IoMdStar></IoMdStar></i>
                                <i><IoMdStarHalf ></IoMdStarHalf ></i>
                            </div>
                            <button>Know more..!</button>
                        </div>
                    </div>
                </div>

                <button className='offeref-last'><a>View ALL Courses<i><IoIosArrowRoundForward></IoIosArrowRoundForward></i></a></button>


            </div>
            {/* OFFERED COURCE SECTION END */}

            {/* ABOUT US SECTION START */}
            <div className='aboutus'>
                <div className='about-left'>
                    <p className='about-p'>ABOUT US
                        <div className='about-div'></div>
                    </p>
                    <h3>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</h3>
                    <p className='about-pp'>Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Surat for web design, Game design,Mobile App Development, Game Development ,Video Editing & All types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.</p>
                    <button className='about-last'><a>Enroll Now...!</a></button>
                </div>
                <div className='about-right'>
                    <img src={about}></img>
                    <div className='about-div2'></div>
                    <i><IoMdPlayCircle></IoMdPlayCircle></i>
                </div>
            </div>
            {/* ABOUT US SECTION END */}


            {/* KEYBOARD SECTION START */}

            <div className='keyboard speacery'>
                <div className='container2 d_flex'>
                    <div>
                        <img src={k11}></img>
                        <h1>14000+</h1>
                        <h4>HAPPY STUDENTS</h4>
                    </div>
                    <div>
                        <img src={k22}></img>
                        <h1>10+</h1>
                        <h4>CERTIFICATION APPROVAL</h4>
                    </div>
                    <div>
                        <img src={k33}></img>
                        <h1>70+</h1>
                        <h4>CERTIFIED TEACHERS</h4>
                    </div>
                    <div>
                        <img src={k44}></img>
                        <h1>9000+</h1>
                        <h4>STUDENTS PLACED</h4>
                    </div>
                </div>
            </div>
            {/* KEYBOARD SECTION END */}

            {/* HAPPY STUDENT SECTION START */}
            <div className='container spacery d_flex happy'>
                <div className='happy-left'>
                    <p className='about-p'>HAPPY STUDENT
                        <div className='about-div'></div>
                    </p>
                    <h1>ALUMNI SPEAK</h1>
                    <div className='d_flex happy-flex'>
                        <i className='h-quotes'><PiQuotesFill></PiQuotesFill></i>
                        <div className='h-flex-right'>
                            <i><IoIosArrowBack ></IoIosArrowBack></i>
                            <i><IoIosArrowForward ></IoIosArrowForward></i>
                        </div>
                    </div>
                    <p>web design, Game design,Mobile App Development, Game Development ,Video Editing & All types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to.</p>
                    <div className='d_flex happy-bottom'>
                        <div className='happy-b1'>
                            <img src={happyper}></img>
                        </div>
                        <div className='happy-b2'>
                            <h4>KIKANI MOHIT</h4>
                            <h3 style={{ fontStyle: 'italic', color: 'grey', fontSize: '18px' }}><font style={{ color: 'orange', fontStyle: 'italic' }}>full stack devloper</font>@Artbees solution</h3>
                        </div>
                    </div>
                </div>
                <div className='happy-right'>
                    <img src={happy1} className='happy1'></img>
                    <img src={happy2} className='happy2'></img>
                </div>
            </div>
            {/* HAPPY STUDENT SECTION END */}


            {/* READ OUR DIFFERENCE SECTION START */}

            <div className='read-bg spacery'>
                <div className='pd-y container read'>
                    <p className='read-head'>Read Our Difference
                        <div className='line'></div>
                    </p>
                    <h1>Why Choose Creative</h1>

                    <div className='d_flex flex_wrap read-img'>
                        <div className='read-1 read1'>
                            <img src={i11}></img>

                            <h3>Industry Experts As Trainers</h3>
                            <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
                        </div>

                        <div className='read-1 read2'>
                            <img src={i22}></img>

                            <h3>Latest Curriculum</h3>
                            <p>We Provides latest curriculuuch a way that Students will get full knowledge within a short time.</p>
                        </div>

                        <div className='read-1 read3'>
                            <img src={i33}></img>

                            <h3>Latest Technology</h3>
                            <p>We strive to let you have a solid foundational knowledge of technologies shaping the IT World today.</p>
                        </div>

                        <div className='read-1 read4'>
                            <img src={i44}></img>

                            <h3>Interview Assistance</h3>
                            <p>At the end of each training,our tible technical questions technical questions you may be asked.</p>
                        </div>

                        <div className='read-1 read5'>
                            <img src={i55}></img>

                            <h3>Free Upgradation</h3>
                            <p>We will be provided free upgradation for any newer version of the course you have.</p>
                        </div>

                        <div className='read-1 read6'>
                            <img src={i66}></img>

                            <h3>Lifetime Support</h3>
                            <p>We will provide you lifetime support on aaaavfsll the courses you learned from us.</p>
                        </div>
                    </div>

                </div>
            </div>



            {/* READ OUR DIFFERENCE SECTION END */}

            {/*STUDENT PLACEMENT SECTION START */}
            <div className='student-place spacery container'>
                <p className='student-place-p'>STUDENT PLACEMENT
                    <div className='student-place-div'></div>
                </p>
                <h1>OUR RECRUITMENT PARTNERS</h1>

                <div className='d_flex our-req'>
                    <div className='req'>
                        <img src={r1}></img>
                    </div>
                    <div className='req'>
                        <img src={r2}></img>
                    </div>
                    <div className='req'>
                        <img src={r3}></img>
                    </div>
                    <div className='req'>
                        <img src={r4}></img>
                    </div>
                    <div className='req'>
                        <img src={r5}></img>
                    </div>
                    <div className='req'>
                        <img src={r6}></img>
                    </div>
                </div>

                <h2>Our Demanded Course -</h2>
                <div className='flex_wrap ancore'>
                    <a href=''>Best C++ Programming Langtitute</a>
                    <a href=''>Advance Angular js training institute in surat</a>
                    <a href=''>game design course in katargam</a>
                    <a href=''>game design course in katargam</a>
                    <a href=''>Web design training institute in katargam</a>
                    <a href=''>Web design training institute in katargam</a>
                    <a href=''>Android app development institute</a>
                    <a href=''>Web design training institute in katargam</a>
                    <a href=''>solidworks training institute in Mota Varachha</a>
                    <a href=''>react js training institute in surat</a>
                    <a href=''>Web design training institute in varachha</a>
                    <a href=''>Creo parametrics training institute in varachha</a>
                    <a href=''>Live game development training institute</a>
                    <a href=''>Live game development training institute</a>
                    <a href=''>Best nodejs training institute</a>
                    <a href=''>Best nodejs training institute</a>
                </div>
                <h3>Show More</h3>
            </div>
            {/*STUDENT PLACEMENT SECTION END */}

            {/*DEMANDED COURSE SECTION START */}

            <div className=' footer'>
                <div className=' container spacery footer2'>
                    <div className='footer-left'>
                        <img src={lastlogo}></img>
                        <p>Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.</p>
                        <h3>FOLLOW US ON</h3>
                        <div className='footer_flex'>
                            <IoLogoFacebook className='footer-icon'></IoLogoFacebook>
                            <IoLogoTwitter className='footer-icon'></IoLogoTwitter>
                            <IoLogoGoogleplus className='footer-icon'></IoLogoGoogleplus>
                            <IoLogoLinkedin className='footer-icon'></IoLogoLinkedin>
                            <IoLogoInstagram className='footer-icon'></IoLogoInstagram>
                            <IoLogoYoutube className='footer-icon'></IoLogoYoutube>
                            <IoLogoWhatsapp className='footer-icon'></IoLogoWhatsapp>
                        </div>
                    </div>
                    <div className='footer-center'>
                        <h3>FEATURE LINKS</h3>
                        <ul>
                            <li><i><FaHandPointRight ></FaHandPointRight></i>About Us</li>
                            <li><i><FaHandPointRight ></FaHandPointRight></i>Blogs</li>
                            <li><i><FaHandPointRight ></FaHandPointRight></i>Join Us</li>
                            <li><i><FaHandPointRight ></FaHandPointRight></i>Company Logins</li>
                            <li><i><FaHandPointRight ></FaHandPointRight></i>Certificate verification</li>
                        </ul>
                    </div>
                    <div className='footer-right'>
                        <h3>CONTACT US</h3>
                        <h4>HEAD OFFICE - YOGICHOWK</h4>
                        <p>401-404, 4th Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat.</p>
                        <p>Mo :<font style={{ color: '#EAA800' }}> +91 90333 16003</font></p>
                        <h3 style={{ color: '#EAA800' }}>OTHER BRANCHES</h3>
                        <ul>
                            <li><i><BiSolidBank ></BiSolidBank></i>Katargam</li>
                            <li><i><BiSolidBank ></BiSolidBank></i>Motavarachha</li>
                            <li><i><BiSolidBank ></BiSolidBank></i>Adajan</li>
                            <li><i><BiSolidBank ></BiSolidBank></i>Navasari</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='lastsec'>
                <p className='container'>© 2023 All Rights Reserved by Creative Design & Multimedia Institute.</p>
            </div>

            {/*DEMANDED COURSE SECTION END */}

        </div>


    );
}

export default App;
