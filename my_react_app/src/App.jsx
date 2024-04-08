import { useState } from "react";
import reactImg from './assets/react-core-concepts.png';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from "./data.js";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Section from './components/Section.jsx';



const reactDescriptions=['Fundamental', 'Crucial','Core']
function genRandomInt(max){ 
  return Math.floor(Math.random() * (max+1))
}
function Header(){
  return(
  <header>
        <img src={reactImg} alt="Stylized atom"></img>
        <h1>React Essentials</h1>
        <p>
         {reactDescriptions[genRandomInt(2)]} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}



function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  let tabContent="please select a button";
  const handleSelect=(selectedButton)=>{
   // console.log(selectedTopic);
   setSelectedTopic(selectedButton);
   console.log(selectedTopic)
  }

  return (
    <div>
      <Header></Header> 
      <CoreConcepts></CoreConcepts>
  
      <main>
      
        <Section title="Examples" id="examples">
          <menu>
           <TabButton  isSelected={selectedTopic==='components'} 
           onSelect={()=>handleSelect('components')}>
            Components</TabButton>
            <TabButton  isSelected={selectedTopic==='jsx'} 
            onSelect={()=>handleSelect('jsx')}>JSX
            </TabButton>
            <TabButton isSelected={selectedTopic==='props'} 
            onSelect={()=>handleSelect('props')}>
              Props</TabButton>
            <TabButton isSelected={selectedTopic==='state'} 
            onSelect={()=>handleSelect('state')}>
              State</TabButton>
          </menu>

          {!selectedTopic ? <p>Select a topic!</p>: null}
        {selectedTopic? <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
        </div> : null}
        </Section>
 
      </main>
    </div>
  );
  }

export default App;
