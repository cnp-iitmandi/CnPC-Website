import React from "react";
import ravinder from "../images/ravinder.jpeg";
import "./Recpro.css";
import nimisha from "../images/nimisha.jpg";
import parmod from "../images/parmod.jpg";
import aryan from "../images/aryan.jpg";
import harnaman from "../images/harnaman.jpg";
import vineet from "../images/vineet.jpg";
import ayushV from "../images/ayushV.jpg";
import deepak from "../images/deepak.jpg";
import sagar from "../images/sagar.jpg";
//import ayush from "../images/ayush.jpg";
import nivedita from "../images/nivedita.jpg";
import garima from "../images/garima.jpg";
import yatharth from "../images/yatarth.jpg";
import shobit from "../images/shobit.png";
import shikha from "../images/shikha.png";
import blank from "../images/backdrop.jpg" ;
//this year
import fa from "../images/venky.jpg";
import tni_fa from "../images/rahul_shreshtha.jpg";
import ayush from "../images/contact us/Ayush Gupta.png";
import shahsank from "../images/contact us/Shashank Dwivedi.jpeg";
import mohit from "../images/contact us/Mohit Mahajan.heic";
import srijan from "../images/contact us/Srijan Sood.jpg" ;
import saksham from "../images/contact us/Saksham Panpaliya.JPG"
import ishan from "../images/contact us/Ishan Sharma.jpeg" ;
import syed from "../images/contact us/Syed Shoaib.jpeg" ;
import purwansh from "../images/contact us/Purwansh Sahu.jpg" ;
import ayush_nigam from "../images/contact us/Ayush Nigam.jpg";
import sujith from "../images/contact us/Sujith.jpeg" ;
import ankit from "../images/contact us/Ankit Gurjar 2.jpg" ;
import vasu from "../images/contact us/Vasu Jain.jpg"
import rithika from "../images/contact us/Rithika Reddy Karra.jpg" ;
import krishna from "../images/contact us/Krishna Kumar Dixit.jpg" ;
import chinmayee from "../images/contact us/Chinmayee.jpeg";
import harshita from "../images/contact us/Harshita.JPG";
import rhythm from "../images/contact us/Rhythm Sharma.jpg";
import srikanta from "../images/contact us/Srikanta Mondal.jpg";
import praveen from "../images/contact us/Praveen Kumar.JPG";
import aniket from "../images/contact us/Aniket Kumar.jpg";
import arushi from "../images/contact us/Arushi.jpg";
import ishita from "../images/contact us/Ishita Sharma.jpg";
import jalaj from "../images/contact us/Jalaj Diggal.jpg";

