import { useState } from 'react';

const Button = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>

const Header = ({text}) => <h1>{text}</h1>

const StatisticLine = ({text, count}) => <p>{text} {count}</p>

const Statistics = ({good, neutral, bad}) => {
  const getTotal = () => good + bad + neutral;
  const getAverage = () => {
    return (good * 1 - bad * 1) / getTotal();
  };
  const getPositive = () => `${(good / getTotal()) * 100}%`;
  
  if (getTotal() > 0) {
    return (
      <div>
        <StatisticLine text='good' count={good} />
        <StatisticLine text='neutral' count={neutral} />
        <StatisticLine text='bad' count={bad} />
        <StatisticLine text='total' count={getTotal()} />
        <StatisticLine text='average' count={getAverage()} />
        <StatisticLine text='positive' count={getPositive()} />
      </div>
    )
  } else {
    return (
      <p>No feedback is given</p>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleNeutral = () => setNeutral(neutral + 1);
  const handleGood = () => setGood(good + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <div>
      <Header text='give feedback' />
      <Button text='good' handleClick={handleGood} />
      <Button text='neutral' handleClick={handleNeutral} />
      <Button text='bad' handleClick={handleBad} />
      <Header text='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
