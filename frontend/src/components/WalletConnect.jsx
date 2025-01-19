import { useState } from 'react';
import Web3 from 'web3';

function WalletConnect() {
  const [address, setAddress] = useState('');

  const connectWallet = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.requestAccounts();
      setAddress(accounts[0]);
    } else {
      alert('Please install Core Wallet or MetaMask.');
    }
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={connectWallet}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Connect Wallet
      </button>
      {address && <p className="mt-4 text-gray-700">Connected: {address}</p>}
    </div>
  );
}

export default WalletConnect;
