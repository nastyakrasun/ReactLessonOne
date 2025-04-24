// держит контекст из UserContext.js
import { useState } from 'react';
import { UserContext } from './UserContext';

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: 'Алексей',
    email: 'alex@example.com'
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
