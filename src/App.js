
import './App.css';
import { Banner } from './component/Banner';
import { NavBar } from './component/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Skills } from './component/skills';
import { Projects } from './component/Projects';
import { Footer } from './component/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
