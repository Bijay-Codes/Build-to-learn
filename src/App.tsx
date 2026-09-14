import MorseCode from "./Problems/MorseCode/MorseCode";
import Intro from "./pages/Intro";
import { SvgAnim } from "./Problems/SVGPractice/SVG";
import { Navbar } from "./components/Navbar";
import { Problems } from "./components/RenderProblems";
import { pagePaths } from "./pages/Pages";
import { BrowserRouter } from "react-router";
import { Routes, Route } from "react-router";
import ActionStateDemo from "./Problems/ReactPractice/UseActionState";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <section className="p-8">
        <Routes>
          <Route path={pagePaths.home} element={<Problems />} />
          <Route path={pagePaths.intro} element={<Intro />} />
          <Route path={pagePaths.morseCodeTranslator} element={<MorseCode />} />
          <Route path={pagePaths.svgpractice} element={<SvgAnim />} />
          <Route path={pagePaths.reactActionState} element={<ActionStateDemo />} />
        </Routes>
      </section>
    </BrowserRouter >
  )
}

export default App;
