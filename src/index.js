import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

if (localStorage.getItem('Todos') === null) {
    localStorage.setItem('Todos', JSON.stringify([]));
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
