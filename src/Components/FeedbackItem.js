import React from "react";

function FeedbackItem({ feedback }) {
  return (
    <div className="card">
      <div className="num-display">{feedback.rating}</div>
      <div className="user-display">{feedback.user}</div>
      <div className="text-display">{feedback.text}</div>
    </div>
  );
}

export default FeedbackItem;
