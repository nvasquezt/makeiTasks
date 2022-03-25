import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import CharacterPage from './components/RickandMorty/CharacterPage';
import RickandMorty from './components/RickandMorty/RickandMorty';
import Salary from './components/Salary/Salary';
import AboutPage from './pages/About';
import Content from './pages/Content';
import HomePage from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <nav className="appNavigation">
        <NavLink
          to="/"
          style={({ isActive }) => ({
            margin: '1rem',
            color: isActive ? 'Green' : 'orange',
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            margin: '1rem',
            color: isActive ? 'Green' : 'orange',
          })}
        >
          About
        </NavLink>
        <NavLink
          to="/content"
          style={({ isActive }) => ({
            margin: '1rem',
            color: isActive ? 'Green' : 'orange',
          })}
        >
          Content
        </NavLink>
        <NavLink
          to="/salary"
          style={({ isActive }) => ({
            margin: '1rem',
            color: isActive ? 'Green' : 'orange',
          })}
        >
          Salary
        </NavLink>
        <NavLink
          to="/rickandmorty"
          style={({ isActive }) => ({
            margin: '1rem',
            color: isActive ? 'Green' : 'orange',
          })}
        >
          Rick and Morty
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/content" element={<Content />} />
        <Route path="/salary" element={<Salary />} />
        <Route path="/rickandmorty" element={<RickandMorty />} />
        <Route path="/characterpage/:id" element={<CharacterPage />} />

        <Route
          path="*"
          element={(
            <main style={{ padding: '1rem' }}>
              <p>Nop, nada que hacer... 404</p>
            </main>
          )}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
