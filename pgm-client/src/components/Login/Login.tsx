import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

function Login() {
  return (
    <>
      <Header />
      <section>
        <p>key pair</p>
        <input />
        <p>make sure to keep your keypair in a safe place!</p>
        <p>don’t have a key pair?</p>
        <Link to="/">generate keypair</Link>
        <button type="submit">login</button>
        <Link to="/profile">start messaging</Link>
      </section>
      <Footer />
    </>
  );
}

export default Login;
