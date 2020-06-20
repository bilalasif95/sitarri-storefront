import React from "react";

import { useUserDetails } from "@sdk/react";

import { AccountTile } from "./AccountTile";
import { PasswordTile } from "./PasswordTile";

export const AccountTabTiles: React.FC = () => {
  const { data: user } = useUserDetails();
  return (
  <div>
    <AccountTile />
    {user && user.socialAuth.edges.length === 0 ?
      <PasswordTile />
      : ""
    }
  </div>
  )
};
