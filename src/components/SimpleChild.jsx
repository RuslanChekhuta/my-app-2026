const SimpleChild = ({ value, onIncrement }) => {
  return (
    <div style={{ background: "#e0e0e0", padding: "10px", margin: "10px 0" }}>
      <h4>Дочерний компонент</h4>
      <span>Значение: {value} </span>
      <button onClick={onIncrement}>+1</button>
    </div>
  );
};

export default SimpleChild;
