import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetching exercises data from GitHub
    axios.get('https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json')
      .then(response => setExercises(response.data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  // Filter exercises based on search query
  const filteredExercises = exercises.filter(exercise => 
    exercise.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    exercise.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="exercise-list">
      <h2>Exercise List</h2>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search exercises..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />

      <ul>
        {filteredExercises.map(exercise => (
          <li key={exercise.id} className="exercise-card">
            <div className="image-container">
              {/* Loop through images */}
              {exercise.images.map((image, index) => (
                <img
                  key={index}
                  src={`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/${image}`}
                  alt={exercise.name}
                  width="150"
                  style={{ marginRight: '10px' }} // Space between images
                />
              ))}
            </div>
            <div className="content">
              <h3>{exercise.name}</h3>

              {/* Render instructions as bullet points */}
              <ul>
                {exercise.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Exercises;
