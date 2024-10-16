"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import './css/globals.css';
import css from '././css/loginlogout.css';

const Home = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const userID = localStorage.getItem('userId');
    if (userID) {
      router.push('/Home');  // Automatically redirect if the user is already logged in
    }
  }, [router]);

  const handleSignInWithEmail = async () => {
    setIsLoading(true);
    setError('');  // Clear any previous error

    try {
      const response = await axios.post('https://admitbackend.online/login', {
        email,
        password,
      });

      // Extract user ID from the response and store it in localStorage
      const user_id = response.data.user._id;
      localStorage.setItem('userId', user_id);

      // Redirect to Home page after successful sign-in
      router.push('/Home');
    } catch (error) {
      // Handle error and display a message to the user
      const errorMsg = error.response?.data?.error || 'An unexpected error occurred';
      setError(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="ColumnContainer">
        <Image src="/admitLogoT.png" alt="Admit Logo" width={200} height={200} />
        <div>
          <p
          className="title"
          >Explore colleges, win scholarships, and plan your future with Admit!</p>
        </div>
        <input
          className="inputField"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="inputField"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className='error-message'>{error}</p>}
        <button className='button' onClick={handleSignInWithEmail} disabled={isLoading}>
          {isLoading ? 'Logging In...' : 'Login'}
        </button>

        <div>
          <p className="acctText">Don't have an account?</p>
          <Link href="/SignUp" passHref>
            <p className='create-account-link' style={{ textDecoration: 'none' }}>Create an Account</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
