import "@/styles/globals.css";
import {useRouter} from 'next/router'
import { IntlProvider } from "react-intl";
import 'regenerator-runtime/runtime';

import en from "../i18n/en.json";
import zh from "../i18n/zh.json";

const messages = {
  en,
  zh
}

function getDirection(locale) {
  return "ltr";
}
export default function App({ Component, pageProps }) {
  const { locale } = useRouter();
  return (
  <IntlProvider locale={locale} messages={messages[locale]}>
  <Component {...pageProps} dir={getDirection(locale)} />
  </IntlProvider>
  );
}
