

import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
import { useState } from "react";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

export default function App() {
  const [screen, setScreen] = useState("welcome");
  ...
  link.download = "informe-revive.pdf";
  link.click();
}
