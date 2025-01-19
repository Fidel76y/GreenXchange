import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center py-20 bg-gray-100">
      <h1 className="text-4xl font-bold text-green-600 fade-in">
        Welcome to GreenXchange
      </h1>
      <p className="mt-4 text-gray-700">
        Empowering sustainability through blockchain technology.
      </p>
      <Link
        to="/marketplace"
        className="mt-8 inline-block bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600"
      >
        Explore Marketplace
      </Link>
    </div>
  );
}

export default Home;
