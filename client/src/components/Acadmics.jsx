import React from "react";
import { Schools } from "./school";

export const Acadmics = (props) => {
  return (
    <div>
      <div className="acadmic">
        <div className="slot">
          <div>
            <hr className="left" />
            <h3 className="homeHead">Academics</h3>
            <hr className="right" />
          </div>
          <p>
            The B.Tech curriculum is designed keeping in mind the need to
            produce well-rounded graduates many of whom will go on to join
            industry in technical or managerial roles, or to join the
            administrative services as technocrats, while a few may aspire to
            research careers. Some may even go on to become entrepreneurs. Thus,
            at IIT Mandi, the students are exposed to a broad range of knowledge
            and skills that will enable them to perform well in tomorrow's
            increasingly complex and inter-dependent world. A B.Tech. student at
            IIT Mandi will study foundation courses in basic sciences,
            engineering sciences and practice, humanities and social sciences.
            In the chosen discipline, besides studying the core courses, the
            student will also study elective courses which will enable them to
            develop significant knowledge in a specialized area with exposure to
            research trends and developments. The category of free/open
            electives outside the chosen discipline will enable the student to
            obtain significant inter-disciplinary knowledge. The student can
            consult a 'Faculty Advisor' with regard to the planning of
            curriculum and other academic issues.
          </p>
        </div>
        <br />
        <div className="slot">
          <button id="btn1" className="extraBtn">
            Minors{" "}
            <span className="plus">
              <i id="plus1" className="fas fa-plus"></i>
            </span>
          </button>
          <div id="msg1" className="extraCont">
            <p>
              In addition, the curriculum allows specialization in a 'Minor'
              area, by taking a set of 3-4 courses in another discipline. For
              example, a Mechanical engineering student can qualify for a minor
              in Computer Science or German language.
            </p>
          </div>
        </div>
        <div className="slot">
          <button id="btn2" className="extraBtn">
            Semester Exchange{" "}
            <span className="plus">
              <i id="plus2" className="fas fa-plus"></i>
            </span>
          </button>
          <div id="msg2" className="extraCont">
            <p>
              The B. Tech. degree program allows a student to go on exchange
              visits of up to two semesters to other universities, both in India
              and abroad, for course work and projects. A number of B. Tech.
              students have already availed these opportunities to study at
              international institutions at European Union (EU). IIT Mandi's
              undergraduate students have visited IIT Madras and several EU
              institutions under academic exchange program including the TU9
              Universities in Germany, Blekinge Institute of Technology in
              Sweden, Aalto University in Finland and IT University in Denmark.
            </p>
          </div>
        </div>
        <div className="slot">
          <button id="btn3" className="extraBtn">
            First Year curriculum{" "}
            <span className="plus">
              <i id="plus3" className="fas fa-plus"></i>
            </span>
          </button>
          <div id="msg3" className="extraCont">
            <p>
              An important aspect of the curriculum is the integration of
              innovation and design into the learning process. This is achieved
              through a 'Design Practicum' model of learning, which is built
              into the curriculum. Thus, in the first year of the B.Tech
              program, the student carries out a 'reverse engineering' project,
              where student teams dismantle a common gadget/equipment,
              understand how it works and then put it back together in working
              order
            </p>
          </div>
        </div>
        <div className="slot">
          <button id="btn4" className="extraBtn">
            Second Year curriculum{" "}
            <span className="plus">
              <i id="plus4" className="fas fa-plus"></i>
            </span>
          </button>
          <div id="msg4" className="extraCont">
            <p>
              At the second year level, students learn product design and
              development skills. Interdisciplinary teams of six students,
              randomly selected from different branches propose product ideas
              and then build working prototypes. Many of these product ideas are
              derived from the needs of the society. The products successfully
              built and demonstrated in the previous years include a
              fire-fighting robot, gesture-controlled 3-D hologram, automated
              ration vending machine etc.
            </p>
          </div>
        </div>
        <div className="slot">
          <button id="btn5" className="extraBtn">
            Third Year curriculum{" "}
            <span className="plus">
              <i id="plus5" className="fas fa-plus"></i>
            </span>
          </button>
          <div id="msg5" className="extraCont">
            <p>
              At the third year level, the students have the option of working
              on an 'Interdisciplinary Socio-Technical Project' (ISTP). The ISTP
              exposes students to the complex interactions of technology and
              society. As part of ISTP, the students work in groups under the
              mentorship of a faculty member to identify and study the problems
              related to the society and try to suggest solutions for the same.
              Every year, a group of students from Worcester Polytechnic
              Institute (WPI), USA visits IIT Mandi and joins IIT Mandi students
              in carrying out the ISTP projects.
            </p>
          </div>
        </div>
        <div className="slot">
          <button id="btn6" className="extraBtn">
            Fourth Year curriculum{" "}
            <span className="plus">
              <i id="plus6" className="fas fa-plus"></i>
            </span>
          </button>
          <div id="msg6" className="extraCont">
            <p>
              Finally, during the fourth year, the students have the option of
              doing a Major Technical Project (MTP) either individually or in a
              group. MTP is the capstone of the 4-year B. Tech programme. The
              project is expected to have a major technical contribution in the
              student's discipline and is intended to demonstrate a high degree
              of technical knowledge, innovativeness and maturity. The outcome
              of a B. Tech Project may be an innovative product or technology
              that addresses a problem of society, or it may be more theoretical
              or exploratory resulting in an advance in the frontiers of
              knowledge.
            </p>
          </div>
        </div>
        <br />
        <div className="slot">
          <p>
            Overall, the curriculum at IIT Mandi is designed to encourage and
            enable the student to become well-qualified and well-rounded
            engineers in all respects.
          </p>
        </div>
      </div>
      <br /><br /><br />
      <Schools />
      {/* <div id="UG/PG" className="acadmic">
        <div className="slot">
          <div>
            <hr className="left" />
            <h3 className="homeHead">Programmes</h3>
            <hr className="right" />
          </div>
          <div className="sec-heading">
            <div className="subHead">
            Under graduates
            </div>
            <div className="sub-content">
            Situated in the lap of Himalayas, IIT Mandi is one the finest
              technical institute for students to spend their undergraduate
              years. While broad academics and innovative curriculum is one
              strong focus of the institute, extra co circulars like sports,
              club activities and events, inter college competitions, fests are
              all given due importance. Owing to the enthusiastic student
              community, a lot of new ideas, projects, and events of different
              scales are executed every year. Overall, the undergraduate
              experience is one its kind and most cherished experience of
              students life.
            </div>
          </div>
          <div className="sec-heading">
            <div className="subHead">
            Post graduates
            </div>
            <div className="sub-content">
            With an extraordinary group of teachers and peers, IIT Mandi
              offers one of India’s finest PG programs. With a vast pool of
              resources including a gigantic library and its number of labs ,
              IIT Mandi has managed to create the perfect nest to design and
              build the next future.
            </div>
          </div>
          <br />
        </div>
      </div> */}
      <br /><br /><br />
    </div>
  );
};
