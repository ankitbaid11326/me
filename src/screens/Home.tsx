import styled from "styled-components";
import ProfileImageIcon from "../resources/images/profile.svg";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
  border: 10px solid #fff;
  border-radius: 50%;
`;

const ProfileTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 48px;
`;

const ProfileText = styled.span`
  margin: 20px 0;
  &:last-child {
    margin-left: 12px;
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.body};
    padding: 0 16px;
    font-weight: 600;
  }
`;

function Home() {
  return (
    <Wrapper>
      <ProfileImage src={ProfileImageIcon} />
      <ProfileTextContainer>
        <ProfileText>Hello, I'm</ProfileText>
        <ProfileText>Ankit</ProfileText>
      </ProfileTextContainer>
    </Wrapper>
  );
}

export default Home;
