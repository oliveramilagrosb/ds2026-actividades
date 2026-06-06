import { NavbarPixi } from './components/NavbarPixi';
import { Home } from './pages/Home';

function App() {
  return (
    <div style={{
      backgroundColor: '#fcfbfe',
      minHeight: '100vh',
      width: '100%',  
      margin: 0,
      padding: 0,
      paddingBottom: '3rem'
      }}>
      <NavbarPixi />
      <Home />
    </div>
  );
}

export default App; 