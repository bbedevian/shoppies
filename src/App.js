import React from 'react';
import './App.css';
import Search from './components/search/search.component';
import SelectedContainer from './components/selected-container/selected-container.component';
import Directory from './components/directory/directory.component';

function App() {
  return (
    <div className="App">
      <SelectedContainer/>
      <Search/>
      <Directory/>
    </div>
  );
}

export default App;
