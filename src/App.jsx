import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import { MainMenu, MainPage } from "./pages";

const App = () => {
    return(
    <Router>
        <Routes>
            <Route element={<MainMenu />} path="/">
                <Route element={<MainPage />} path="/" />
            </Route>
        </Routes>
    </Router>
    );
};

export default App