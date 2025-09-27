// React-> React is a library of a js. It is used to build ui.It is develope by facebook,it is make spa beacuse it is fast work or not reload the browser.the current version is i 19.
// it is large community and high demand in job market.it is easy to learn;


// jsx-> it is javascript syntax extension or js xml . it allow you to write html code inside the  js .
      // the jsx write into the curly bracket.
// liabray-> in liabrary user can decide the file structure or program flow ;
// framework-> it is own decide the flow of file structure or program    ;

// export-> when you send the componet to one file to another file use export keyword;
// named export-> it is used for child component to export one file to another;
// default export-> it used for primary component.beacause only one component is used export default;
//import-> it is used to import the component from another file;

import ArrayObject from "./Array_object";
import Demo from "./Components";
import Propsdata from "./Props";
import DemoState from "./State";
import Loop from "./Loop";
import Userdata from "./Userdata";
import Wrapper from "./Wrapper";
// import Sideeffect from "./Hooks";
import HandleForm from "./USEActionsate";
import Reducer from "./Reducer";
import HandleReducer from "./Reducer";

export default function App()
{
  return(
    <>
    {/* <Demo />
    <DemoState /> */}

{/* <ArrayObject /> */}

{/* <Userdata />
<Propsdata /> */}
{/* <Wrapper />
<Propsdata /> */}

{/* <Loop />
<Sideeffect /> */}
{/* <HandleForm /> */}

<HandleReducer />

    </>
  )
}

