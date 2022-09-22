import {
  useRoutes,
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

//imports from folders
import Login from './pages/login/login.page';
import Dashboard from './pages/dashboard/dashboard.page';
import Film from './pages/film/film.page';
import Starships from './pages/starships/starships.page';
import Starship from './pages/starship/starship.page';
import Species from './pages/species/species.page';
import Specie from './pages/specie/specie.page';
import People from './pages/people/people.page';
import Person from './pages/person/person.page';

function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Login />} />

          <Route path='/dashboard' element={<Dashboard />} />

          <Route path='/film/:id' element={<Film />} />

          <Route path='/starships' element={<Starships />} />

          <Route path='/starships/:id' element={<Starship />} />

          <Route path='/species' element={<Species />} />

          <Route path='/species/:id' element={<Specie />} />

          <Route path='/people' element={<People />} />

          <Route path='/people/:id' element={<Person />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
