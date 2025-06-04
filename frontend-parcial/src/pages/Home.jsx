import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw; /* Ocupa todo el ancho */
  height: 100vh; /* Ocupa todo el alto */
  margin: 0; /* Elimina márgenes */
  padding: 0; /* Elimina espacios internos */
  background: linear-gradient(to bottom, #2c3e50, #34495e);
  color: #ecf0f1;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
`;

const Subtitle = styled.p`
  font-size: 18px;
  margin-top: 10px;
  opacity: 0.8;
`;

const Home = () => (
  <HomeContainer>
    <Title>Bienvenido a la gestión de usuarios y roles</Title>
    <Subtitle>Administra y controla los permisos de manera eficiente</Subtitle>
  </HomeContainer>
);

export default Home;
