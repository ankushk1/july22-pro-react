import logo from "./logo.svg";
import "./App.css";
import FirstComp from "./Components/FirstComp";
import SecondComp from "./Components/SecondComp";
import StateComp from "./Components/StateComp";
import StateComp2 from "./Components/StateComp2";
import PropsComp from "./Components/PropsComp";
import ComponentA from "./Components/Context/ComponentA";
import { createContext } from "react";
import FormComp from "./Components/FormComp";

function PrintSome() {
  return <div>Some Random Text</div>;
}

export const nameContext = createContext(null);

function App() {
  return (
    <div className="App">
      {/* <FirstComp/> */}
      {/* <SecondComp/> */}
      {/* <StateComp2/> */}
      {/* <PropsComp from ="App.js" num={20}></PropsComp> */}
      {/* <nameContext.Provider value={"SAM"}>
        <ComponentA />
      </nameContext.Provider> */}

      <FormComp/>
    </div>
  );
}

export default App;
