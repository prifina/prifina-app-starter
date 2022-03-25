import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const MainInnerSection = styled.main`
  grid-area: content;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin: 10px;
  overflow: hidden;
`;

const MainInsideSection = styled.section`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  background-color: white;
  padding: 0;
  overflow: hidden;
`;

const MainInsideContentDiv = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  background-color: white;
  height: 100%;
  overflow: hidden;
`;

const MainInsideH1Heading = styled.h1`
  margin: 20px;
  color: #495576;
  font-family: "Inter", "system-ui", "-apple-system", sans-serif;
`;

const MainInsideContactDiv = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  height: 100%;
  overflow: hidden;
`;


const ContactDetailsDividerSection1 = styled.section`
  flex-direction: column;
`;

const ContactDetailsSection1H3 = styled.h3`
  color: #495576;
  margin-bottom: 20px;
`;

const ContactDetailsSection1P = styled.p`
  color: #747481;
  font-size: 1rem;
`;

export const ProfileSetttings = ({
    handleInputChange,
    tempProfile,
    saveProfile,
    ...props
  }) => (
<MainInnerSection className="Routes__Container-kfwx58-0 hoiTKx">
            <MainInsideSection className="Page__Container-adlajs-0 iGHmFf">
              <MainInsideContentDiv className="Page__Content-adlajs-1 ciiOPl">
                <MainInsideH1Heading className="ContactsPage__PageHeading-sc-1ewu7oo-0 haeIQk">
                  Settings
                </MainInsideH1Heading>
                <MainInsideContactDiv className="ContactsPage__RowContainer-sc-1ewu7oo-1 kaeyif">
                  <ContactDetailsDividerSection1>
                  <ContactDetailsSection1H3 className="ContactDetails__SectionHeader-sc-1gubtf7-5 eFXpIL">
                            Name
                          </ContactDetailsSection1H3>
                          <ContactDetailsSection1P>
                            <input value={tempProfile.name} name="name" onChange={handleInputChange}></input>
                          </ContactDetailsSection1P>
                  <ContactDetailsSection1H3 className="ContactDetails__SectionHeader-sc-1gubtf7-5 eFXpIL">
                            Job
                          </ContactDetailsSection1H3>
                          <ContactDetailsSection1P>
                          <input value={tempProfile.job} name="job" onChange={handleInputChange}></input>
                          </ContactDetailsSection1P>
                  <ContactDetailsSection1H3 className="ContactDetails__SectionHeader-sc-1gubtf7-5 eFXpIL">
                            Job Description
                          </ContactDetailsSection1H3>
                          <ContactDetailsSection1P>
                          <input value={tempProfile.jobDescription} name="jobDescription" onChange={handleInputChange}></input>
                          </ContactDetailsSection1P>
                  <ContactDetailsSection1H3 className="ContactDetails__SectionHeader-sc-1gubtf7-5 eFXpIL">
                          Work
                          </ContactDetailsSection1H3>
                          <ContactDetailsSection1P>
                          <input value={tempProfile.workNumber} name="workNumber" onChange={handleInputChange}></input>
                          </ContactDetailsSection1P>
                  <ContactDetailsSection1H3 className="ContactDetails__SectionHeader-sc-1gubtf7-5 eFXpIL">
                          Email
                          </ContactDetailsSection1H3>
                          <ContactDetailsSection1P>
                          <input value={tempProfile.email} name="email" onChange={handleInputChange}></input>
                          </ContactDetailsSection1P>
                  <ContactDetailsSection1H3 className="ContactDetails__SectionHeader-sc-1gubtf7-5 eFXpIL">
                          Mobile
                          </ContactDetailsSection1H3>
                          <ContactDetailsSection1P>
                          <input value={tempProfile.mobile} name="mobile" onChange={handleInputChange}></input>
                          </ContactDetailsSection1P>
                  <ContactDetailsSection1H3 className="ContactDetails__SectionHeader-sc-1gubtf7-5 eFXpIL">
                          Bio
                          </ContactDetailsSection1H3>
                          <ContactDetailsSection1P>
                          <textarea value={tempProfile.bio} name="bio" onChange={handleInputChange}></textarea>
                          </ContactDetailsSection1P>
                  <button onClick={saveProfile}>Save Changes</button>
                  </ContactDetailsDividerSection1>
                </MainInsideContactDiv>
              </MainInsideContentDiv>
            </MainInsideSection>
          </MainInnerSection>
  );
  
  ProfileSetttings.propTypes = {
    tempProfile: PropTypes.object,
    saveProfile: PropTypes.func,
    handleInputChange: PropTypes.func,

  };
  
  