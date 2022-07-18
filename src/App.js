import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import "./styles/styles.css";
function App() {

  return (
    <div>
      <Navbar className="header"/>
      <ItemListContainer greeting={"mensaje de ok"}  />
      <ItemCount/>
    </div>
    
  );
}

export default App;
