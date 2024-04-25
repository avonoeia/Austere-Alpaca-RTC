import './App.css';
import { Route } from 'react-router-dom';

import chatpage from './pages/chatpage';

function App() {
  return (
    <div className="App">
      <Route path='/chats' component = {chatpage} />
    </div>
  );
}

export default App;
