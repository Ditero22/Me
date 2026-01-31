import React from "react";
import dlsud from "../assets/dlsud.png";
import dvoref from "../assets/dvoref.png";
import jhs from "../assets/jhs.png";

const educationData = [
  {
    level: "Bachelor of Science in Information Technology",
    school: "De La Salle University – Dasmariñas, CAVITE | S.Y.: 2022 - Present",
    honors: [
      "1st Year – 1st & 2nd Semester: Second Honors",
      "3rd Year – 1st Semester: First Honors",
      "3rd Year – 2nd Semester: Second Honors",
    ],
    logo: dlsud,
    reverse: false,
  },
  {
    level: "Senior High School",
    school: "Dr. Vicente Orestes Romualdez Educational Foundation, LEYTE | S.Y.: 2019 - 2022",
    logo: dvoref,
    reverse: true,
  },
  {
    level: "Secondary Education",
    school: "Sacred Heart Seminary of Palo Inc., LEYTE | S.Y.: 2017 - 2019",
    logo: jhs,
    reverse: false,
  },
  {
    level: "Secondary Education",
    school: "St. Joseph High School Inc., LEYTE | S.Y.: 2015 - 2017",
    logo: jhs,
    reverse: true,
  },
  {
    level: "Primary Education",
    school: "Dagami South Central School, LEYTE",
    logo: jhs,
    reverse: false,
  },
];

function Education() {
  return (
    <section className="education">
        <div className="education-container">
      <h2>Education</h2>
      {educationData.map((edu, index) => (
        <div
          className={`edu-row ${edu.reverse ? "reverse" : ""}`}
          key={index}
        >
          <div className="edu-text">
            <h3>{edu.level}</h3>
            <p>{edu.school}</p>
            {edu.honors && (
              <ul>
                {edu.honors.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="edu-logo">
            <img src={edu.logo} alt={`${edu.level} logo`} className="rotating-logo"/>
          </div>
        </div>
      ))}
      </div>
    </section>
  );
}

export default Education;
