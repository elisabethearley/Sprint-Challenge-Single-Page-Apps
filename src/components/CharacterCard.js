import React from "react";
import styled from "styled-components";

const Header = styled.div`
  font-size: 24px;
  font-weight: bold;
`

export default function CharacterCard(props) {
  return (
    <div>
      <Header>Name{props.name}</Header>
    </div>
  );
}
