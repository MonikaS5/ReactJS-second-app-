import './App.css';
import Appstyle from './components/Appstyle';
import CSSinJS from './components/CSSinJS';
import CssProps from './components/CssProps';
import CssStyle from './components/CssStyle';

// /////////////////////Global styled components
import { CustomButton, GlobalStyle } from './components/styledComponents';


// /////////////////////
function App() {
  return (
    <div className="App">
     <CssStyle/>

     <CssProps primary="primary"/>

     <Appstyle/>
     <CSSinJS/>

     <div> 
      {/* ------Global styled components------- */}
    <GlobalStyle/>
      
     
        <h1 style={{ color: "green" }}>Global Styling-Styled components</h1>
        <h2>React Global Styling using styled-components</h2>
        
        <CustomButton type="button">Click Me</CustomButton>
        <CustomButton type="button" outline>Click Me</CustomButton>
     </div>
    </div>
  );
}

export default App;
