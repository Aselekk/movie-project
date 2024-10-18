import './App.css';
import { Routes, Route } from "react-router-dom";
import {Navbar} from "./components/Navbar";
import {MoviesPage} from "./pages/MoviesPage";
import {MoviePage} from "./pages/MoviePage";
import {Auth} from "./context/Auth";
import {useState} from "react";

function App() {
    const [token, setToken] = useState(localStorage.getItem('idToken'))

    return (
        <Auth.Provider value={{ token, setToken }}>
            <div className="App" >
                <Navbar />
                <Routes>
                    <Route path="/movies" element={<MoviesPage />} />
                    <Route path="/movies/:id" element={<MoviePage />} />
                </Routes>
            </div>
        </Auth.Provider>
    );
}

export default App;
