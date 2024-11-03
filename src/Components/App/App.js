import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav/Nav.js";
import Mainpg from "./Mainpg/Mainpg.js";
import Sample from "./Sample/Sample.js";
import Skill from "./Skill/Skill.js";
import Error from "./Error/Error.js";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/cv" element={<Mainpg />}></Route>
          <Route path="/skill" element={<Skill />}></Route>
          <Route path="/sample" element={<Sample />}></Route>
          <Route path="/*" element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
