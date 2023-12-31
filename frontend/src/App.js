import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="">
      <Header />
      <main className="pt-16 bg-slate-400 min-h-[calc(100vh)]">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
