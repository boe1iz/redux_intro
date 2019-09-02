import React from 'react';
import Counter from './components/Counter';
import Counter2 from './components/Counter2';

function App() {
  return (
    <div>
      <h1>Counter with only mapStateToProps & mapDispatchToProps</h1>
      <Counter />
      <h1>Counter with only mapStateToProps</h1>
      <Counter2 />
    </div>
  );
}

export default App;
