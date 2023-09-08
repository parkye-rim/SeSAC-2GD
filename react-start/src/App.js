// import FunctionState from "./components/FunctionState";
// import UseJSX from "./components/UseJSX";
// import FirstPractice from "./components/practice/FirstPractice";
// import FunctionProps from "./components/FunctionProps";
// import ClassState from "./components/ClassState";
// import PracticeProps from "./components/practice/PracticeProps";
import UseScss from "./components/UseScss";

import BasicCss from "./components/BasicCss";
import "./styles/style.scss";
import UseMemoObj from "./components/05_UseMemoOb";
import UseReducer from "./components/07_UseReducer";
import ContextTheme from "./components/08_ContextTheme";
function App() {
  return (
    <div>
      {/* 
      <BasicCss color={"#abecde"} />
      <UseJSX></UseJSX>
      <FirstPractice></FirstPractice>
      <FunctionState></FunctionState>
      <ClassState />
      <FunctionProps name="사과" krPrice={5000} number={10} />
      <PracticeProps /> 
      <UseScss></UseScss>
      <UseMemoObj />
      <UseReducer />
      */}
      <ContextTheme />
    </div>
  );
}

export default App;
