import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { JioTMS, useTranslate } from "@jiotranslate/react-beta";
import { jt } from "./main";

function App() {
  const [count, setCount] = useState(0);
  const { jioTMS } = useTranslate();
  const handleClick = () => {
    const currentLanguage = jt.getLanguage();
    console.log(currentLanguage);
    jt.changeLanguage(currentLanguage == "en" ? "hi" : "en");
  };
  return (
    <>
      <JioTMS keyName="hi"></JioTMS>
      <div>{jioTMS("hi")}</div>
      <button onClick={handleClick}>change language</button>
    </>
  );
}

export default App;
