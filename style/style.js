import styled from "styled-components/native";

export const ContainerGame = styled.View`
  flex: 1;
  background-color: #151316;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
`;

export const ButtonPink = styled.TouchableOpacity`
  color: white;
  display: flex;
  background-color: #de4a97;
  border-radius: 16px;
  width: 350px;
  height: 70px;
  align-items: center;
  justify-content: center;
`;

export const ContGame = styled.View`
  border: solid 2px #de4a97;
  border-radius: 10px;
  height: 500px;
  width: 350px;
`;
