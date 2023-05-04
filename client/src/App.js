import React from 'react';
import Header from './components/Header'
import Generator from './components/Generator'
import List from './components/List'

export default function App() {
  return (
    <main className="main--container">
      <Header />
      <Generator />
      <List />
    </main>
  )
}