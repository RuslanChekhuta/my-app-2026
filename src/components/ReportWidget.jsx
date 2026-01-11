import { useState } from "react";

export default function ReportWidget() {
  const [reportText, setReportText] = useState("");

  const handleInputChange = (e) => {
    setReportText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Жалоба отправлена: ${reportText}`);
    setReportText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      handleSubmit(e);
    }
  };

  return (
    <form className="report-card" onSubmit={handleSubmit}>
      <h3>Сообщить об ошибке</h3>
      <textarea
        className="report-input"
        placeholder="Опишите проблему (Ctrl+Enter для отправки)..."
        value={reportText}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button type="submit" className="report-btn">
        Отправить
      </button>
    </form>
  );
}
