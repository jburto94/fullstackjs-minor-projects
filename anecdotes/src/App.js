import { useState } from 'react';

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Score = ({ votes }) => <p>has {votes} votes</p>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ];

  const [selected, setSelected] = useState(0);
  const [scores, setScores] = useState(Array(anecdotes.length).fill(0));

  const handleSelected = () => setSelected(Math.floor(Math.random() * anecdotes.length));

  const addToScore = () => {
    const newScores = [...scores];
    newScores[selected] += 1;
    setScores(newScores);
  }

  const getBestAnecdote = () => {
    const highestScore = scores.indexOf(Math.max(...scores));
    return anecdotes[highestScore];
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <Score votes={scores[selected]} />
      <Button handleClick={addToScore} text='Vote' />
      <Button handleClick={handleSelected} text='next anecdote' />
      <h1>Anecdote of the Day!</h1>
      <p>{getBestAnecdote()}</p>
    </div>
  )
};

export default App;
