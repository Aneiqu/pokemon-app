import './App.css';
import Body from './Body/Body';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <div className="App">
      <Body/>
        <ToastContainer pauseOnHover={false} pauseOnFocusLoss={false}/>
    </div>
  );
}

export default App;
