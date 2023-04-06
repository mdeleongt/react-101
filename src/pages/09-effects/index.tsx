import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  // const [condition, setCondition] = useState("");

  useEffect(() => {
    fetch("/api/users?c=condition")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []); // ?
  // }, [condition]); // ?

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
