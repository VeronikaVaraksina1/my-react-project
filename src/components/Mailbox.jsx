export const Mailbox = ({ username, unreadMessages }) => {
    return (
      <>
        <p>Hello {username}</p>
        {unreadMessages.length > 0
          ? `You have ${unreadMessages.length} unread messages`
          : "No unread messages"}
      </>
    );
  };