import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  JioTranslate,
  JioTranslateProvider,
  DevTools,
  LanguageDetector,
  BackendFetch,
} from "@jiotranslate/react-beta";
import "./index.css";
import App from "./App.tsx";
export const jt = JioTranslate()
  .use(DevTools())
  .use(LanguageDetector())
  .init({
    defaultLanguage: "en",
    fallbackLanguage: "en",
    apiUrl: import.meta.env.VITE_APP_JIOTRANSLATE_API_URL,
    apiKey: import.meta.env.VITE_APP_JIOTRANSLATE_API_KEY,
    staticData: {
      en: { hi: "hello" },
      hi: { hi: "namaskar" },
    },
  });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <JioTranslateProvider jioTranslate={jt}>
      <App />
    </JioTranslateProvider>
  </StrictMode>
);
