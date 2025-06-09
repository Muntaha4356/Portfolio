import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';  // from Firebase SDK
import { db } from '../config/firebase';  // your firebase config file
import './Projects.css';
function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const projectsCol = collection(db, 'projects');
        const projectsSnapshot = await getDocs(projectsCol);
        const projectsList = projectsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProjects(projectsList);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  if (loading) return <p>Loading projects...</p>;

  return (
    <div>
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map(({ id, Name, Description, Image, Stack, githublink }) => (
          <div key={id} className="project-card">
            <img src={Image} alt={Name} />
            <h3>{Name}</h3>
            <p>{Description}</p>
            <p><strong>Tech Stack:</strong> {Stack}</p>
            {githublink && (
              <a href={githublink} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;