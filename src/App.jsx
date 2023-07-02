import ButtonPage from "./components/ButtonPage";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageSoon from "./components/PageSoon";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-row">
        <section>
          <Header />
        </section>

        <section>
          <Routes>
            <Route path="buttons" element={<ButtonPage />} />
            <Route path="soon" element={<PageSoon />} />
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
