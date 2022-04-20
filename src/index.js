import "./index.css";
import App from "./App";
import { createRoot, hydrateRoot } from "react-dom/client";

// const rootElement = document.getElementById("root");
// if (rootElement.hasChildNodes()) {
//     const root = ReactDOM.hydrateRoot(rootElement);
//     root.hydrate(<App />);
// } else {
// const root = ReactDOM.createRoot(rootElement);
// root.render(<App />);
// }

const container = document.getElementById("root");
if (container.hasChildNodes()) {
    hydrateRoot(container, <App tab='home' />);
} else {
    const root = createRoot(container);
    root.render(<App />);
}
