import "../css/chatComp.css";

export default function Chatcomp() {
  return (
    <div className="chat-main-container">
      <div className="messages-sent-container">
        <div className="message-inside-messages-container">
          <div className="message-sent-user-details">
            <div className="chat-user-profile">
              <i class="fa-solid fa-circle-user"></i>
            </div>
            <div className="chat-user-username">Ahmed12ra</div>
          </div>
					<div className="chat-user-message">Did you see the new skin that is in the v-pass</div>
        </div>
      </div>
      <div className="send-message-container">
        <input type="text" className="send-message-input" />
        <span className="chat-send-icon">
          <i class="fa-solid fa-paper-plane"></i>
        </span>
      </div>
    </div>
  );
}
