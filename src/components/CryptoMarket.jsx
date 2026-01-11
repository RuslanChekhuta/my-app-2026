import CryptoCard from "./CryptoCard";
import "./CryptoMarket.css";

const coins = [
  { id: "btc", name: "Bitcoin", price: "$65,000", icon: "\u{1F4B0}" }, // Мешок денег
  { id: "eth", name: "Ethereum", price: "$3,500", icon: "\u{1F48E}" }, // Бриллиант
  { id: "doge", name: "Dogecoin", price: "$0.15", icon: "\u{1F415}" }, // Собака
];

const CryptoMarket = () => {
  return (
    <div className="market-grid">
      {coins.map((coin) => (
        <CryptoCard
          key={coin.id}
          name={coin.name}
          price={coin.price}
          icon={coin.icon}
        />
      ))}
    </div>
  );
};

export default CryptoMarket;