//
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Form } from "react-bootstrap";
export const Contact = (props) => {
  return (
    <div>
      <div class="content">
        {/* <div className="banner">
          <div className="banner__content">
            <div className="contain">
              <a
                className="ca3-scroll-down-link ca3-scroll-down-arrow"
                data-ca3_iconfont="ETmodules"
                data-ca3_icon=""
                href="#scroll"
              />
            </div>
          </div>
        </div> */}

        <div id="scroll"></div>
        <div className="heading nav-unhide">
          <h2 className="placement">The Placement Team</h2>
        </div>
        <div className="container-snip">
          <figure className="snip1559">
            <figcaption className="snip1560">
              <div className="profile-image">
                <img
                  src={fa}
                  alt="tushar-jain"
                  className="image"
                />
                <h3 className="person">
                  Dr. Kala Venkata Uday
                  {/* <br />
                  <b>Email-{" "}</b>
                  <a href="mailto: advisorcnp@iitmandi.ac.in">
                    advisorcnp@iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: 01905267920">01905-267920</a> */}
                </h3>
              </div>
              <br />
              <div className="middle">
                <p className="text">
                  Dr. Kala Venkata Uday
                  <br />
                  Faculty Advisor
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto: advisorcnp@iitmandi.ac.in">
                    advisorcnp@iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: 01905267920">01905-267920</a>
                </p>
              </div>
            </figcaption>
          </figure>
          <figure className="snip1559">
            <figcaption className="snip1560">
              <div className="profile-image">
                <img
                  src={tni_fa}
                  alt="tushar-jain"
                  className="image"
                />
                <h3 className="person">
                  Dr. Rahul Shreshtha
                </h3>
              </div>
              <br />
              <div className="middle">
                <p className="text">
                  Dr. Rahul Shreshtha
                  <br />
                  Training and Internship,Faculty Advisor
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto: advisorcnp@iitmandi.ac.in">
                    advisorcnp@iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: 01905267920">01905-267920</a>
                </p>
              </div>
            </figcaption>
          </figure>
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img
                  // src="	https://lh5.googleusercontent.com/XQNQdcBH_aYr8wZX6cXxiE73XRCaKPTXAsPZg5JbkkyI682WCQmKkUH7EjteWIB-Zbb4-R1BAIqC0IC02datWzmpvwtvJKSFZsLxl2NVOOV0oqnu=w1280"
                  src={garima}
                  alt="Dr.Garima-Agrawal"
                  className="image"
                />
                <h3 className="person">
                  Dr. Garima Agrawal
                  {/* <br />
                  <b>Email</b>-{" "}
                  <a href="mailto: garima@iitmandi.ac.in">
                    garima@iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: 01905267827">01905-267827</a> */}
                  </h3>
              </div>
              <br />
              <div className="middle">
                <p className="text">
                  Dr. Garima Agrawal
                  <br />
                  Faculty Co-Advisor
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto: garima@iitmandi.ac.in">
                    garima@iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: 01905267827">01905-267827</a>
                </p>
              </div>
            </figcaption>
          </figure>
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img src={parmod} alt="Dr.Parmod-kumar" className="image" />
                <h3 className="person">
                  Dr. Parmod Kumar
                  {/* <br />
                  <b>Email</b>-{" "}
                  <a href="mailto: parmod@iitmandi.ac.in">
                    pramod@iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: 01905267264">01905-267264</a> */}
                </h3>
              </div>
              <br />
              <div className="middle">
                <p className="text">
                  Dr. Parmod Kumar
                  <br />
                  Faculty Co-Advisor
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto: parmod@iitmandi.ac.in">
                    pramod@iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: 01905267264">01905-267264</a>
                </p>
              </div>
              <br />
            </figcaption>
          </figure>
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img
                  src="	http://iitmandi.ac.in/Schools/SBS/faculty/baskar.jpg"
                  alt="Dr.Bhaskar"
                  className="image"
                />
                <h3 className="person">
                  Dr. Baskar Bakthavachalu
                  {/* <br />
                  <b>Email</b>-{" "}
                  <a href="mailto: baskar@iitmandi.ac.in">
                    baskar@iitmandi.ac.in
                  </a> */}
                  </h3>
              </div>
              <br />
              <div className="middle">
                <p className="text">
                  Dr. Baskar Bakthavachalu
                  <br />
                  Faculty Co-Advisor
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto: baskar@iitmandi.ac.in">
                    baskar@iitmandi.ac.in
                  </a>
                  <br />
                </p>
              </div>
            </figcaption>
          </figure>
          {/* <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img
                  src="http://iitmandi.ac.in/Schools/SCEE/faculty/rameshwar.jpg"
                  alt="Dr.Rameshwar Pratap"
                  className="image"
                />
                <h3 className="person">Dr. Rameshwar Pratap</h3>
              </div>
              <br />
              <div className="middle">
                <p className="text">
                  Dr. Rameshwar Pratap
                  <br />
                  Faculty Co-Advisor
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto: rameshwar@iitmandi.ac.in">
                    rameshwar@iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: 01905267945">01905-267945</a>
                </p>
              </div>
            </figcaption>
          </figure> */}
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img src={nimisha} alt="Nimisha N B" className="image" />
                <h3 className="person">
                  Nimisha N B
                  {/* <br />
                  <b>Email</b>-{" "}
                  <a href="mailto: nimisha@iitmandi.ac.in">
                    nimisha@iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +917807625022">+91-7807625022</a> */}
                  </h3>
              </div>
              <br />
              <div className="middle">
                <p className="text">
                  Nimisha N B
                  <br />
                  Placement Cell Executive
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto: nimisha@iitmandi.ac.in">
                    nimisha@iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +917807625022">+91-7807625022</a>
                </p>
              </div>
            </figcaption>
          </figure>
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img src={ravinder} alt="Mr.Ravinder" className="image" />
                <h3 className="person">
                  Mr. Ravinder Kumar
                  {/* <br />
                  <b>Phone</b>- <a href="tel: +919459366121">+91-9459366121</a> */}
                  </h3>
              </div>
              <br />
              <div className="middle">
                <div className="text">
                  Ravinder Kumar
                  <br />
                  Office Assistant
                  <br />
                  <b>Phone</b>- <a href="tel: +919459366121">+91-9459366121</a>
                </div>
              </div>
              <br />
            </figcaption>
          </figure>
        </div>
        <div className="heading nav-unhide">
          <h2 className="placement">The Student Coordinator's Team</h2>
        </div>
        <div className="container-snip">
          {/* UG Placement Coordinator */}
          <figure className="snip1559">
            <figcaption className="snip1560">
              <div className="profile-image">
                <img src={ayush} className="image" />
                <h3 className="person">Ayush Gupta</h3>
              </div>
              <br />
              <div className="middle">
                <p className="text">
                  Ayush Gupta
                  <br />
                  Overall Coordinator (Placement, UG)
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto: b21184@students.iitmandi.ac.in">
                  b21184@students.iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +918383909766">+91-8383909766</a>
                </p>
              </div>
            </figcaption>
          </figure>
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img src={shahsank} alt="Shashank Dwivedi" className="image" />
                <h3 className="person">Shashank Dwivedi</h3>
              </div>
              <br />
              <div className="middle">
                <p className="text">
                  Shashank Dwivedi
                  <br />
                  Overall Coordinator (Placement , UG)
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto: b21023@students.iitmandi.ac.in">
                  b21023@students.iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +918707031121">+91-8707031121</a>
                </p>
              </div>
            </figcaption>
          </figure>
          {/* UG Intern Coordinator */}
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img src={srijan} alt="Srijan Sood" className="image" />
                <h3 className="person">Sriajn Sood</h3>
              </div>
              <br />
              <div className="middle">
                <p className="text">
                  Sriajn Sood
                  <br />
                  Overall Coordinator (Internship, UG)
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto: b21227@students.iitmandi.ac.in ">
                  b21227@students.iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +919108406906">+91-9108406906</a>
                </p>
              </div>
              <br />
            </figcaption>
          </figure>
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img src={mohit} alt="Mohit Mahajan" className="image" />
                <h3 className="person">Mohit Mahajan</h3>
              </div>
              <br />
              <div className="middle">
                <p className="text">
                  Mohit Mahajan
                  <br />
                  Overall Coordinator (Internship ,UG)
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto: b21055@students.iitmandi.ac.in">
                    b21055@students.iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +919370588548">+91-9370588548</a>
                </p>
              </div>
            </figcaption>
          </figure>
          {/* PG Coordinator */}
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img src={ishan} alt="Ishan Sharma" className="image" />
                <h3 className="person">Ishan Sharma</h3>
              </div>
              <br />
              <div className="middle">
                <p className="text">
                  Ishan Sharma
                  <br />
                  Overall Coordinator (PG)
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto: s23007@students.iitmandi.ac.in">
                  s23007@students.iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +916388581883">+91-8979851665</a>
                </p>
              </div>
            </figcaption>
          </figure>
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img src={syed} alt="Syed Shoaib" className="image" />
                <h3 className="person">Syed Shoaib</h3>
              </div>
              <br />
              <div className="middle">
                <div className="text">
                  Syed Shoaib
                  <br />
                  Overall Coordinator(PG), Physics Coordinator
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto:v23099@students.iitmandi.ac.in">
                  v23099@students.iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +918105309066">+91-8105309066</a>
                </div>
              </div>
              <br />
            </figcaption>
          </figure>
          {/* Superset Coordinator */}
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img src={purwansh} alt="Purwansh sahu" className="image" />
                <h3 className="person">Purwansh sahu</h3>
              </div>
              <br />
              <div className="middle">
                <div className="text">
                  Purwansh sahu
                  <br />
                  Superset Coordinator
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailtob21213@students.iitmandi.ac.in">
                  b21213@students.iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +919399147060">+91-9399147060</a>
                </div>
              </div>
              <br />
            </figcaption>
          </figure>
          {/* Career Session Coordinator */}
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img src={ayush_nigam} alt="Ayush Nigam" className="image" />
                <h3 className="person">Ayush Nigam</h3>
              </div>
              <br />
              <div className="middle">
                <div className="text">
                  Ayush Nigam
                  <br />
                  Career Session Coordinator
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto:b20005@students.iitmandi.ac.in">
                  b20005@students.iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +918874378280">+91-8874378280 </a>
                </div>
              </div>
              <br />
            </figcaption>
          </figure>
          {/* Branch Coordinators UG */}
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img src={saksham} alt="Saksham Panpaliya" className="image" />
                <h3 className="person">Saksham Panpaliya</h3>
              </div>
              <br />
              <div className="middle">
                <p className="text">
                  Saksham Panpaliya
                  <br />
                  CSE Branch Coordinator
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto:b21126@students.iitmandi.ac.in">
                  b21126@students.iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +918551874797 ">+91-8551874797</a>
                </p>
              </div>
            </figcaption>
          </figure>
          
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img src={sujith} alt="Mothukuri Sujith" className="image" />
                <h3 className="person">Mothukuri Sujith</h3>
              </div>
              <br />
              <div className="middle">
                <div className="text">
                  Mothukuri Sujith
                  <br />
                  DSE Branch Coordinator
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto:b21159@students.iitmandi.ac.in">
                    b21159@students.iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +917095654643 ">+91-7095654643 </a>
                </div>
              </div>
              <br />
            </figcaption>
          </figure>
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img src={vasu} alt="Vasu Jain" className="image" />
                <h3 className="person">Vasu Jain</h3>
              </div>
              <br />
              <div className="middle">
                <div className="text">
                  Vasu Jain
                  <br />
                  EE Branch Coordinator
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto:b21233@students.iitmandi.ac.in">
                  b21233@students.iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +919958872818 ">+91-9958872818 </a>
                </div>
              </div>
              <br />
            </figcaption>
          </figure>
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img src={ankit} alt="Ankit Gurjar" className="image" />
                <h3 className="person">Ankit Gurjar</h3>
              </div>
              <br />
              <div className="middle">
                <div className="text">
                  Ankit Gurjar
                  <br />
                  ME Branch Coordinator
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto:b21328@students.iitmandi.ac.in">
                  b21328@students.iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +91789135024 ">+91-7891035024 </a>
                </div>
              </div>
              <br />
            </figcaption>
          </figure>
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img src={rithika} alt="Rithika Reddy Karra" className="image" />
                <h3 className="person">Rithika Reddy Karra</h3>
              </div>
              <br />
              <div className="middle">
                <div className="text">
                  Rithika Reddy Karra
                  <br />
                  CE Branch Coordinator
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto:b21050@students.iitmandi.ac.in">
                  b21050@students.iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +919704195340 ">+91-9704195340 </a>
                </div>
              </div>
              <br />
            </figcaption>
          </figure>
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img src={krishna} alt="Krishna Kumar Dixit" className="image" />
                <h3 className="person">Krishna Kumar Dixit</h3>
              </div>
              <br />
              <div className="middle">
                <div className="text">
                  Krishna Kumar Dixit
                  <br />
                  Bio Eng Branch Coordinator
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto:b21013@students.iitmandi.ac.in">
                  b21013@students.iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +918319742753 ">+91-8319742753 </a>
                </div>
              </div>
              <br />
            </figcaption>
          </figure>
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img src={blank} alt="Bhanushree Chinta" className="image" />
                <h3 className="person">Bhanushree Chinta</h3>
              </div>
              <br />
              <div className="middle">
                <div className="text">
                  Bhanushree Chinta
                  <br />
                  EP Branch Coordinator
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto:b21050@students.iitmandi.ac.in">
                  b21050@students.iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +919704195340 ">+91-9704195340 </a>
                </div>
              </div>
              <br />
            </figcaption>
          </figure>
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img src={chinmayee} alt="Chinmayee" className="image" />
                <h3 className="person">Chinmayee</h3>
              </div>
              <br />
              <div className="middle">
                <div className="text">
                  Chinmayee
                  <br />
                  Non Core Branch Coordinator
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto:b21123@students.iitmandi.ac.in">
                  b21123@students.iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +918179563660 ">+91-8179563660 </a>
                </div>
              </div>
              <br />
            </figcaption>
          </figure>
          {/* Branch Coordinators PG */}
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img src={harshita} alt="Harshita" className="image" />
                <h3 className="person">Harshita</h3>
              </div>
              <br />
              <div className="middle">
                <div className="text">
                  Harshita
                  <br />
                  MSc Applied Maths Branch Coordinator
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto:v23008@students.iitmandi.ac.in">
                  v23008@students.iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +918901629693 ">+91-8901629693 </a>
                </div>
              </div>
              <br />
            </figcaption>
          </figure>
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img src={rhythm} alt="Rhythm Sharma" className="image" />
                <h3 className="person">Rhythm Sharma</h3>
              </div>
              <br />
              <div className="middle">
                <div className="text">
                  Rhythm Sharma
                  <br />
                  MSc Chemistry Branch Coordinator
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto:v23058@students.iitmandi.ac.in">
                  v23058@students.iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +918923115553 ">+91-8923115553 </a>
                </div>
              </div>
              <br />
            </figcaption>
          </figure>
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img src={praveen} alt="Praveen Kumar" className="image" />
                <h3 className="person">Praveen Kumar</h3>
              </div>
              <br />
              <div className="middle">
                <div className="text">
                  Praveen Kumar
                  <br />
                  MSc Mathematics Branch Coordinator
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto:@praveenprajapat75430@gmail.com">
                  @praveenprajapat75430@gmail.com
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +917073009158 ">+91-7073009158 </a>
                </div>
              </div>
              <br />
            </figcaption>
          </figure>
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img src={aniket} alt="Aniket Kumar" className="image" />
                <h3 className="person">Aniket Kumar</h3>
              </div>
              <br />
              <div className="middle">
                <div className="text">
                  Aniket Kumar
                  <br />
                  Mtech CSE Branch Coordinator
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto:t23189@students.iitmandi.ac.in">
                  t23189@students.iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +919142811032 ">+91-9142811032 </a>
                </div>
              </div>
              <br />
            </figcaption>
          </figure>
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img src={arushi} alt="Arushi" className="image" />
                <h3 className="person">Arushi</h3>
              </div>
              <br />
              <div className="middle">
                <div className="text">
                  Arushi
                  <br />
                  STE Branch Coordinator
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto:t23069@students.iitmandi.ac.in">
                  t23069@students.iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +91790 ">+91-7906821506 </a>
                </div>
              </div>
              <br />
            </figcaption>
          </figure>
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img src={ishita} alt="Ishita" className="image" />
                <h3 className="person">Ishita</h3>
              </div>
              <br />
              <div className="middle">
                <div className="text">
                  Ishita
                  <br />
                  Mtech Research Branch Coordinator
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto:s23097@students.iitmandi.ac.in">
                  s23097@students.iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +918894044799 ">+91-8894044799 </a>
                </div>
              </div>
              <br />
            </figcaption>
          </figure>
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img src={jalaj} alt="Jalaj Diggal" className="image" />
                <h3 className="person">Jalaj Diggal</h3>
              </div>
              <br />
              <div className="middle">
                <div className="text">
                  Jalaj Diggal
                  <br />
                  MSc Chemistry Branch Coordinator
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto:v23062@students.iitmandi.ac.in">
                  v23062@students.iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +918077298696 ">+91-8077298696 </a>
                </div>
              </div>
              <br />
            </figcaption>
          </figure>
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img src={srikanta} alt="Srikanta Mondal" className="image" />
                <h3 className="person">Srikanta Mondal</h3>
              </div>
              <br />
              <div className="middle">
                <div className="text">
                  Srikanta Mondal
                  <br />
                  MA Development Studies Branch Coordinator
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto:a23010@students.iitmandi.ac.in">
                  a23010@students.iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +919064695779 ">+91-9064695779 </a>
                </div>
              </div>
              <br />
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};
