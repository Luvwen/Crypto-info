import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Coin } from './components/Coins/Coin';
import { Navbar } from './components/Navbar/Navbar';

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
