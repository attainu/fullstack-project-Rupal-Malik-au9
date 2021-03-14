import Header from './components/header';
import Navbar from './components/navbar';

import Categories_section from './components/categories_section';
import './App.css';
// import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Categories_section />
      {/* <Register /> */}
    </div>
  );
}

export default App;
