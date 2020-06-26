import * as React from "react";

import { INavItem, MobileNavList, Overlay, OverlayContextInterface } from "..";

import { useSignOut,useUserDetails } from "@sdk/react";

const MobileNav: React.FC<{ overlay: OverlayContextInterface }> = ({
  overlay,
}) => {
  const items: INavItem[] = overlay.context.data;
  const { data: user } = useUserDetails();
  const [signOut] = useSignOut();
  return (
    <Overlay context={overlay}>
      <div className="side-nav" onClick={evt => evt.stopPropagation()}>
        <MobileNavList items={items} hideOverlay={overlay.hide} user={user} signOut={signOut} />
      </div>
    </Overlay>
  );
};

export default MobileNav;
