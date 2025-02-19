<h1 align="center" style="border-bottom: none">
    <b>
        <a href="https://localization-platform.sit.translate.jio">JioTranslate for React</a><br>
    </b>
    The JioTranslate i18n SDK for React
    <br>
</h1>

# What is JioTranslate for React?

React integration library of JioTranslate. This package makes it super simple to add i18n to your React app!

## Installation

```
npm install @jiotranslate/react-beta
```

Then use the library in your app:

```typescript jsx
import {
  JioTranslate,
  JioTranslateProvider,
  DevTools,
  LanguageDetector,
} from "@jiotranslate/react-beta";

const jt = JioTranslate()
  .use(DevTools())
  .use(LanguageDetector())
  .init({
    defaultLanguage: 'en',
    fallbackLanguage: 'en',
    apiUrl: import.meta.env.VITE_APP_JIOTRANSLATE_API_URL,
    apiKey: import.meta.env.VITE_APP_JIOTRANSLATE_API_KEY,
    staticData: {
      en: () => import('./i18n/en.json').then((m) => m.default),
      es: () => import('./i18n/es.json').then((m) => m.default),
      cs: () => import('./i18n/cs.json').then((m) => m.default),
      fr: () => import('./i18n/fr.json').then((m) => m.default),
      de: () => import('./i18n/de.json').then((m) => m.default),
      pt: () => import('./i18n/pt.json').then((m) => m.default),
      da: () => import('./i18n/da.json').then((m) => m.default),
    },
  });


 <JioTranslateProvider jioTranslate={jt}>
  <Your app components>
 </JioTranslateProvider>
```

## Providing Data from backend

Provide static localization data in production mode or if you want to use it without JioTranslate platform.

```typescript jsx
import {
  BackendFetch
} from '@jiotranslate/react-beta';

const jt = JioTranslate()
   .....
  .use(BackendFetch({
      prefix: "api-url",
      headers: { authorization: "Auth token" }, //optional
    }))
  ....
  .init({
   defaultLanguage: "en",
    fallbackLanguage: "en",
    availableLanguages: ["en", "hi"],

  });


 <JioTranslateProvider jioTranslate={jt}>
  <Your app components>
 </JioTranslateProvider>
```

To translate texts using JioTranslate React integration, you can use `JioTMS` component or `useTranslate` hook.

### JioTMS component

```typescript jsx
import { JioTMS } from "@jiotranslate/react-beta";

...

<JioTMS>translation_key</JioTMS>
```

or

```typescript jsx
<JioTMS keyName="translation_key">Default value</JioTMS>
```

### useTranslate hook

```javascript
import { useTranslate } from "@jiotranslate/react-beta";

...

const { jioTMS } = useTranslate();

...

jioTMS("key_to_translate")
```

## Prerequisites

1. An existing React project
2. An API key obtained from [JioTranslate Platform](https://localization-platform.sit.translate.jio).

## Why use JioTranslate?

It saves you a significant amount of time on localization tasks. It also ensures your software is perfectly translated.

### Features

- Comprehensive localization solution tailored for your JavaScript application 🙌
- Seamless in-context localization right from the start 🎉

- Translation management system 🎈
