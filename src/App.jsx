import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Coin } from './components/Coins/Coin';
import { Navbar } from './components/Navbar/Navbar';
import { Favorites } from './components/Favorites';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Coin />} path="/coins/:id" />
                <Route element={<Favorites />} path="/favorites" />
            </Routes>
        </>
    );
}

export default App;
