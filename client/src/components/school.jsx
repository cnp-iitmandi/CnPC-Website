export const Schools = (props) => {
  return (
    <>
      <div id="school">
        <div className="acadmic">
          <div className="slot">
            <div>
              <hr className="left" />
              <h3 className="homeHead">Schools</h3>
              <hr className="right" />
            </div>
            <p>
              Our schools are configured not by the conventional divides, but by
              the common ideas and beliefs that are the very foundations of the
              various fields. Our schools bridge diciplines. Infact, they are
              clustered around multi-disciplinary initiatives. Currently, the
              institute has 4 schools.
            </p>
            <br />
            <div className="sec-heading">
              <div className="subHead">
                <a href="https://www.iitmandi.ac.in/Schools/SCEE/index.php" target="_blank">School of Computing and Electrical Engineering</a>
              </div>
              <div className="sub-content">
                This School brings together faculty involved in the key
                technologies of the Information Age. These include computer
                science, communication, VLSI and microelectronics, and electrical
                energy. The underlying fundamental principles are information
                theory, theory of computation, communication theory, quantum
                mechanics and the laws of electromagnetism.
                
              To know more please,{" "}
                <a href="https://www.iitmandi.ac.in/Schools/SCEE/index.php" target="_blank">
                  click here
                </a>
                
              </div>
            </div>
            <br />
            <div className="sec-heading">
              <div className="subHead">
                <a href="http://se.iitmandi.ac.in/" target="_blank">School of Engineering</a>
              </div>
              {/* <div className="subHead">
                School of Engineering
              </div> */}
              <div className="sub-content">
              This School covers tangible physical structures and artifacts such
              as transport vehicles, transport systems, machines, materials,
              manufacturing, designs etc. The underlying principles are
              classical mechanics, atomic physics, thermodynamics. Many faculty
              from the traditional departments of mechanical, civil, aerospace,
              metallurgy engineering would be in this School.

              To know more please,{" "}
                <a href="http://se.iitmandi.ac.in/" target="_blank">
                  click here
                </a>

              </div>
            </div>
            <br />
            <div className="sec-heading">
              <div className="subHead">
                <a href="https://www.iitmandi.ac.in/Schools/SBS/index.php" target="_blank">School of Basic Sciences</a>
              </div>
              {/* <div className="subHead">
              School of Basic Sciences
              </div> */}
              <div className="sub-content">
              This School includes mathematics, physics, chemistry and life
              sciences. While some faculty may work in pure research, others
              would work on applied research in collaboration with colleagues in
              the engineering Schools.

              
              To know more please,{" "}
                <a href="https://www.iitmandi.ac.in/Schools/SBS/index.php" target="_blank">
                  click here
                </a>
                
              </div>
            </div>
            <br />
            <div className="sec-heading">
              <div className="subHead">
                <a href="https://www.iitmandi.ac.in/Schools/SHSS/index.php" target="_blank">School of Humanities and Social Sciences</a>
              </div>
              {/* <div className="subHead">
              School of Humanities and Social Sciences
              </div> */}
              <div className="sub-content">
              Modern engineers work in teams to create, improve and apply
              technology for the good of society. A good understanding of
              language, culture, sociology, economics, management, ecology, etc.
              is essential for the well-rounded engineer, for development of
              technologies, products and processes that will see widespread use.
              This School is thus an important part of IIT Mandi.
              
              To know more please,{" "}
                <a href="https://www.iitmandi.ac.in/Schools/SHSS/index.php" target="_blank">
                  click here
                </a>
                
              </div>
            </div>
            <br />
          </div>
        </div>
        <br /><br /><br />
      </div>
    </>
  );
};
