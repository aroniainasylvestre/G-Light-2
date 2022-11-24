import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import Movies from "./pages/Movies/Movies";
import Wishlist from "./pages/Wishlist/Wishlist";

const App: FC = () => {
    return (
        <div className="app">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/moviedetail/:id" element={<MovieDetail />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
