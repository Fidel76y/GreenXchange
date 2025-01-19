import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-green-600 text-white p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">GreenXchange</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-green-300">Home</Link>
          <Link to="/marketplace" className="hover:text-green-300">Marketplace</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
