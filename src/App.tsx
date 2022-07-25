import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

import { AppRoutes } from "./routes";

const App: Component = () => {
  return (
    <>
      <AppRoutes />
    </>
  );
};

export default App;
