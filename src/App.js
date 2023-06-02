import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <aside class="main-sidebar">
        <section className="main-sidebar">
          <div className="user-panel">
            <div class="pull-left image">
              <img src={img_usr} />
            </div>
            <div class="pull-left info">
              <p>{nome}</p>
            </div>
          </div>
        </section>
      </aside>
    </div>
  );
}

export default App;
