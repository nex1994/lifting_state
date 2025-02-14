import { useState } from "react";
import { UsersTable } from "./UsersTable";
import { UserInfo } from "./UserInfo";



export const DataFetchingDemo = () => {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  return (
    <div>
      <h2>Data fetching demo</h2>
      <div style={{ display: "flex" }}>
        <UsersTable
          selectedUserId={selectedUserId}
          setSelectedUserId={setSelectedUserId}
        />
        {selectedUserId && <UserInfo userId={selectedUserId} />}
      </div>
    </div>
  );
};
