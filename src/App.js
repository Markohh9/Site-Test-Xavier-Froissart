import '../src/sass/index.scss';
import PageAccueil from './pages/PageAccueil';

import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<PageAccueil />} />

      </Routes>
    </div>
  );
}

export default App;
