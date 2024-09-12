import React, { useState } from 'react';
import { useSignInMutation } from '../api/ProductsApi';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signIn] = useSignInMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signIn({ email, password }).unwrap();
      console.log('Signed in:', response);
      alert('Signed in successfully!');
    } catch (err) {
      console.error('Sign-in error:', err);
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
