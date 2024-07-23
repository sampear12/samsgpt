import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';

function App() {
    return (
        <div className="App">
            <Sidebar />
            <MainContent />
        </div>
    );
}

export default App;
