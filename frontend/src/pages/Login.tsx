import React, { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{ background: '#f0f2f5' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5 col-sm-8 col-11">

            {/* Header */}
            <div className="text-center mb-4">
              <div className="mb-3">
                <span style={{ fontSize: 40 }}>🔐</span>
              </div>
              <h2 className="fw-bold text-dark">Welcome Back</h2>
              <p className="text-muted">Sign in to your account</p>
            </div>

            {/* Card */}
            <div className="card shadow-sm border-0 rounded-3">
              <div className="card-body p-4">

                {error && (
                  <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <i className="me-2">⚠️</i>{error}
                    <button type="button" className="btn-close" onClick={() => setError('')}></button>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Email address</label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Enter your email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-semibold">Password</label>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      placeholder="Enter your password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg w-100 fw-semibold"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <><span className="spinner-border spinner-border-sm me-2" role="status"></span>Signing in...</>
                    ) : 'Sign In'}
                  </button>
                </form>

              </div>
            </div>

            {/* Footer link */}
            <p className="text-center mt-3 text-muted">
              Don't have an account?{' '}
              <Link to="/register" className="text-primary fw-semibold text-decoration-none">
                Create one
              </Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
