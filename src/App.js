import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1 style={{ fontWeight: 'bold' }}>See my showcase</h1>

      <br />
      <Card>
        <Col>
          <Image />
        </Col>
        <Col>
          <h2>Sequeeze Net</h2>
        </Col>
      </Card>
    </div>
  );
}

export default App;
