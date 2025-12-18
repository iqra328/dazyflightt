import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ title, description, image, to }) {
  return (
    <Link to={to} className="card-link">
      <article className="card">
        <div className="card-img" style={{ backgroundImage: `url(${image})` }} />
        <div className="card-body">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </article>
    </Link>
  );
}