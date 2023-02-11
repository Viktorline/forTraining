import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Card>
      <Card.Body>
        <Card.Title>Title</Card.Title>
        <Card.Text>Text</Card.Text>
      </Card.Body>
    </Card>
  </React.StrictMode>,
);

reportWebVitals();
