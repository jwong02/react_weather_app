import "./App.css";
import Engine from "./Engine";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Engine />
        <Weather />
      </div>
      <footer>
        {" "}
        This project was coded by Janet Wong and is {""}
        <a
          href="https://github.com/jwong02/react-weather-application"
          target="_blank"
        >
          open-sourced on GitHub.
        </a>
      </footer>
    </div>
  );
}
