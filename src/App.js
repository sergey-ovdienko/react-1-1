import { ChatUser } from './ChatUser';
import { ChatTitle } from './ChatTitle';

const USERS = [
  { id: 'id1', name: 'James', isActive: true },
  { id: 'id4', name: 'Lisa', isActive: false },
  { id: 'id2', name: 'John', isActive: false },
  { id: 'id3', name: 'Mary', isActive: true },
];

function App() {
  return (
    <div>
      <ChatTitle />
      {USERS.map((item) => (
        <ChatUser key={item.id} active={item.isActive}>
          {item.name}
        </ChatUser>
      ))}
    </div>
  );
}

export default App;
