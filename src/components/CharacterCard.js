import React from "react";
import styled from "styled-components";


  
export default function CharacterCard(props) {

  const Card = styled.div`
  display: flex;
  flex-direction: column; `

  const Header = styled.h2`
  font-size: 24px;
  font-weight: bold; `

  return (
    <Card>
      <Header>{props.name}</Header>
      <p>Status: {props.status}</p>
      <p>Species: {props.species}</p>
    </Card>
  );
}
