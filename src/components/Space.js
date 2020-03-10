import React from "react";
import styled from "styled-components";
import Room from './Room';

const Header = styled.img`
  width: 50vw;
  height: auto;
  margin: 0 auto;
  padding: 1rem;
`;

const SpaceSelector = styled.nav``;

const RedLine = styled.hr`
  border-color: red;
  padding: 0;
  margin: 0;
`;

const Space = () => {
  return (
    <SpaceSelector>
      <Header src="interspace-noncon-header.png" />
      <RedLine />
      <div className="map-container">
        <Room roomName="Udi's Lobby" />
        <Room roomName="The Qrypto Qube" />
        <Room roomName="QryptoLiberation" />
        <Room roomName="The Hall Track" />
      </div>
    </SpaceSelector>
  );
};

export default Space;
