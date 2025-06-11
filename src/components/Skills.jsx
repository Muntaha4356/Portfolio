import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
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

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(skills);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setSkills(items);
  };

  return (
    <section id="skills">
    <div className="skills-container">
      <h2 className="skills-heading">My Skills</h2>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="skills">
          {(provided) => (
            <ul
              className="skills-list"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {skills.map((skill, index) => (
                <Draggable key={skill.id} draggableId={skill.id} index={index}>
                  {(provided) => (
                    <li
                      className="skill-card"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {skill.name}
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
    </section>
  );
};

export default Skills;

