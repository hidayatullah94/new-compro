import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./component";
import { Home, Karier, Kontak, Proyek, Servis, Test } from "./pages";
function App() {
  return (
    <div className=" overflow-x-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servis" element={<Servis />} />
          <Route path="/proyek" element={<Proyek />} />
          <Route path="/karir" element={<Karier />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/test" element={<Test />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
