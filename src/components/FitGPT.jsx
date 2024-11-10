import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FitGPT = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/heart-data')
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  }, []);

  if (!data) {
    return (
      <div id='lottie_render'>
      <iframe frameBorder="0" style={{"width": "100%", height: "100vh"}} src="https://lottie.host/embed/67405d4e-3b75-49d6-bd54-1d19f9a01f5a/eSgTRHdYvg.json"></iframe>
      </div>
    );
  }

  // Safeguard: Check if recommended_sets_and_reps and advice_and_insights exist
  const recommendedSetsAndReps = data.recommended_sets_and_reps || [];  
  const adviceAndInsights = data.advice_and_insights || [];
  return (
    <div>
      <h1>FitGPT</h1>   
      <br></br>

      {/* Display Workout Name */}
      <div>
        <h2>{data.workout_name}</h2>
      </div>
      <br></br>

      {/* Display Display Text */}
      <div>
        <h3>{data.display_text}</h3>
      </div>
      <br></br>

      <div>
        <h2>Workouts</h2>
      </div>



      {/* Recommended Sets and Reps */}
      {recommendedSetsAndReps.length > 0 ? (
        recommendedSetsAndReps.map((exercise, index) => (
          <div key={index}>
            <h3>{exercise.exercise}</h3>
            <table className="workout-table">
              <thead>
                <tr>
                  <th>Sets/Duration</th>
                  {exercise.sets_and_reps[0].split('x').length > 1 && <th>Weight</th>}
                </tr>
              </thead>
              <tbody>
                {exercise.sets_and_reps.map((set, idx) => (
                  <tr key={idx}>
                    <td>{set.split(" x ")[0]}</td>
                    {exercise.sets_and_reps[0].split('x').length > 1 && <td>{set.split(" x ")[1]}</td>}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))
      ) : (
        <p>No recommended sets and reps available.</p>
      )}

      {/* Display Overall Analysis and Body Measurement Insight */}
      <div style={{ display: 'flex', marginTop: '20px' }}>
        <div className="card" style={{ marginRight: '10px', flex: '1' }}>
          <h3>Overall Analysis</h3>
          <p>{data.feedback_on_previous_data?.overall_analysis || "No analysis available."}</p>
        </div>
        <div className="card" style={{ flex: '1' }}>
          <h3>Body Measurement Insight</h3>
          <p>{data.feedback_on_previous_data?.body_measurement_insight || "No body measurement insight available."}</p>
        </div>
      </div>
      <div>
      <img
                
                  src={`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/${data.image}`}
                 
                  width="150"
                  style={{ marginRight: '10px' }} // Space between images
                />
      </div>

      {/* Display Advice and Insights as Cards */}
      <div style={{ marginTop: '20px' }}>
        {adviceAndInsights.length > 0 ? (
          adviceAndInsights.map((advice, index) => (
            <div key={index} className="advice-card" style={{ marginBottom: '10px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
              <h4>Advice #{index + 1}</h4>
              <p>{advice}</p>
            </div>
          ))
        ) : (
          <p>No advice or insights available.</p>
        )}
      </div>
    </div>
  );
};

export default FitGPT;
