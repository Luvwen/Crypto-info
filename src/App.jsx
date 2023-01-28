import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Coin } from './components/Coins/Coin';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Coin />} path="/coins/:id" />
            </Routes>
        </>
    );
}

export default App;
