import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container py-5 text-center">
      <h1 style={{ fontSize: '80px', color: 'var(--color-primary)' }}>404</h1>
      <p className="text-muted-custom">Page not found.</p>
      <Link to="/" className="btn btn-primary-custom mt-3">Back to Home</Link>
    </div>
  );
}
export default NotFound;