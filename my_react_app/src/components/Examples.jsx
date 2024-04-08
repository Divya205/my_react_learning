import { useState } from "react";
import TabButton from "./TabButton.jsx";
import { EXAMPLES } from "../data.js";
import Tabs from "./Tabs.jsx";


export default function Examples(){
    const [selectedTopic, setSelectedTopic] = useState();
  let tabContent="please select a button";
  const handleSelect=(selectedButton)=>{
   // console.log(selectedTopic);
   setSelectedTopic(selectedButton);
   console.log(selectedTopic)
    return (
        <Section title="Examples" id="examples">
          <Tabs ButtonContainer="menu"
           buttons={
            <>
           
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
        
 
            </>
          }>
          
          </Tabs>
          
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
    )
}
}