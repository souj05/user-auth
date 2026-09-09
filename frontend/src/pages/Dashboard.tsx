import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div style={{ background: '#f0f2f5', minHeight: '100vh' }}>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div className="container">
          <span className="navbar-brand fw-bold fs-4">🔐 AuthApp</span>
          <div className="d-flex align-items-center gap-3">
            <span className="text-white opacity-75 d-none d-md-block">
              👋 Hello, {user?.name?.split(' ')[0]}
            </span>
            <button className="btn btn-outline-light btn-sm fw-semibold" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">

            {/* Welcome Card */}
            <div className="card border-0 shadow-sm rounded-3 mb-4">
              <div className="card-body p-4 text-center">
                <div className="mb-3">
                  <div
                    className="rounded-circle bg-primary d-inline-flex align-items-center justify-content-center text-white fw-bold"
                    style={{ width: 72, height: 72, fontSize: 28 }}
                  >
                    {user?.name?.charAt(0).toUpperCase()}
                  </div>
                </div>
                <h4 className="fw-bold text-dark mb-1">Welcome, {user?.name}!</h4>
                <p className="text-muted mb-0">You are successfully authenticated.</p>
              </div>
            </div>

            {/* User Details Card */}
            <div className="card border-0 shadow-sm rounded-3 mb-4">
              <div className="card-header bg-white border-0 pt-4 px-4 pb-0">
                <h6 className="fw-bold text-dark mb-0">👤 Account Details</h6>
              </div>
              <div className="card-body px-4 pt-3 pb-4">
                <div className="row g-0">
                  <div className="col-12 py-2 border-bottom d-flex justify-content-between align-items-center">
                    <span className="text-muted small fw-semibold text-uppercase" style={{ letterSpacing: '0.5px' }}>Full Name</span>
                    <span className="fw-semibold text-dark">{user?.name}</span>
                  </div>
                  <div className="col-12 py-2 border-bottom d-flex justify-content-between align-items-center">
                    <span className="text-muted small fw-semibold text-uppercase" style={{ letterSpacing: '0.5px' }}>Email</span>
                    <span className="fw-semibold text-dark">{user?.email}</span>
                  </div>
                  <div className="col-12 py-2 border-bottom d-flex justify-content-between align-items-center">
                    <span className="text-muted small fw-semibold text-uppercase" style={{ letterSpacing: '0.5px' }}>User ID</span>
                    <span className="fw-semibold text-dark text-truncate ms-3" style={{ maxWidth: 180, fontSize: 13 }}>{user?.id}</span>
                  </div>
                  <div className="col-12 py-2 d-flex justify-content-between align-items-center">
                    <span className="text-muted small fw-semibold text-uppercase" style={{ letterSpacing: '0.5px' }}>Member Since</span>
                    <span className="fw-semibold text-dark">
                      {user?.createdAt ? new Date(user.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }) : '-'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Stack Card */}
            <div className="card border-0 shadow-sm rounded-3">
              <div className="card-body p-4 text-center">
                <p className="text-muted small fw-semibold text-uppercase mb-3" style={{ letterSpacing: '1px' }}>Built With</p>
                <div className="d-flex flex-wrap gap-2 justify-content-center">
                  {['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Bootstrap'].map(tech => (
                    <span key={tech} className="badge bg-primary bg-opacity-10 text-primary fw-semibold px-3 py-2" style={{ fontSize: 13 }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
