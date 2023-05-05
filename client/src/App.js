import React from 'react';
import Header from './components/Header'
import Generator from './components/Generator'
import List from './components/List'

export default function App() {
  const [count, setCount] = React.useState(0);

  function incrementCount() {
    setCount(prevCount => prevCount + 1);
  }
  return (
    <main className="main--container">
      <Header />
      <Generator count={count} onIncrement={incrementCount} />
      <List count={count} />
    </main>
  )
}