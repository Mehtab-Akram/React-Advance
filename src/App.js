import logo from './logo.svg';
import './App.css';
import {StyleRoot} from 'radium';
// import Form_PreFilled from './Forms/Form_PreFilled';
// import Json_Schema from './Forms/Json_Schema';
// import Events from './Events';
import AddOnAnimations from './Animations/ReactAddOnAnimations';
import RadiumStyles from './Styles/RadiumStyles';
function App() {
  return (
    <StyleRoot>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> React Advance concepts</p>
        <RadiumStyles/>
        <p></p>
      </header>
    </div>
    </StyleRoot>
  );
}

export default App;
