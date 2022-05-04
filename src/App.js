import "./App.css";
import Announcements from "./components/announcements/Announcements";
import Checklist from "./components/checklist/Checklist";
import ShoppingList from "./components/shoppinglist/ShoppingList";
import BottomNav from "./components/navs/BottomNav";

import AppIcon from "./icons/grape.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={AppIcon} alt="logo" />
        <nav id="user-nav">
          <h4>Manager</h4>
          <h4>Employee1</h4>
          <h4>Employee2</h4>
          <h4>Employee3</h4>
          <h4>Employee4</h4>
        </nav>
      </header>

      <Announcements />
      <section>
        <h2>Checklist</h2>
        <Checklist />
      </section>
      <section>
        <h2>Shopping List</h2>
        <ShoppingList />
      </section>

      <BottomNav />
    </div>
  );
}

export default App;
