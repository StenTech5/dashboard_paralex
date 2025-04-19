// import { useState } from 'react';
// import './App.css';
// import Header from './components/Header';
// import Home from './components/Home';
// import Sidebar from './components/Sidebar';

// function App() {

//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

//   const OpenSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle);
//   }
//   return (
//     <div className="grid-container">
//       <Header OpenSidebar = {OpenSidebar} />
//       <Sidebar openSidebarToggle = {openSidebarToggle} OpenSidebar = {OpenSidebar} />
//       <Home />
//     </div>
//   );
// }

// export default App;
// src/App.jsx
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;


