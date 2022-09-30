import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <b className='logo'>SmartMove</b>

      <div className='modal'>
        <br/>
        <div>
        <b>SIGN UP</b>

        </div>
        <input placeholder='Enter Fullname' className="inputs" />
        <input placeholder='Enter Email' className="inputs" />
        <input placeholder='Enter Phone' className="inputs" />
        <input placeholder='Enter Password' className="inputs" /> <br/>
        <input type="button" value='Signup' className="inputs-btn" /> <br/>
      <span style={{cursor:"pointer"}}>OR Login</span>
      <br/><br/>
      </div>

    </div>
  );
}

export default App;
