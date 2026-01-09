import { useState } from "react";

function Countdown() {
  const [targetDate, setTargetDate] = useState("");

  let daysLeft = null;
  let message = "";

  if (targetDate) {
    const today = new Date();
    const holiday = new Date(targetDate);

    const differenceInTime = holiday - today;
    daysLeft = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));

    if (daysLeft < 0) {
      message = "Please choose a future date 🙂";
    }
  }

  function handleReset() {
    setTargetDate("");
  }

  return (
    <div className="countdown-container">
      <h2 className="countdown-title">Holiday Countdown</h2>

      <input
        className="countdown-input"
        type="date"
        value={targetDate}
        onChange={(event) => setTargetDate(event.target.value)}
      />

      {targetDate && message && <p className="countdown-message">{message}</p>}

      {targetDate && daysLeft >= 0 && (
        <p className="countdown-result">
          Your holiday is in {daysLeft} day{daysLeft !== 1 && "s"} 🎉
        </p>
      )}

      {targetDate && (
        <button className="countdown-reset" onClick={handleReset}>
          Reset
        </button>
      )}
    </div>
  );
}

export default Countdown;