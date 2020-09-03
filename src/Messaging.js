import React from "react";
import { onMessageListener } from "./firebaseInit";

export const Messaging = () => {
  const [messages, setMessages] = React.useState([]);
  const [requesting, setRequesting] = React.useState(false);

  React.useEffect(() => {}, []);

  onMessageListener()
    .then((payload) => {
      const { title, body } = payload.data;
      toast.info(`${title}; ${body}`);
    })
    .catch((err) => {
      toast.error(JSON.stringify(err));
    });

  return (
    <div>
      {/* form goes here */}
      <div className="message-list">
        <h3>Messages</h3>
        {requesting ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          <>
            {messages.map((m, index) => {
              const { name, message } = m;
              return (
                <div key={index}>
                  {name}: {message}
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};
