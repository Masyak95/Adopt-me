import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return <div>
    <h1>Adopt me!</h1>
    <Pet name="Luna" animal="dog" breed="Havenese"/>
  </div>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
