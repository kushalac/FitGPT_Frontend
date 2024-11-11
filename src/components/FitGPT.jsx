import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecommendedSetsAndReps from './RecommendedSetsAndReps';
import TodayWorkoutMessage from './TodayWorkoutMessage';
import PageHeader from './PageHeader';
import AnalysisAndAdvice from './AnalysisAndAdvice';
import Loader from './Loader';
import Questionnaire from './Questionnaire'; // Import the Questionnaire component

const LottieComponent = (
  <iframe frameBorder="0" src="https://lottie.host/embed/669a8cd5-6131-4f2f-992c-b458d2ef10f9/3Unskucum2.json"></iframe>
);

const FitGPT = () => {
  const [showQuestionnaire, setShowQuestionnaire] = useState(true); // State toggle for the questionnaire
  const [loading, setLoading] = useState(false); // Loading state for API call
  const [data, setData] = useState(null);

  const handleQuestionnaireSubmit = (formData) => {
    setLoading(true); // Show loader during API call
    // Make API call with questionnaire data
    axios
      .post('http://localhost:8000/api/heart-data', formData, {
        headers: {
          'Content-Type': 'application/json', // Ensure the backend recognizes the request body
        },
        withCredentials: true, // Include credentials if needed for cookies or authentication
      })
      .then((response) => {
        setData(response.data);
        setShowQuestionnaire(false); // Move to the main component
      })
      .catch((error) => {
        console.error('Error submitting questionnaire:', error);
      })
      .finally(() => {
        setLoading(false); // Hide loader
      });
  };

  if (loading) {
    return <Loader />;
  }

  if (showQuestionnaire) {
    return <Questionnaire onSubmit={handleQuestionnaireSubmit} />;
  }

  if (!data) {
    return <Loader />;
  }

  // Safeguard: Check if recommended_sets_and_reps and advice_and_insights exist
  const recommendedSetsAndReps = data.recommended_sets_and_reps || [];
  const adviceAndInsights = data.advice_and_insights || [];

  return (
    <div>
      <div style={{ paddingBottom: '50px' }}>
        <PageHeader
          subtitle="Your Personalized Workout Plan"
          workoutName="FitGPT"
          workoutFocus={data.workout_name}
        />

        <TodayWorkoutMessage message={data.display_text} LottieComponent={LottieComponent} />

        <RecommendedSetsAndReps recommendedSetsAndReps={recommendedSetsAndReps} />

        <AnalysisAndAdvice
          analysis={data.feedback_on_previous_data?.overall_analysis}
          insights={data.feedback_on_previous_data?.body_measurement_insight}
          advices={adviceAndInsights}
        />
      </div>
    </div>
  );
};

export default FitGPT;
