import logo from "./logo.svg";
import "./App.css";
import FirstComp from "./Components/FirstComp";
import SecondComp from "./Components/SecondComp";
import StateComp from "./Components/StateComp";
import StateComp2 from "./Components/StateComp2";
import PropsComp from "./Components/PropsComp";
import ComponentA from "./Components/Context/ComponentA";
import { createContext, useState } from "react";
import FormComp from "./Components/FormComp";
import UseEffectComp from "./Components/UseEffectComp";
import ApiComp from "./Components/ApiComp";
import UseReducer from "./Components/UseReducer";
import UseMemoHook from "./Components/UseMemoHook";
import UseCallbackHook from "./Components/UseCallbackHook";
import Signin from "./Components/Signin";
import CustomApiCall from "./Components/CustomApiCall";

function PrintSome() {
  return <div>Some Random Text</div>;
}

export const nameContext = createContext(null);

function App() {
  const [mount, setMount] = useState(true);

  return (
    <div className="App">
      {/* <FirstComp/> */}
      {/* <SecondComp/> */}
      {/* <StateComp2/> */}
      {/* <PropsComp from ="App.js" num={20}></PropsComp> */}
      {/* <nameContext.Provider value={"SAM"}>
        <ComponentA />
      </nameContext.Provider> */}

      {/* <FormComp/> 
      <br />
      <br />
      <Signin/> */}
      {/* {mount && <UseEffectComp/>}

      <br /><br /><br />
      <button onClick={() => {
        setMount(!mount)
      }}>Mount/Unmount</button> */}
      {/* <ApiComp/> */}
      {/* <UseReducer/> */}
      {/* <UseMemoHook/> */}
      {/* <UseCallbackHook /> */}
      <CustomApiCall/>
    </div>
  );
}

export default App;
