import React, { useState } from 'react';
import Section from "./Section/Section";
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = (click) => {
    switch (click) {
      case 'good':
        setGood((prevState) => prevState + 1);
        break;
      case 'neutral':
        setNeutral((prevState) => prevState + 1);
        break;
      case 'bad':
        setBad((prevState) => prevState + 1);
        break;
      
      default:
        return;
    }
  }
    const countTotalFeedback = () => {
    const total = good + neutral + bad;
      return total;
    };
    const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const percentage = Math.round((100 / total) * good);
    return percentage;
    }
  const options = ["good", "neutral", "bad"];
    return (
      <>
    <Section title='Please leave feedback'>
        <FeedbackOptions
        options={options}
        onClick={addFeedback}>
        </FeedbackOptions>
        </Section>
          <Section title="Statistic">
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
      <Notification message="There is no feedback"/>
          )}
        </Section>
      </>
    );
};
export default App;