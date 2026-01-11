import "./TransactionHistory.css";

const history = [
  { id: "tx1", amount: -250, date: "2024-03-20", title: "Coffee" },
  { id: "tx2", amount: 2500, date: "2024-03-21", title: "Salary" },
  { id: "tx3", amount: -1500, date: "2024-03-22", title: "Rent" },
];

const TransactionHistory = () => {
  return (
    <div className="history-container">
      <h2>History</h2>
      <ul className="history-list">
        {history.map((item) => (
          <li
            className={`${item.amount < 0 ? "expense" : "income"} history-item`}
            key={item.id}
          >
            <p>
              {item.title}, {item.date},
              <span className="amount">{item.amount}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
