import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <header className="hero">
        <h1 className="hero-title">Student<span>Manager</span></h1>
        <p className="hero-subtitle"> The ultimate tool for organizing and tracking student records with ease.</p>
        <div className="hero-btns">
          <Link to="/dis" className="btn-main">Get Started</Link>
          <a href="#features" className="btn-outline">Learn More</a>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="container">
          <h2 className="section-title">Core Features</h2>
          <div className="feature-grid">
            
            <div className="feature-card">
              <div className="icon bi bi-person-plus"></div>
              <h3>Add Students</h3>
              <p>Quickly enroll new students into the system with detailed profiles.</p>
            </div>

            <div className="feature-card">
              <div className="icon bi bi-pen"></div>
              <h3>Edit & Update</h3>
              <p>Keep information current. Modify grades, contact info, or status instantly.</p>
            </div>

            <div className="feature-card">
              <div className="icon bi bi-trash3"></div>
              <h3>Manage & Delete</h3>
              <p>Easily remove or archive records to keep your database clean and organized.</p>
            </div>

            <div className="feature-card">
              <div className="icon bi bi-search"></div>
              <h3>Search & Filter</h3>
              <p>Find exactly who you need by filtering students by name, ID, or class.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer Info */}
      <footer className="landing-footer">
        <p>&copy; 2024 Student Manager Pro. Simplified administration.</p>
      </footer>
    </div>
  );
}
