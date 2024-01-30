import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import Header from './components/Header';
import { AuthProvider } from './context/AuthContext';


function App() {
  return (
    <div className=''>
      <Router>
        <AuthProvider>
          <Header/>
          <PrivateRoute path="/" exact Component={HomePage} />
          <Routes>          
            <Route Component={LoginPage} path='/login'/>
          </Routes>
        </AuthProvider>
      </Router>
  </div>
  );
}

export default App;
