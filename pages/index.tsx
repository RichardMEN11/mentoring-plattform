import styled from 'styled-components';
import Image from 'next/image';
import { FaUser } from '@react-icons/all-files/fa/FaUser';
import { FiSlack } from '@react-icons/all-files/fi/FiSlack';
import { FiLinkedin } from '@react-icons/all-files/fi/FiLinkedin';
import { AiOutlineCalendar } from '@react-icons/all-files/ai/AiOutlineCalendar';
import { AiOutlineClockCircle } from '@react-icons/all-files/ai/AiOutlineClockCircle';
import { AiOutlineMail } from '@react-icons/all-files/ai/AiOutlineMail';
import { RiInformationLine } from '@react-icons/all-files/ri/RiInformationLine';
import { BiRightArrow } from '@react-icons/all-files/bi/BiRightArrow';
import { BiLeftArrow } from '@react-icons/all-files/bi/BiLeftArrow';
import { useState } from 'react';
import dayjs from 'dayjs';

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

const StyledCard = styled.div<{ showsAppointment: boolean }>`
  width: ${(props) => (props.showsAppointment ? '90%' : '500px')};
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
  flex-direction: row;
  align-items: center;
  transition: all 0.7s ease-out;
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
  margin-right: 5px;
  vertical-align: middle;
`;

const StyledAiOutlineClockCircle = styled(AiOutlineClockCircle)`
  margin-right: 5px;
  vertical-align: middle;
`;
const StyledAiOutlineMail = styled(AiOutlineMail)`
  margin-right: 5px;
  vertical-align: middle;
`;

const StyledBiRightArrow = styled(BiRightArrow)`
  vertical-align: middle;
  cursor: pointer;
  color: #fa1e5a;
`;

const StyledBiLeftArrow = styled(BiLeftArrow)`
  vertical-align: middle;
  cursor: pointer;
  color: #fa1e5a;
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
  cursor: pointer;
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

const StyledInfo = styled.div<{ showsAppointment: boolean }>`
  width: ${(props) => (props.showsAppointment ? '35%' : '100%')};
  min-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledBookingSection = styled.div<{ showsAppointment: boolean }>`
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.7s ease-in;
  transition-delay: 0.7s;
  position: relative;
  > div {
    width: 60%;
  }
`;

const StyledBookingTitle = styled.h2`
  color: #212529;
  font-size: 24px;
  margin-top: 10px;
  margin-bottom: 8px;
  font-family: 'Livvic', sans-serif;
  font-weight: 700;
`;

const StyledDate = styled.div<{ active: boolean }>`
  border: ${(props) => (props.active ? '1px solid#fa1e5a' : '1px solid black')};
  padding: 3px 5px;
  border-radius: 3px;
  font-family: 'Livvic', sans-serif;
  font-weight: 300;
  margin: 0px 5px;
  cursor: pointer;
  transition: all 0.2s ease-out;
  color: ${(props) => (props.active ? '#fa1e5a' : 'black')};
  &:hover {
    border: 1px solid #fa1e5a;
    color: #fa1e5a;
    transform: scale(1.02);
  }
`;

const StyledDateContainer = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 12px;
  align-items: center;
`;

const StyledEmail = styled.input`
  margin-top: 10px;
  font-family: 'Livvic', sans-serif;
  font-weight: 300;
  margin-right: 10px;
  border-radius: 3px;
  border: 1px solid black;
  font-size: 14px;
  padding: 8px 10px;
  width: 100%;
  margin-bottom: 56px;
`;

export default function Home() {
  const [showAppointment, setShowAppointments] = useState(false);
  const [multipl, setMultipl] = useState(0);
  const [choosenDate, setChoosenDate] = useState('');
  return (
    <OuterContainer>
      <LeftContainer></LeftContainer>
      <StyledCard showsAppointment={showAppointment}>
        <StyledInfo showsAppointment={showAppointment}>
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
            {!showAppointment && (
              <StyledBtnSecondary
                onClick={() => setShowAppointments(!showAppointment)}
              >
                <StyledCalendarIcon></StyledCalendarIcon>Book Appointment
              </StyledBtnSecondary>
            )}
          </StyledButtonContainer>
        </StyledInfo>
        {showAppointment && (
          <StyledBookingSection showsAppointment={showAppointment}>
            <div>
              <StyledBookingTitle>Termin Buchen</StyledBookingTitle>
              <StyledBioTitle>
                <StyledCalendarIcon /> Datum
              </StyledBioTitle>
              <StyledDateContainer>
                {multipl > 0 && (
                  <StyledBiLeftArrow
                    onClick={() => {
                      setMultipl(multipl - 1);
                    }}
                  />
                )}
                <StyledDate
                  onClick={() =>
                    setChoosenDate(
                      dayjs().day(4).add(multipl, 'week').format('DD.MM.YY')
                    )
                  }
                  active={
                    dayjs().day(4).add(multipl, 'week').format('DD.MM.YY') ===
                    choosenDate
                  }
                >
                  {dayjs().day(4).add(multipl, 'week').format('DD.MM.YY')}
                </StyledDate>
                <StyledDate
                  onClick={() =>
                    setChoosenDate(
                      dayjs().day(5).add(multipl, 'week').format('DD.MM.YY')
                    )
                  }
                  active={
                    dayjs().day(5).add(multipl, 'week').format('DD.MM.YY') ===
                    choosenDate
                  }
                >
                  {dayjs().day(5).add(multipl, 'week').format('DD.MM.YY')}
                </StyledDate>
                <StyledDate
                  onClick={() =>
                    setChoosenDate(
                      dayjs().day(6).add(multipl, 'week').format('DD.MM.YY')
                    )
                  }
                  active={
                    dayjs().day(6).add(multipl, 'week').format('DD.MM.YY') ===
                    choosenDate
                  }
                >
                  {dayjs().day(6).add(multipl, 'week').format('DD.MM.YY')}
                </StyledDate>
                <StyledDate
                  onClick={() =>
                    setChoosenDate(
                      dayjs().day(7).add(multipl, 'week').format('DD.MM.YY')
                    )
                  }
                  active={
                    dayjs().day(7).add(multipl, 'week').format('DD.MM.YY') ===
                    choosenDate
                  }
                >
                  {dayjs().day(7).add(multipl, 'week').format('DD.MM.YY')}
                </StyledDate>
                <StyledBiRightArrow
                  onClick={() => {
                    setMultipl(multipl + 1);
                  }}
                />
              </StyledDateContainer>
              <StyledBioTitle>
                <StyledAiOutlineClockCircle /> Slot-Time
              </StyledBioTitle>
              <StyledDateContainer>
                <StyledBiLeftArrow />
                <StyledDate>09:00</StyledDate>
                <StyledDate>10:00</StyledDate>
                <StyledDate>11:00</StyledDate>
                <StyledDate>12:00</StyledDate>
                <StyledBiRightArrow />
              </StyledDateContainer>
              <StyledBioTitle>
                <StyledAiOutlineMail /> E-Mail
              </StyledBioTitle>
              <StyledEmail
                type="email"
                placeholder="yourmail@awesome.com"
              ></StyledEmail>
              <StyledBtnSecondary
                onClick={() => setShowAppointments(!showAppointment)}
              >
                <StyledCalendarIcon></StyledCalendarIcon>Book Appointment
              </StyledBtnSecondary>
            </div>
          </StyledBookingSection>
        )}
      </StyledCard>
    </OuterContainer>
  );
}
