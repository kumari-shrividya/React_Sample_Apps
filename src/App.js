import logo from './logo.svg';
import './App.css';
import List from './List'
import CategoryList from './CategoryList'
import MultiLevelMenu from './MultiLevelMenu'
import DropDown from './DropDownList'
import { ThemeForm } from './ThemeForm';
import {ThemeProvider} from './ThemeProvider'
import Child from './ChildToParent.jsx';
 import CounterRedux from './CounterRedux';
///
function App() {

  return (
    <div className="App">
      
      <div>
        {/* <List/> */}
        {/* <CategoryList/>
        <MultiLevelMenu/> */}
        {/* <DropDown/> */}
        <ThemeProvider >
        <ThemeForm/>
        </ThemeProvider>
        {/* <Child/> */}

        <CounterRedux/>
       
      </div>

    </div>
  );
  
}

export default App;
