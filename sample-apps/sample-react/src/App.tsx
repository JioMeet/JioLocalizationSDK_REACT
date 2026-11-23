import "./App.css";
import { JioTMS, useTranslate } from "@jiotranslate/react-beta";
import { jt } from "./main";

function App() {
  const { jioTMS } = useTranslate();
  const handleClick = () => {
    const currentLanguage = jt.getLanguage();
    console.log(currentLanguage);
    jt.changeLanguage(currentLanguage === "en" ? "hi" : "en");
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
