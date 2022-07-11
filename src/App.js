import React from "react"
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemCount from "./components/ItemCount/ItemCount";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting={"mensaje de ok"}/>
      <div>
          <h2>
            Este es mi ItemCount
          </h2>
          <ItemCount initial={1} maxValue={8} />
        </div>
    </div>
  );
}

export default App;