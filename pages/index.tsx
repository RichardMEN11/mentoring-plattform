import styled from 'styled-components';
import Image from 'next/image';
import { FaUser } from '@react-icons/all-files/fa/FaUser';
import { FiSlack } from '@react-icons/all-files/fi/FiSlack';
import { FiLinkedin } from '@react-icons/all-files/fi/FiLinkedin';
import { AiOutlineCalendar } from '@react-icons/all-files/ai/AiOutlineCalendar';
import { RiInformationLine } from '@react-icons/all-files/ri/RiInformationLine';

const OuterContainer = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
`;

const LeftContainer = styled.section`
  height: 100vh;
  width: 50%;
  background-color: #fee9ef;
`;

const StyledCard = styled.div`
  width: 500px;
  height: auto;
  background-color: #fff;
  box-shadow: 10px 0 20px rgb(30 49 71 / 20%);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 7px;
  padding: 30px 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImage = styled(Image)`
  border-radius: 100%;
`;

const StyledName = styled.h1`
  color: #212529;
  font-size: 32px;
  margin-top: 10px;
  margin-bottom: 2px;
  font-family: 'Livvic', sans-serif;
  font-weight: 700;
`;
const StyledTrack = styled.p`
  color: #fa1e5a;
  font-size: 20px;
  margin-top: 0px;
  margin-bottom: 8px;
  font-family: 'Livvic', sans-serif;
  font-weight: 300;
`;

const StyledBioSection = styled.div``;

const StyledBioTitle = styled.h5`
  color: #fa1e5a;
  font-family: 'Livvic', sans-serif;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 0px;
  margin-top: 0px;
`;

const StyledBioText = styled.p`
  color: #464646;
  font-family: 'Livvic', sans-serif;
  font-weight: 300;
  line-height: 22px;
  margin-top: 4px;
`;

const StyledBtnPrimary = styled.a`
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  line-height: 1.5;
  border-radius: 0.25rem;
  background: #fff;
  color: #fa1e5a;
  box-shadow: 0 10px 30px -15px rgb(30 49 71 / 50%);
  font-family: Livvic, sans-serif;
  font-weight: 700;
  font-size: 17px;
  padding: 0.8em 1em 0.8em 1em;
  margin-right: 1.5rem;
  border: none;
  cursor: pointer;
`;

const StyledSlackIcon = styled(FiSlack)`
  margin-right: 10px;
`;

const StyledCalendarIcon = styled(AiOutlineCalendar)`
  margin-right: 10px;
`;

const StyledBtnSecondary = styled.a`
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  line-height: 1.5;
  border-radius: 0.25rem;
  background: #fa1e5a;
  color: #fff;
  box-shadow: 0 10px 30px -15px rgb(30 49 71 / 50%);
  font-family: Livvic, sans-serif;
  font-weight: 700;
  font-size: 17px;
  padding: 0.8em 1em 0.8em 1em;
  border: none;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 24px;
`;

const StyledSocialsSection = styled.div`
  display: flex;
  justify-content: space-between;
  color: #464646;
  margin-top: 0px;
  margin-bottom: 16px;
  > a {
    margin: 0px 5px;
  }
`;

export default function Home() {
  return (
    <OuterContainer>
      <LeftContainer></LeftContainer>
      <StyledCard>
        <StyledImage
          src="/richard.png"
          alt="Picture of the author"
          width={150}
          height={150}
        />
        <StyledName>Richard Menning</StyledName>
        <StyledTrack>Web Development</StyledTrack>
        <StyledSocialsSection>
          <a href="https://www.rileven.tech">
            <RiInformationLine></RiInformationLine>
          </a>
          <a href="https://www.linkedin.com/in/richard-menning/">
            <FiLinkedin></FiLinkedin>
          </a>
        </StyledSocialsSection>
        <StyledBioSection>
          <StyledBioTitle>
            <FaUser /> About me:
          </StyledBioTitle>
          <StyledBioText>
            Hey my name is Richard, <br /> nice to meet you! I am a Full-Stack
            Developer. I currently develop applications as a freelancer for my
            own company Rileven and for the Bermuda Digital Studio. I am happy
            to help you with your questions.
          </StyledBioText>
        </StyledBioSection>
        <StyledButtonContainer>
          <StyledBtnPrimary href="https://techlabs-community.slack.com/team/UDE8BN6TV">
            <StyledSlackIcon></StyledSlackIcon>Send Message
          </StyledBtnPrimary>
          <StyledBtnSecondary>
            <StyledCalendarIcon></StyledCalendarIcon>Book Appointment
          </StyledBtnSecondary>
        </StyledButtonContainer>
      </StyledCard>
    </OuterContainer>
  );
}
