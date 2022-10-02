import { createContext, useState } from 'react';
import './App.css';
import Button from './components/div/Button';

const UserContext = createContext()
function App() {
  const [user, setUser]=useState(" hello")
  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <h1>{`Click Me${user}`}</h1>
        <Button />
      </UserContext.Provider>
     
     
    </div>
  );
}

export default App;
