import React from 'react';
import classes from './App.module.css'
import Layout from './components/Layout/Layout';
import HomePage from './container/HomePage';

function App() {
  return (
    <div>
      <Layout>
        <HomePage />
      </Layout>
    </div>
  );
}

export default App;
