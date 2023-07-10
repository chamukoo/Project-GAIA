import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import LearningCourse from "./pages/LearningCourse";
import AboutUs from "./pages/AboutUs";
import SucculentCourse from "./pages/SucculentCourse";
import HerbalCourse from "./pages/HerbalCourse";
import FlowerCourse from "./pages/FlowerCourse";
import FernCourse from "./pages/FernCourse";
import Quiz from "./pages/Quiz";
import Quiz1 from "./pages/Quiz1";
import ScoreReveal from "./pages/ScoreReveal";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/learning-course":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/succulent-course":
        title = "";
        metaDescription = "";
        break;
      case "/herbal-course":
        title = "";
        metaDescription = "";
        break;
      case "/flower-course":
        title = "";
        metaDescription = "";
        break;
      case "/fern-course":
        title = "";
        metaDescription = "";
        break;
      case "/quiz1":
        title = "";
        metaDescription = "";
        break;
      case "/quiz":
        title = "";
        metaDescription = "";
        break;
      case "/score-reveal":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/learning-course' element={<LearningCourse />} />
      <Route path='/about-us' element={<AboutUs />} />
      <Route path='/succulent-course' element={<SucculentCourse />} />
      <Route path='/herbal-course' element={<HerbalCourse />} />
      <Route path='/flower-course' element={<FlowerCourse />} />
      <Route path='/fern-course' element={<FernCourse />} />
      <Route
        path='/quiz-page'
        element={<Quiz category={localStorage.getItem("category")} />}
      />
      <Route path='/score-reveal' element={<ScoreReveal />} />
    </Routes>
  );
}
export default App;
