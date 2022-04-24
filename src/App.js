import "./App.css";
import Announcements from "./components/announcements/Announcements";
import Checklist from "./components/checklist/Checklist";
import ShoppingList from "./components/shoppinglist/ShoppingList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Half-Peach Bakery</h1>
      </header>
      
      <Announcements />
      <section><h2>Checklist</h2><Checklist /></section>
      <section><h2>Shopping List</h2><ShoppingList /></section>
      
    </div>
  );
}

export default App;
