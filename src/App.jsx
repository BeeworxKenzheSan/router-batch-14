import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import { About } from "./pages/About";
import { Contacts } from "./pages/Contacts";
import { NotFoundPage } from "./pages/404";
import { Navbar } from "./layouts/Navbar";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Main />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="contacts/:hasan-aka" element={<Contact />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
