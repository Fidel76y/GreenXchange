pragma solidity ^0.8.0;

contract CarbonCreditMarketplace {
    struct CarbonCredit {
        uint256 id;
        address owner;
        uint256 amount; // Amount of carbon offset
        uint256 price;  // Price in Wei
        bool forSale;   // Status
    }

    CarbonCredit[] public credits;
    mapping(uint256 => address) public creditToOwner;

    // Minting Carbon Credit
    function mintCredit(uint256 amount, uint256 price) public {
        uint256 id = credits.length;
        credits.push(CarbonCredit(id, msg.sender, amount, price, true));
        creditToOwner[id] = msg.sender;
    }

    // Buy Carbon Credit
    function buyCredit(uint256 id) public payable {
        CarbonCredit storage credit = credits[id];
        require(credit.forSale, "Not for sale");
        require(msg.value >= credit.price, "Insufficient payment");
        payable(credit.owner).transfer(msg.value);
        credit.owner = msg.sender;
        credit.forSale = false;
    }

    // List Credits
    function listCredits() public view returns (CarbonCredit[] memory) {
        return credits;
    }
}
