import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import './Skills.css';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  const fetchSkills = async () => {
    const db = getFirestore();
    const skillsCol = collection(db, 'Skills');
    const snapshot = await getDocs(skillsCol);
    const skillList = snapshot.docs.map(doc => ({
      id: doc.id,
      name: doc.data().Name
    }));
    setSkills(skillList);
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("dragIndex", index);
  };

  const handleDrop = (e, dropIndex) => {
    const dragIndex = e.dataTransfer.getData("dragIndex");
    if (dragIndex === null) return;

    const updatedSkills = [...skills];
    const [draggedItem] = updatedSkills.splice(dragIndex, 1);
    updatedSkills.splice(dropIndex, 0, draggedItem);
    setSkills(updatedSkills);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <section id="skills">
      <div className="skills-container">
        <h2 className="skills-heading">My Skills</h2>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li
              key={skill.id}
              className="skill-card"
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
            >
              {skill.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;

