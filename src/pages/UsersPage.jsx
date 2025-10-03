import React from "react";
import { UserList } from "../features/users";
import { ErrorBanner, LoadingSpinner } from "../features/global";

const UsersPage = () => (
  <div style={{ padding: "20px" }}>
    <LoadingSpinner />
    <ErrorBanner />
    <UserList />
  </div>
);

export default UsersPage;
