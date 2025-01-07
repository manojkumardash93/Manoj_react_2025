import React from "react";
import ReactDOM from "react-dom/client"; // Correct import for ReactDOM in React 18+
 
// const jsxHeading = <h1>Namaste React using JSX!</h1>;
const Title = () => {
    return <h1>Namaste React from JSX</h1>
}

const element = (
    <h1>React Eliment is Here</h1>
);
const HeadingComponet = () =>(
    <div id="container">
    <Title/>
    {element}
    <h1 className = "head">Namaste React from Componet</h1>
    </div>
    
);

const root = ReactDOM.createRoot(document.getElementById("root")); // Create a root for rendering
 
root.render(<HeadingComponet/>); // Render the JSX heading
