import type { Component } from 'solid-js';
import { Route, Router, Routes } from "solid-app-router";

import logo from './logo.svg';
import styles from './App.module.css';

import { TopPage } from './pages/Top';

const App: Component = () => {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" component={TopPage} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
