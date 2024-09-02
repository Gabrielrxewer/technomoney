import React from 'react';
import StockGrid from './components/StockGrid/StockGrid';

const App: React.FC = () => {
  return (
    <div>
      <h1>Technomoney - Dados 3x3 Meses</h1>
      <StockGrid />
    </div>
  );
};

export default App;
