import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Footer from "./comp-home/footer";
import ScrollIndicator from "./components/scroll-indicator";

import Home from "./pages/home";

function App() {
    return (
        <div className="App">
            <Home />
            <ScrollIndicator />
        </div>
    );
}

export default App;
