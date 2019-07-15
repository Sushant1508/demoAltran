import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import TabContainer from 'react-bootstrap/TabContainer';

import CustomComponent1 from './components/Page1Component';
import CustomComponent2 from './components/Page2Component';
import CustomComponent3 from './components/Page3Component';




function App() {
  return (
    <div className="App">
      <Tabs defaultActiveKey="tab1">
      <Tab eventKey="tab1" title="Tab 1">
        <CustomComponent1/>
      </Tab>
      <Tab eventKey="tab2" title="Tab2 Timer">
        <CustomComponent2 />
      </Tab>
      <Tab eventKey="tab3" title="Tab 3" >
        <CustomComponent3/>
      </Tab>
    </Tabs>
    </div>
  );
}

export default App;



