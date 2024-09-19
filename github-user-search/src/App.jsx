import React from 'react';
import Search from './components/Search';

function App() {
  return (
    <div className='container h-screen w-screen bg-gray-500 mx-auto '>
      <h1 className='font-bold text-gray-50 text-center pt-3'>GitHub User Search</h1>
      <Search />
    </div>
  );
}

export default App;
