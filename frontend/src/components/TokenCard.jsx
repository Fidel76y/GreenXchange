function TokenCard({ token, onBuy }) {
    return (
      <div className="bg-white border rounded shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-xl font-bold text-gray-800">{token.projectName}</h3>
        <p className="text-gray-600">Verifier: {token.verifier}</p>
        <p className="text-gray-600">Price: {token.price} AVAX</p>
        <button
          onClick={() => onBuy(token.id)}
          className="bg-green-500 text-white px-4 py-2 mt-4 rounded hover:bg-green-600"
        >
          Buy Now
        </button>
      </div>
    );
  }
  
  export default TokenCard;
  