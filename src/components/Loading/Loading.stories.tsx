/* eslint-disable */
import Loading from "./Loading";
import styled from "@emotion/styled";

export default {
  parameters: {
    controls: {
      disabled: true,
    },
  },
  title: "Loading",
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fffdea;
`;

export const Small = () => {
  return (
    <Container>
      <Loading show={true} size={"small"} />
    </Container>
  );
};

export const Medium = () => {
  return (
    <Container>
      <Loading show={true} size={"medium"} />
    </Container>
  );
};

export const Large = () => {
  return (
    <Container>
      <Loading show={true} size={"large"} />
    </Container>
  );
};

Small.story = {
  name: "Small",
};

Medium.story = {
  name: "Medium",
};

Large.story = {
  name: "Large",
};
