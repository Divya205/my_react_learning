import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput";
import Results from "./components/Results.jsx";
function App() {
  const [userInput,setUserInput]=useState({
    initialInvestment : 10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration: 10
});

const inputIsValid= userInput.duration >=1;

function handleChange(inputIdentifier,newValue){
  setUserInput((prevUserInput)=>{
   return{
       ...prevUserInput,
       [inputIdentifier]: +newValue// adding + will make strings into numbers bcz by def all the values accepted are of type string
   }
  });//whn this func executes, any one of those 4 properties will change so remaning prop should not get lost, we need old values also
  } 
//passing same userinput to the same compoenents results and userinput via app component
  return (
    <>
    <Header></Header>
    <UserInput userInput={userInput} onChange={handleChange}></UserInput>
    {!inputIsValid && <p> Please enter valid input date</p>}
    {inputIsValid && <Results input={userInput}></Results>}
    </>
  )
  
}

export default App
