import React, { useState } from 'react';
import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa';
import { auth, facebookProvider } from './config';
import { signInWithPopup } from 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignupForm.css';

function SignupForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Handle form submission logic here
  };

  const handleSocialLogin = (platform) => {
    console.log(`Logging in with ${platform}`);
    if (platform == 'Facebook') {
      signInWithPopup(auth, facebookProvider)
        .then((data) => {
          const user = data.user

          const credential = facebookProvider.credentialFromResult(data);
          const accessToken = credential.accessToken;

        }).catch((err) => {
          alert(err)
        })
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-header bg-primary text-white text-center">
              <h4 className="card-title mb-0">Sign Up</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    className="form-control"
                    id="username"
                    placeholder="Enter username"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block mt-4">
                  Sign Up
                </button>
              </form>
              <div className="social-login mt-4 text-center">
                <p>Or sign up with:</p>
                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => handleSocialLogin('Google')}
                  >
                    <FaGoogle /> Google
                  </button>
                  <button
                    className="btn btn-primary mx-2"
                    onClick={() => handleSocialLogin('Facebook')}
                  >
                    <FaFacebook /> Facebook
                  </button>
                  <button
                    className="btn btn-dark mx-2"
                    onClick={() => handleSocialLogin('GitHub')}
                  >
                    <FaGithub /> GitHub
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignupForm;
