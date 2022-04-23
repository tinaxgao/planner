import "./App.css";
import Announcements from "./components/announcements/Announcements";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dashboard</h1>
      </header>
      
      <section><Announcements/></section>
      <section>Checklist</section>
      <section>Shopping List</section>
      
    </div>
  );
}

export default App;
