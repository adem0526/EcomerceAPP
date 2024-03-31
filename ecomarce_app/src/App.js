import logo from './logo.svg';
import './App.css';
import LoginForm from './conponents/LoginForm/loginform'; // Assurez-vous d'importer le composant avec la première lettre en majuscule

function App() {
  return (
    <div>
      <LoginForm /> {/* Utilisez LoginForm au lieu de loginform */}
    </div>
  );
}

export default App;
