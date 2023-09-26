export const ChatUser = ({ active, children }) => {
  return (
    <h2>
      {children} {active && '(online)'}
    </h2>
  );
};
