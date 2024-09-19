import React from 'react';
import Search from './components/Search';

function App() {
  return (
    <div>
      <header>
        <h1 className='font-bold text-gray-600'>GitHub User Search</h1>
      </header>
      <main>
        <Search />
      </main>
    </div>
  );
}

export default App;
