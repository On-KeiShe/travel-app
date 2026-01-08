import { useState } from "react";

function VirtualPostcard() {
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function sendPostcard() {
    if (message === "") return;
    setSent(true);
  }

  return (
    <div className="postcard-container">
      <h2 className="postcard-title">Virtual Postcard</h2>

      <img
        src="/src/assets/postcard.png"
        alt="Postcard"
        className="postcard-image"
      />

      <textarea
        className="postcard-message"
        placeholder="Write Your Message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button className="postcard-button" onClick={sendPostcard}>
        Send Postcard
      </button>

      {sent && <p className="postcard-sent">Postcard sent ✈️💌</p>}
    </div>
  );
}

export default VirtualPostcard;