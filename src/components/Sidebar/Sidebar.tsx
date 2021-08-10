import React from "react";
import styled from "styled-components";
import rem from "../../utils/rem";

const SidebarContainer = styled.div`
  background-color: #ffffff;
  box-shadow: 3px 0 4px -2px rgba(0, 0, 0, 0.16);
  min-width: ${rem(26.25)};
`;

const Sidebar: React.FC = () => {
  return <SidebarContainer></SidebarContainer>;
};

export default Sidebar;
