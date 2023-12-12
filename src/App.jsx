import dashboard from "./assets/illustration-dashboard.png";
import logo from "./assets/logo.svg";
import "./App.css";
import { useState } from "react";

function Form() {
  const [email, setEmail]= useState('Your email address...');
  const [error, setError] = useState('');
  
  const validateEmail = (input) => {
   
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);

    if (!isValid) {
      setError('Please provide a valid email address');
    } else {
      setError('');
    }
    return isValid;
  };

  const handleInputClick = () => {
    setEmail('');
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateEmail(email)) {
      console.log('email sent');
    }
  };

  return (
    <form onSubmit ={handleSubmit}>
      <label className="label">
        <input className={error ? 'input-error' : ''} name="email" value={email}  onClick={handleInputClick} onChange={e => setEmail(e.target.value)}/>
        {error && <p className="error">{error}</p>}
      </label>
      
      <button type="submit">Notify me</button>
     
    </form>
  );
}

function App() {
  return (
    <>
      <main>
        <img className="logo" src={logo}></img>
        <p className="title">
          We are launching <strong>soon!</strong>
        </p>
        <p>Subscribe and get notified</p>

        <Form />
        <img className="dashboard" src={dashboard} />
      </main>
      <footer className='footer'>
        <section className="social-media">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
        </section>
        <p>&copy; Copyright Ping. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
