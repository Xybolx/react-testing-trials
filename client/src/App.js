import React, { Suspense } from 'react';
import TeacherView from './components/TeacherView';
import FizzBuzz from './components/FizzBuzz';
import './App.css';


// lazy imports
const Counter = React.lazy(() => (
  import('./components/Counter')
  ));
  
  const Toggler = React.lazy(() => (
    import('./components/Toggler')
    ));
    
    const WordArray = React.lazy(() => (
      import('./components/WordArray')
      ));
      
      const App = () => {
        return (
    <div className="App">
        <TeacherView />
        <FizzBuzz />
      <header className="App-header">
      <Suspense fallback={"Loading..."}>
          <Toggler />
          <Counter />
          <WordArray />
        </Suspense>
        <h1 className="mt-3">Learn React</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://reactjs.org
        </a>
      </header>
    </div>
  );
}

export default App;
