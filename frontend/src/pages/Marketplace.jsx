import { useEffect, useState } from 'react';
import TokenCard from '../components/TokenCard';

function Marketplace() {
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    // Fetch token data (mock data for now)
    const mockTokens = [
      { id: 1, projectName: 'WindFarm2025', verifier: 'Verra', price: '10' },
      { id: 2, projectName: 'Reforest2025', verifier: 'Gold Standard', price: '15' },
    ];
    setTokens(mockTokens);
  }, []);

  const handleBuy = (id) => {
    alert(`Token ${id} bought!`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800">Marketplace</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {tokens.map((token) => (
          <TokenCard key={token.id} token={token} onBuy={handleBuy} />
        ))}
      </div>
    </div>
  );
}

export default Marketplace;
