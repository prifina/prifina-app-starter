import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { usePrifina, Op } from "@prifina/hooks";
import moment from 'moment'

const processData = (data) => {};

// unique appID for the app....
const appID = "1u3f465t4cNSWYiyKFVwBG";

const StyledBox = styled.div`
  height: 100%;
  margin: 0px;
`;

const MainDiv = styled.div`
  background-color: rgb(244, 245, 249);
  height: 100%;
  font-family: "Inter", "system-ui", "-apple-system", sans-serif;
`;

const TopDiv = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-columns: auto 2fr;
  grid-template-areas:
    "header header"
    "sidebar content";
`;

const TopHeader = styled.header`
  grid-area: header / header / header / header;
  background-color: rgb(58, 82, 156);
  display: flex;
  flex-direction: row;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  padding-left: 15px;
  box-shadow: rgb(0 0 0 / 50%) 1px 2px 4px;
`;

const Togglebutton = styled.button`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0px;
  z-index: 10;
  @media (min-width: 640px) {
    display: none;
  }
`;

const Menudiv = styled.div`
  width: 2rem;
  height: 0.25rem;
  background: rgb(255, 255, 255);
  border-radius: 10px;
  transition: all 0.3s linear 0s;
  position: relative;
  transform-origin: 1px center;
`;

const MainHeading = styled.h3`
  margin-left: 2.5em;
  color: rgb(255, 255, 255);
  @media (min-width: 640px) {
    margin-left: 0.2em;
  }
`;

const MainNavigation = styled.nav`
  grid-area: sidebar / sidebar / sidebar / sidebar;
  background-color: rgb(237, 237, 247);
  display: flex;
  flex-direction: column;
  min-width: 250px;
  box-shadow: rgb(0 0 0 / 50%) 1px 2px 4px;
  @media (max-width: 640px) {
    position: absolute;
    height: 100%;
    transition: transform 0.3s ease-in-out 0s;
    transform: translateX(-100%);
    min-width: 70%;
    z-index: 2;
  }
`;

const MainSidebar = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  padding: 15px;
  background-color: rgb(58, 82, 156);
  color: rgb(237, 237, 247);
`;

const MainProfileImage = styled.img`
  border-radius: 50%;
  height: 6rem;
  min-width: 6rem;
`;

const MainUserName = styled.span`
  margin-top: 10px;
  font-size: 1rem;
`;

const SidebarUl = styled.ul`
  list-style: none;
  padding: 0px;
  margin-top: 0px;
`;

const SidebarOption = styled.a`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 20px;
  text-transform: capitalize;
  -webkit-text-decoration: none;
  text-decoration: none;
  border-left: solid 5px #ededf7;
  color: #3a529c;
  font-size: 1.3rem;
  font-weight: bold;
  @media (min-width: 640px) {
    font-size: 1rem;
  }
`;

const SidebarSvg = styled.svg`
  height: 1em;
  width: 1em;
  margin-right: 1rem;
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
`;

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

const MainInsideLeftDiv = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  list-style: none;
  padding: 0;
  overflow-y: auto;
`;

const MainInsideRightDiv = styled.div`
  flex: 2;
  display: flex;
  @media (max-width: 640px) {
    -webkit-transition: all 0.6s;
    transition: all 0.6s;
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
    min-width: 100%;
  }
`;

const ContactsListDiv = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  list-style: none;
  padding: 0;
  overflow-y: auto;
`;
const SearchContactsInput = styled.input`
  min-height: 40px;
  border-radius: 3px;
  border: solid 2px #b1b1b7;
  padding: 0 10px;
  margin: 20px;
  box-shadow: 0 11px 13px -6px rgb(135 142 192 / 15%);
`;
const ContactListUl = styled.ul`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  list-style: none;
  padding: 0;
  margin: 0;
  overflow-y: auto;
`;
const ContactListATag = styled.a`
  text-decoration: none;
`;
const ContactListLi = styled.li`
  margin: 10px 20px;
`;

const ContactListLiDiv = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-text-decoration: none;
  text-decoration: none;
  background-color: #ededf7;
  min-height: 4rem;
  border-radius: 5px;
  padding: 15px 15px 15px 25px;
  cursor: pointer;
  box-shadow: 0 11px 13px -6px rgb(135 142 192 / 15%);
  -webkit-transition: 0.2s;
  transition: 0.2s;
`;

const MainContactsImage = styled.img`
  border-radius: 50%;
  height: 5rem;
  min-width: 5rem;
`;

const ContactItemDiv = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-left: 20px;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
`;

const ContactItemSpan1 = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #495576;
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 12px;
`;
const ContactItemSpan2 = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #495576;
  font-weight: bold;
  font-size: 0.8rem;
  margin-bottom: 8px;
`;
const ContactItemSpan3 = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #495576;
  font-weight: bold;
  font-size: 0.8rem;
`;

const NoMoreContactDiv = styled.div`
  height: 60px;
  background-color: #1ca9f0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #ffffff;
`;

// single contact details css

const SingleContactDetailsMainDiv = styled.div`
  overflow-y: auto;
`;

const SingleDetailsBackButton = styled.button`
  text-align: start;
  background: none;
  border: none;
  cursor: pointer;
  min-height: 50px;
  margin-left: 10px;
  @media (min-width: 640px) {
    display: none;
  }
`;

const SingleDetailsBackButtonSvg = styled.svg`
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
`;

const ContactDetailsContainer = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow-y: auto;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding: 20px 40px;
`;

const ContactDetailsHeader = styled.header`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

const ContactDetailsSingleImage = styled.img`
  border-radius: 50%;
  height: 8rem;
  min-width: 8rem;
`;

const ContactDetailsHeaderDiv1 = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-left: 30px;
`;

const ContactDetailsHeaderDiv2 = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
`;

const ContactDetailsName = styled.h1`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 10px 0 5px 0;
`;

const ContactDetailsGreenDot = styled.span`
  display: block;
  min-width: 6px;
  min-height: 6px;
  border-radius: 50%;
  background-color: #38b249;
  margin-left: 10px;
`;

const ContactDetailsCountry = styled.span`
  margin-bottom: 12px;
`;

const ContactDetailsChatDiv = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
`;

const ContactDetailsChatButton = styled.button`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  font-size: 1rem;
  border: none;
  border-radius: 3px;
  color: #ffffff;
  background-color: #1ca9f0;
  box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);
  cursor: pointer;
  height: 40px;
  padding: 0 18px;
`;

const ContactDetailsChatSvg = styled.svg`
  margin-right: 5px;
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
`;

const ContactDetailsDivider1 = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  height: 1px;
  width: 100%;
  background: #ededf7;
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

const ContactDetailsDivider2 = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  height: 1px;
  width: 100%;
  background: #ededf7;
`;

const ContactDetailsDividerSection2 = styled.section`
  flex-direction: column;
`;

const ContactSection2DetailsDiv = styled.div`
  flex-direction: column;
  color: #747481;
`;

const ContactSection2DetailsRow = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  margin-bottom: 10px;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

const CSection2DetailsRowSvg = styled.svg`
  min-width: 1.5rem;
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
`;

const CSection2Span1AfterSvg = styled.span`
  margin-left: 10px;
  min-width: 100px;
`;

const CSection2Span2AfterSvg = styled.span`
  word-break: break-word;
`;

const ContactDetailsDividerSection2H3 = styled.h3`
  color: #495576;
  margin-bottom: 20px;
`;

const ContactDetailsDivider3 = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  height: 1px;
  width: 100%;
  background: #ededf7;
`;

const ContactDetailsDividerSection3 = styled.section`
  flex-direction: column;
`;

const ContactDetailsDividerSection33H3 = styled.h3`
  color: #495576;
  margin-bottom: 20px;
`;

const ContactDetailsChatD = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #f4f5f9;
  min-height: 4rem;
  border-radius: 5px;
  padding: 15px 15px 15px 25px;
  margin-bottom: 20px;
  cursor: pointer;
  -webkit-transition: 0.2s;
  transition: 0.2s;
`;

const ContactDetailsChatImage = styled.img`
  border-radius: 50%;
  height: 3rem;
  min-width: 3rem;
`;

const ContactDetailsDivAfterChatImage = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-left: 20px;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
`;



const ContactDetailsSpan1AfterChat = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #495576;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 12px;
`;

const ContactDetailsSpan2AfterChat = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #6e6e6e;
  font-weight: bold;
  font-size: 0.8rem;
`;

//28w 23h
const svgWidth = "60px";
// const StyledSVG = styled(Logo)`
//   width: ${svgWidth};
//   height: calc(${svgWidth} * 23 / 28);
// `;

const App = () => {
  // const { currentUser, connector } = usePrifina({
  //   connectors: [Faker],
  // });
  // console.log("Logged in user ", currentUser);
  // console.log(
  //   "Faker module methods ",
  //   connector({ name: "Faker", function: "getInfo" })
  // );
  // const user = connector({ name: "Faker", function: "getName" });

  // console.log("asdhhads", currentUser, user);

  const [profileID, setProfileID] = useState("cl0k5wgxv37530cjre749c8hu")
  const [selectedContact, setSelectedContact] = useState(null)
  const [allData, setAllData] = useState([])
  const [contacts, setContacts] = useState([])
  const [possibleContacts, setPossibleContacts] = useState([])
  const [tempProfile, setTempProfile] = useState({
    forename: "",
    surname: "",
    job: "",
    jobDescription: "",
    workNumber: "",
    email: "",
    mobile: "",
    bio: ""
  })
  const [convos, setConvos] = useState([])
  
  const axios = require("axios");
  const headers = {
    "content-type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NDQ0MzcyNTksImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuZ3JhcGhjbXMuY29tL3YyL2NremQzdnljaTFicDMwMXoxNGI3NzV0MG8vbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMzVhNmMxNTMtMmQxNS00ZjE2LWE4OTgtMTgyYTBlYzliY2I5IiwianRpIjoiY2t6ZnpoaHdpMTZhYTAxejIweWZmZms5YiJ9.f3nj1nk7m7mwEKx9PMafsbG9balRtuRl91bV8BBbqKceoS3C-HELxFpbbn4Y4zQL5I_7eI0uheeXaiM0vDkXyOXA11Y_wBgQBD4eYyQwtEB5SsO7p7ZgVXqw3lK7h4ojP2QW1LbgbX1RLK_4wqRz7ItK1HT5ve5SGuUiiBaQJY2nBK5ElMwJiS4cSzHwb3K7c9vOsIO92XLlDsyUR7A2ABGcovITaQ6jTY4Udh6hvjIqQk4hhfOthmAST_Mpb4bIzqkMVs8EEPWh_9z8WnSf-PS35B4Wh9xOLXrLSL58CLV4QZodVV3Tor3BOS93SpJnF14tFJ1XC6X9zyty7gqTLj6dxGzTK9ru501I4wgc3W4lVtdDciLy4Qe5_j9kkQdMnJb2PbmV24SOsNyTgOb5n0yQFcCSy_DGAf4CWyrXzzrPIM5VrbL_dOe2Hcui1O7xKf74CuQYJRDt08MtJXgPEFDdpfidr7riBqu6DB_7L2RcsrerOsiy3GSr_9eY2I9x-Pv8NMBeNsrKS_M-j1n0PbwamgQKHYXrGMQf1LXNHRyiLAtHYI0GTL-6Xx0wNfiqUc_GXvsd0LWqAtfFClIThFpJAER-rOcXCn7eaRY2Gnoi7JiCx_xw0qbxQ1CFZlPB_Xgzhj-xG7oRPucXsmXlzeAxTg-rUsj_zZkrHX2D3iY",
  };

  const fetchData= async e =>{

    

    const getDataQuery = {
      "operationName":"getData",
      "query": `
      query getData($id: ID) {
        addressBookApp(where: {id: $id}) {  
          forename
          surname  
          country
            bio
            email
            mobile
            workNumber
            job
            jobDescription
          contacts {
            forename
            surname
            country
            bio
            email
            mobile
            workNumber
            id
            contactPicture {
              url
            }
            job
            jobDescription
          }
          contactPicture {
            url
          }
        }
      }   
      `,
    "variables": {"id": profileID}}
    try {
      const repsonse = await axios({
        url: "https://api-eu-west-2.graphcms.com/v2/ckzd3vyci1bp301z14b775t0o/master",
        method: "post",
        headers: headers,
        data: getDataQuery,
      });
      console.log(repsonse);
      
      setAllData(repsonse.data.data.addressBookApp)

      setContacts(repsonse.data.data.addressBookApp.contacts)
      

      setTempProfile({
        forename: repsonse.data.data.addressBookApp.forename,
        surname: repsonse.data.data.addressBookApp.surname,
        job: repsonse.data.data.addressBookApp.job,
        jobDescription: repsonse.data.data.addressBookApp.jobDescription,
        workNumber: repsonse.data.data.addressBookApp.workNumber,
        email: repsonse.data.data.addressBookApp.email,
        mobile: repsonse.data.data.addressBookApp.mobile,
        bio: repsonse.data.data.addressBookApp.bio
      })
      // console.log(allData);
    } catch (e) {
      console.log("error ", e);
    }

  }

  const [step, setStep] = useState(0)
  const fetchConvos= async e =>{

    

    const getDataQuery = {
      "operationName":"getConvos",
      "query": `
      query getConvos($id: ID, $id1: ID) {
        conversations(
          where: {addressBookApps_some: {id:$id}, AND: {addressBookApps_some: {id: $id1}}}
        ) {
          id
          messages(first: 1, orderBy: updatedAt_ASC) {
            contents
            from {
              ... on AddressBookApp {
                contactPicture {
                  url
                }
              }
            }
            updatedAt
          }
        }
      }   
      `,
    "variables": {"id": profileID, "id1": selectedContact.id}}
    try {
      const repsonse = await axios({
        url: "https://api-eu-west-2.graphcms.com/v2/ckzd3vyci1bp301z14b775t0o/master",
        method: "post",
        headers: headers,
        data: getDataQuery,
      });
      console.log("Convos",repsonse.data.data.conversations);
      setConvos(repsonse.data.data.conversations)
      // console.log(allData);
    } catch (e) {
      console.log("error ", e);
    }

  }
  useEffect(() => {
    fetchData()

  },[profileID])

  useEffect(() => {
    if (selectedContact !== null){

      fetchConvos()
    }

  },[selectedContact])

  const handleInputChange = e => {
    const target = e.target
    const name = target.name
    const value = target.value
    setTempProfile({
      ...tempProfile,
      [name]: value
    })

  }

  const saveProfile = async() => {
    
    

    const saveProfileMutation = {
      "operationName":"MyMutation",
      "query": `
      mutation MyMutation($id: ID, $bio: String, $email: String, $forename: String, $job: String, $jobDescription: String, $mobile: String, $surname: String, $workNumber: String) {
        updateAddressBookApp(
          data: {bio: $bio, email: $email, forename: $forename, job: $job, jobDescription: $jobDescription, mobile: $mobile, surname: $surname, workNumber: $workNumber}
          where: {id: $id}
        ){
          id
        }
      }
      
      `,
    "variables": {"id": profileID, "bio": tempProfile.bio, "email": tempProfile.email, "forename": tempProfile.forename, "job": tempProfile.job, "jobDescription": tempProfile.jobDescription, "mobile": tempProfile.mobile, "surname": tempProfile.surname, "workNumber": tempProfile.workNumber}}
    try {
      const repsonse = await axios({
        url: "https://api-eu-west-2.graphcms.com/v2/ckzd3vyci1bp301z14b775t0o/master",
        method: "post",
        headers: headers,
        data: saveProfileMutation,
      });
      if (repsonse.status === 200){
        setAllData({
          ...allData,
          forename: tempProfile.forename,
          surname: tempProfile.surname,
          job: tempProfile.job,
          jobDescription: tempProfile.jobDescription,
          workNumber: tempProfile.workNumber,
          email: tempProfile.email,
          mobile: tempProfile.mobile,
          bio: tempProfile.bio

        })
      }
      // console.log(allData);
    } catch (e) {
      console.log("error ", e);
    }
  }
  const findPossibleContacts = async (e) => {
    
    

    const findPossibleContactsQuery = {
      "operationName":"MyQuery",
      "query": `
      query MyQuery($email: String) {
        addressBookApps(where: {email_contains: $email}) {
          id
          forename
          surname
          job
          jobDescription
          mobile
          workNumber
          email
          bio
          contactPicture {
            url
          }
        }
      }
      
      `,
    "variables": {"email": e.target.value}}
    try {
      const repsonse = await axios({
        url: "https://api-eu-west-2.graphcms.com/v2/ckzd3vyci1bp301z14b775t0o/master",
        method: "post",
        headers: headers,
        data: findPossibleContactsQuery,
      });
      
      console.log(possibleContacts)
      console.log(repsonse)
      if (repsonse.status === 200){
        setPossibleContacts(repsonse.data.data.addressBookApps.filter(result => {
          if (result.id === profileID || allData.contacts.some(contact=>contact.id===result.id) ){
            return false
          } else {
            return true
          }
        }))
      }
      // console.log(allData);
    } catch (e) {
      console.log("error ", e);
    }
  }


  const findContacts = (e) => {
    console.log("Contacts", contacts)
    console.log("a Contacts", allData.contacts)
    console.log("Find Contacts", allData.contacts.filter(contact=>contact.email.includes(e.target.value)))
    
    setContacts(allData.contacts.filter(contact=>contact.email.includes(e.target.value)))
      // console.log(allData);

  }

  const addContact = async (e) => {
    
    

    const addContactMutation = {
      "operationName":"MyMutation",
      "query": `
      mutation MyMutation($id1: ID, $id2: ID) {
        updateAddressBookApp(
          data: {contacts: {connect: {where: {id: $id1}}}}
          where: {id: $id2}
        ) {
          id
          contacts {
            forename
            surname
            country
            bio
            email
            mobile
            workNumber
            id
            contactPicture {
              url
            }
            job
            jobDescription
          }
        }
      }
      
      `,
    "variables": {"id1": selectedContact.id, "id2": profileID}}
    
    try {
      const repsonse = await axios({
        url: "https://api-eu-west-2.graphcms.com/v2/ckzd3vyci1bp301z14b775t0o/master",
        method: "post",
        headers: headers,
        data: addContactMutation,
      });
      
      console.log(possibleContacts)
      console.log(repsonse)
      setAllData({
        ...allData,
        contacts: repsonse.data.data.updateAddressBookApp.contacts

      })
      setContacts(repsonse.data.data.updateAddressBookApp.contacts)
      // console.log(allData);
    } catch (e) {
      console.log("error ", e);
    }
  }

  const removeContact = async (e) => {
    
    

    const removeContactMutation = {
      "operationName":"MyMutation",
      "query": `
      mutation MyMutation($id1: ID, $id2: ID) {
        updateAddressBookApp(
          data: {contacts: {disconnect: {id: $id1}}}
          where: {id: $id2}
        ) {
          id
          contacts {
            forename
            surname
            country
            bio
            email
            mobile
            workNumber
            id
            contactPicture {
              url
            }
            job
            jobDescription
          }
        }
      }
      
      `,
    "variables": {"id1": selectedContact.id, "id2": profileID}}
    
    try {
      const repsonse = await axios({
        url: "https://api-eu-west-2.graphcms.com/v2/ckzd3vyci1bp301z14b775t0o/master",
        method: "post",
        headers: headers,
        data: removeContactMutation,
      });
      
      console.log(possibleContacts)
      console.log(repsonse)
      setAllData({
        ...allData,
        contacts: repsonse.data.data.updateAddressBookApp.contacts

      })
      setContacts(repsonse.data.data.updateAddressBookApp.contacts)
      setSelectedContact(null)
      // console.log(allData);
    } catch (e) {
      console.log("error ", e);
    }
  }

  function messagesWithUser (age){
    // console.log("message", age)
    if (age.to!==undefined&&age.from!==undefined){
      if (age.to.id===profileID&&age.from.id===selectedContact.id){
        return true
      } else if (age.from.id===profileID&&age.to.id===selectedContact.id){
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }
  

  return (
    <StyledBox role={"remote"}>
      <div id="modal"></div>
      <MainDiv id="root">
        <TopDiv className="App__Layout-sc-1abfors-0 lggLoH">
          <TopHeader className="Header__Container-isfppc-0 hINlGI">
            <Togglebutton
              aria-label="Toggle menu"
              aria-expanded="false"
              className="MenuButton__StyledMenuButton-sc-1pzjbc2-0 difFJq"
            >
              <Menudiv></Menudiv>
              <Menudiv></Menudiv>
              <Menudiv></Menudiv>
            </Togglebutton>
            <MainHeading className="Header__Title-isfppc-1 bqdcrG">
              📖 Prifina
            </MainHeading>
          </TopHeader>
          <MainNavigation className="Sidebar__Container-sc-10j93j9-0 BkrxF">
            <MainSidebar className="Sidebar__ProfileContainer-sc-10j93j9-3 fyNdlt">
              {allData.contactPicture!==undefined ? (
                <>
                <MainProfileImage
                src={allData.contactPicture.url}
                alt="User Profile Image"
                className="Avatar__Image-sc-1gddwuf-0 jUZNdc"
              />
                </>
              ):(
                <>
                <MainProfileImage
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAADNBAMAAADpkulaAAAAElBMVEXc1KbMx7A/Egb/+dwkQmyV1Oi7WMeAAAAAz0lEQVR42u3WSwrCMBQF0ExcgbgBxbmldQW28/rb/1acqKDSkIEKeT33TR850HBD0/UvGROHw+FwOBwOh8PhcDgcDofzLee0LsuWw+FwOBzODJ1Nm8uew+FwOBzObJzjsrlPG8I5t2WpxmnKPlw1TrD70R/90R/9iX8/+anFCfy+ZWdVi6M/+qM/7kd/KnN26TOLghM4HA6Hw+H81rn0jxyyfwXdc2/gcDjhnUmse13hcDixnLfT+ymsy+4NHA4nvFMaDofD4XA4HA6HE8C5AdnNl/zz8GiBAAAAAElFTkSuQmCC"
                alt="User Profile Image"
                className="Avatar__Image-sc-1gddwuf-0 jUZNdc"
              />
                </>
              )}

              <MainUserName className="Sidebar__Username-sc-10j93j9-4 biexVg">
                {/* User Name */}
                {allData.forename} {allData.surname}
              </MainUserName>
            </MainSidebar>
            <SidebarUl className="Sidebar__SidebarList-sc-10j93j9-1 gSANT">
              <li>
                <SidebarOption
                  className="Sidebar__StyledNavLink-sc-10j93j9-2 gZZvdm active"
                  onClick={()=>{setStep(0);setSelectedContact(null)}}
                  aria-current="page"
                >
                  <SidebarSvg
                    viewBox="0 0 640 512"
                    aria-hidden="true"
                    focusable="false"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sc-AxjAm fepPFp"
                  >
                    <path
                      fill="currentColor"
                      d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z"
                    ></path>
                  </SidebarSvg>
                  Contacts
                </SidebarOption>
              </li>
              <li>
                <SidebarOption
                  className="Sidebar__StyledNavLink-sc-10j93j9-2 gZZvdm active"
                  onClick={()=>{setStep(1);setSelectedContact(null)}}
                  aria-current="page"
                >
                  <SidebarSvg
                    viewBox="0 0 640 512"
                    aria-hidden="true"
                    focusable="false"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sc-AxjAm fepPFp"
                  >
                    <path
                      fill="currentColor"
                      d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z"
                    ></path>
                  </SidebarSvg>
                  Add Contacts
                </SidebarOption>
              </li>
              <li>
                <SidebarOption
                  className="Sidebar__StyledNavLink-sc-10j93j9-2 gZZvdm active"
                  onClick={()=>{setStep(2)}}
                  aria-current="page"
                >
                  <SidebarSvg
                    viewBox="0 0 640 512"
                    aria-hidden="true"
                    focusable="false"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sc-AxjAm fepPFp"
                  >
                    <path
                      fill="currentColor"
                      d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z"
                    ></path>
                  </SidebarSvg>
                  Edit
                </SidebarOption>
              </li>
              {/*<li>
                     <SidebarOption className="Sidebar__StyledNavLink-sc-10j93j9-2 gZZvdm" href="/awesome-address-book/settings">
                        <SidebarSvg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="sc-AxjAm dQgIel">
                           <g data-name="Layer 2">
                              <g data-name="settings-2">
                                 <circle cx="12" cy="12" r="1.5"></circle>
                                 <path d="M20.32 9.37h-1.09c-.14 0-.24-.11-.3-.26a.34.34 0 010-.37l.81-.74a1.63 1.63 0 00.5-1.18 1.67 1.67 0 00-.5-1.19L18.4 4.26a1.67 1.67 0 00-2.37 0l-.77.74a.38.38 0 01-.41 0 .34.34 0 01-.22-.29V3.68A1.68 1.68 0 0013 2h-1.94a1.69 1.69 0 00-1.69 1.68v1.09c0 .14-.11.24-.26.3a.34.34 0 01-.37 0L8 4.26a1.72 1.72 0 00-1.19-.5 1.65 1.65 0 00-1.18.5L4.26 5.6a1.67 1.67 0 000 2.4l.74.74a.38.38 0 010 .41.34.34 0 01-.29.22H3.68A1.68 1.68 0 002 11.05v1.89a1.69 1.69 0 001.68 1.69h1.09c.14 0 .24.11.3.26a.34.34 0 010 .37l-.81.74a1.72 1.72 0 00-.5 1.19 1.66 1.66 0 00.5 1.19l1.34 1.36a1.67 1.67 0 002.37 0l.77-.74a.38.38 0 01.41 0 .34.34 0 01.22.29v1.09A1.68 1.68 0 0011.05 22h1.89a1.69 1.69 0 001.69-1.68v-1.09c0-.14.11-.24.26-.3a.34.34 0 01.37 0l.76.77a1.72 1.72 0 001.19.5 1.65 1.65 0 001.18-.5l1.34-1.34a1.67 1.67 0 000-2.37l-.73-.73a.34.34 0 010-.37.34.34 0 01.29-.22h1.09A1.68 1.68 0 0022 13v-1.94a1.69 1.69 0 00-1.68-1.69zM12 15.5a3.5 3.5 0 113.5-3.5 3.5 3.5 0 01-3.5 3.5z"></path>
                              </g>
                           </g>
                        </SidebarSvg>
                        Settings
                     </SidebarOption>
                  </li>*/}
            </SidebarUl>
          </MainNavigation>
          {step === 0 && (
            <>
<MainInnerSection className="Routes__Container-kfwx58-0 hoiTKx">
            <MainInsideSection className="Page__Container-adlajs-0 iGHmFf">
              <MainInsideContentDiv className="Page__Content-adlajs-1 ciiOPl">
                <MainInsideH1Heading className="ContactsPage__PageHeading-sc-1ewu7oo-0 haeIQk">
                  Contacts
                </MainInsideH1Heading>
                <MainInsideContactDiv className="ContactsPage__RowContainer-sc-1ewu7oo-1 kaeyif">
                  <MainInsideLeftDiv className="ContactsPage__ContentContainer-sc-1ewu7oo-2 ContactsPage__ContactsListContainer-sc-1ewu7oo-3 bgSENQ">
                    <ContactsListDiv className="ContactsList__Container-sc-4pmjvq-0 fRJNWk">
                      <SearchContactsInput
                        placeholder="Search..."
                        aria-label="Search for contacts"
                        type="search"
                        className="SearchBar__Input-sc-10u3mjb-0 gGgrxN"

                        onChange={findContacts}
                      />
                      <ContactListUl className="ContactsList__List-sc-4pmjvq-1 jwgxls">
                      
                        
                        { contacts !== undefined && contacts.length > 0 ? (
                                <>
                                {console.log("TestA")}
                                {contacts.map(contact => (
                                  <>
                                  
                        <ContactListLi onClick={() => {setSelectedContact(contact)}}>
                        <ContactListLiDiv className="ContactListItem__Container-sc-6zfn3o-0 kvYBdu">
                              <MainContactsImage
                                src={contact.contactPicture.url}
                                alt="Contact Avatar"
                                className="Avatar__Image-sc-1gddwuf-0 jPaKQM"
                              />
                              <ContactItemDiv className="ContactListItem__ContactsDetailsContainer-sc-6zfn3o-1 iXVqdu">
                                {/*<ContactItemSpan1 className="ContactListItem__ContactName-sc-6zfn3o-2 cMdBAk">Birthe Schook</ContactItemSpan1>*/}
                                <ContactItemSpan1 className="ContactListItem__ContactName-sc-6zfn3o-2 cMdBAk">
                                  {contact.forename} {contact.surname}
                                </ContactItemSpan1>
                                <ContactItemSpan2 className="ContactListItem__ContactUsername-sc-6zfn3o-3 bZlGkk">
                                {contact.job}
                                </ContactItemSpan2>
                                <ContactItemSpan3 className="ContactListItem__ContactEmail-sc-6zfn3o-4 fnPulZ">
                                  {contact.jobDescription}
                                </ContactItemSpan3>
                              </ContactItemDiv>
                            </ContactListLiDiv>
                        </ContactListLi>
                                </>
                                ))}
                                </>
                              ) : (
                                <>
                                </>
                              )}
                        
                      </ContactListUl>
                    </ContactsListDiv>
                  </MainInsideLeftDiv>

                  <MainInsideRightDiv className="ContactsPage__ContentContainer-sc-1ewu7oo-2 ContactsPage__ContactsDetailsContainer-sc-1ewu7oo-4 gJELcz">
                    <SingleContactDetailsMainDiv className="ContactDetails__MainContainer-sc-1gubtf7-0 bGPHuI">
                      <SingleDetailsBackButton
                        aria-label="Back Button"
                        className="ContactDetails__BackButton-sc-1gubtf7-2 eAipaH"
                      >
                        <SingleDetailsBackButtonSvg
                          viewBox="0 0 24 24"
                          height="30"
                          width="30"
                          aria-hidden="true"
                          focusable="false"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          className="sc-AxjAm dQgIel"
                        >
                          <g data-name="Layer 2">
                            <path
                              d="M13.83 19a1 1 0 01-.78-.37l-4.83-6a1 1 0 010-1.27l5-6a1 1 0 011.54 1.28L10.29 12l4.32 5.36a1 1 0 01-.78 1.64z"
                              data-name="arrow-ios-back"
                            ></path>
                          </g>
                        </SingleDetailsBackButtonSvg>
                      </SingleDetailsBackButton>
                      {
                        selectedContact !== null ? (
                          <>
                          {/* {console.log(selectedContact)} */}
                          <ContactDetailsContainer className="ContactDetails__DetailsContainer-sc-1gubtf7-1 gBnRzM">
                        <ContactDetailsHeader className="ContactDetailsHeader__Header-m73fog-0 fqRgHC">
                          <ContactDetailsSingleImage
                            src={selectedContact.contactPicture.url}
                            alt="Contact Profile Image"
                            className="Avatar__Image-sc-1gddwuf-0 bLUeE"
                          />
                          <ContactDetailsHeaderDiv1 className="ContactDetailsHeader__HeaderDetails-m73fog-3 gYZaiX">
                            <ContactDetailsHeaderDiv2 className="ContactDetailsHeader__Column-m73fog-2 fmzbGl">
                              <ContactDetailsName className="ContactDetailsHeader__ContactName-m73fog-4 gkrwxG">
                                {selectedContact.forename} {selectedContact.surname}
                                <ContactDetailsGreenDot
                                  title="Online"
                                  className="ContactDetailsHeader__UserStatus-m73fog-6 cfJRZG"
                                ></ContactDetailsGreenDot>
                              </ContactDetailsName>
                              <ContactDetailsCountry className="ContactDetailsHeader__ContactCountry-m73fog-5 kbBllw">
                              {selectedContact.country}
                              </ContactDetailsCountry>
                            </ContactDetailsHeaderDiv2>
                            <ContactDetailsChatDiv className="ContactDetailsHeader__Row-m73fog-1 gbVsPW">
                              <ContactDetailsChatButton className="Button__Container-sc-1ltq5rw-0 hqukir" >
                                <ContactDetailsChatSvg
                                  viewBox="0 0 20 20"
                                  height="18"
                                  width="18"
                                  aria-hidden="true"
                                  focusable="false"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="sc-AxjAm dQgIel"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                                    clipRule="evenodd"
                                  ></path>
                                </ContactDetailsChatSvg>
                                Chat
                              </ContactDetailsChatButton>
                              <ContactDetailsChatButton className="Button__Container-sc-1ltq5rw-0 hqukir" onClick={()=>{removeContact()}}>
                                <ContactDetailsChatSvg
                                  viewBox="0 0 20 20"
                                  height="18"
                                  width="18"
                                  aria-hidden="true"
                                  focusable="false"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="sc-AxjAm dQgIel"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                                    clipRule="evenodd"
                                  ></path>
                                </ContactDetailsChatSvg>
                                Remove Contact
                              </ContactDetailsChatButton>
                            </ContactDetailsChatDiv>
                          </ContactDetailsHeaderDiv1>
                        </ContactDetailsHeader>
                        <ContactDetailsDivider1 className="ContactDetails__Divider-sc-1gubtf7-3 eKtgsK"></ContactDetailsDivider1>
                        <ContactDetailsDividerSection1 className="ContactDetails__Section-sc-1gubtf7-4 hZvtxh">
                          <ContactDetailsSection1H3 className="ContactDetails__SectionHeader-sc-1gubtf7-5 eFXpIL">
                            Bio
                          </ContactDetailsSection1H3>
                          <ContactDetailsSection1P>
                            {selectedContact.bio}
                          </ContactDetailsSection1P>
                        </ContactDetailsDividerSection1>
                        <ContactDetailsDivider2 className="ContactDetails__Divider-sc-1gubtf7-3 eKtgsK"></ContactDetailsDivider2>
                        <ContactDetailsDividerSection2 className="ContactDetails__Section-sc-1gubtf7-4 hZvtxh">
                          <ContactDetailsDividerSection2H3 className="ContactDetails__SectionHeader-sc-1gubtf7-5 eFXpIL">
                            Contact
                          </ContactDetailsDividerSection2H3>
                          <ContactSection2DetailsDiv className="ContactDetails__ContactDetailsContainer-sc-1gubtf7-6 dhuGLj">
                            <ContactSection2DetailsRow className="ContactDetails__ContactDetailRow-sc-1gubtf7-7 kyrzsA">
                              <CSection2DetailsRowSvg
                                viewBox="0 0 20 20"
                                height="20"
                                width="20"
                                aria-hidden="true"
                                focusable="false"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                className="sc-AxjAm dQgIel"
                              >
                                <path d="M18.672 11H17v6c0 .445-.194 1-1 1h-4v-6H8v6H4c-.806 0-1-.555-1-1v-6H1.328c-.598 0-.47-.324-.06-.748L9.292 2.22c.195-.202.451-.302.708-.312.257.01.513.109.708.312l8.023 8.031c.411.425.539.749-.059.749z"></path>
                              </CSection2DetailsRowSvg>
                              <CSection2Span1AfterSvg className="ContactDetails__ContactDetailLabel-sc-1gubtf7-8 gxVRDD">
                                Mobile:
                              </CSection2Span1AfterSvg>
                              <CSection2Span2AfterSvg className="ContactDetails__ContactDetailValue-sc-1gubtf7-9 hnfmlH">
                              {selectedContact.mobile}
                              </CSection2Span2AfterSvg>
                            </ContactSection2DetailsRow>
                            <ContactSection2DetailsRow className="ContactDetails__ContactDetailRow-sc-1gubtf7-7 kyrzsA">
                              <CSection2DetailsRowSvg
                                viewBox="0 0 20 20"
                                height="20"
                                width="20"
                                aria-hidden="true"
                                focusable="false"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                className="sc-AxjAm dQgIel"
                              >
                                <path d="M14.004 0H5.996A1.996 1.996 0 004 1.996v16.007C4 19.106 4.894 20 5.996 20h8.007A1.997 1.997 0 0016 18.004V1.996A1.996 1.996 0 0014.004 0zM10 19c-.69 0-1.25-.447-1.25-1s.56-1 1.25-1 1.25.447 1.25 1-.56 1-1.25 1zm4-3H6V2h8v14z"></path>
                              </CSection2DetailsRowSvg>
                              <CSection2Span1AfterSvg className="ContactDetails__ContactDetailLabel-sc-1gubtf7-8 gxVRDD">
                                Work:
                              </CSection2Span1AfterSvg>
                              <CSection2Span2AfterSvg className="ContactDetails__ContactDetailValue-sc-1gubtf7-9 hnfmlH">
                              {selectedContact.workNumber}
                              </CSection2Span2AfterSvg>
                            </ContactSection2DetailsRow>
                            <ContactSection2DetailsRow className="ContactDetails__ContactDetailRow-sc-1gubtf7-7 kyrzsA">
                              <CSection2DetailsRowSvg
                                viewBox="0 0 24 24"
                                height="20"
                                width="20"
                                aria-hidden="true"
                                focusable="false"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                className="sc-AxjAm dQgIel"
                              >
                                <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4.7l-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path>
                              </CSection2DetailsRowSvg>
                              <CSection2Span1AfterSvg className="ContactDetails__ContactDetailLabel-sc-1gubtf7-8 gxVRDD">
                                Email:
                              </CSection2Span1AfterSvg>
                              <CSection2Span2AfterSvg className="ContactDetails__ContactDetailValue-sc-1gubtf7-9 hnfmlH">
                              {selectedContact.email}
                              </CSection2Span2AfterSvg>
                            </ContactSection2DetailsRow>
                          </ContactSection2DetailsDiv>
                        </ContactDetailsDividerSection2>
                        <ContactDetailsDivider3 className="ContactDetails__Divider-sc-1gubtf7-3 eKtgsK"></ContactDetailsDivider3>
                        <ContactDetailsDividerSection3 className="ContactDetails__Section-sc-1gubtf7-4 hZvtxh">
                          <ContactDetailsDividerSection33H3 className="ContactDetails__SectionHeader-sc-1gubtf7-5 eFXpIL">
                            Recent Conversations
                          </ContactDetailsDividerSection33H3>
                          <div>
                            {}
                            {convos.map(convo=>(
                              <>
                              <ContactDetailsChatD className="RecentConversations__MessageContainer-sc-1tr4pbl-0 ezApHO">
                              <ContactDetailsChatImage
                                src={convo.messages[0].from.contactPicture.url}
                                alt="Contact Avatar"
                                className="Avatar__Image-sc-1gddwuf-0 kaqgMw"
                              />                                

                              <ContactDetailsDivAfterChatImage className="RecentConversations__InfoContainer-sc-1tr4pbl-1 iOpVYW">
                                <ContactDetailsSpan1AfterChat className="RecentConversations__Title-sc-1tr4pbl-2 kZfYCs">
                                  {convo.messages[0].contents}
                                </ContactDetailsSpan1AfterChat>
                                <ContactDetailsSpan2AfterChat className="RecentConversations__Timestamp-sc-1tr4pbl-3 iGfaLP">
                                  {moment(convo.messages[0].updatedAt).fromNow()}{" "}
                                </ContactDetailsSpan2AfterChat>
                              </ContactDetailsDivAfterChatImage>
                            </ContactDetailsChatD>
                              </>
                              
                            ))}
                            {/* {allData.messagesTo.concat(allData.messagesFrom).filter(messagesWithUser).sort((firstEle,secondEle) => {console.log("aaaa",firstEle, secondEle, moment(firstEle.updatedAt).isBefore(secondEle.updatedAt));if (moment(firstEle.updatedAt).isBefore(secondEle.updatedAt)){return 1} else if (moment(secondEle.updatedAt).isBefore(firstEle.updatedAt)) {return -1} else {return 0}}).map(message => (
                              <>
                              <ContactDetailsChatD className="RecentConversations__MessageContainer-sc-1tr4pbl-0 ezApHO">
                              {message.from.id === profileID ? (
                                <>
                              <ContactDetailsChatImage
                                src={allData.contactPicture.url}
                                alt="Contact Avatar"
                                className="Avatar__Image-sc-1gddwuf-0 kaqgMw"
                              />                                
                                </>
                              ):(
                                <>
                              <ContactDetailsChatImage
                                src={selectedContact.contactPicture.url}
                                alt="Contact Avatar"
                                className="Avatar__Image-sc-1gddwuf-0 kaqgMw"
                              />
                                </>
                              )}
                              <ContactDetailsDivAfterChatImage className="RecentConversations__InfoContainer-sc-1tr4pbl-1 iOpVYW">
                                <ContactDetailsSpan1AfterChat className="RecentConversations__Title-sc-1tr4pbl-2 kZfYCs">
                                  {message.contents}
                                </ContactDetailsSpan1AfterChat>
                                <ContactDetailsSpan2AfterChat className="RecentConversations__Timestamp-sc-1tr4pbl-3 iGfaLP">
                                  {moment(message.updatedAt).fromNow()}{" "}
                                </ContactDetailsSpan2AfterChat>
                              </ContactDetailsDivAfterChatImage>
                            </ContactDetailsChatD>
                              </>
                            ))} */}

                          </div>
                        </ContactDetailsDividerSection3>
                      </ContactDetailsContainer>
                          </>
                        ): (
                          <>
                          {/* {console.log("SC", selectedContact)} */}
                          </>
                        )
                      }
                      
                    </SingleContactDetailsMainDiv>
                  </MainInsideRightDiv>
                </MainInsideContactDiv>
              </MainInsideContentDiv>
            </MainInsideSection>
          </MainInnerSection>
            </>
          )}
          {step === 1 && (
            <>
            <MainInnerSection className="Routes__Container-kfwx58-0 hoiTKx">
            <MainInsideSection className="Page__Container-adlajs-0 iGHmFf">
              <MainInsideContentDiv className="Page__Content-adlajs-1 ciiOPl">
                <MainInsideH1Heading className="ContactsPage__PageHeading-sc-1ewu7oo-0 haeIQk">
                  Find Possible Contacts
                </MainInsideH1Heading>
                <MainInsideContactDiv className="ContactsPage__RowContainer-sc-1ewu7oo-1 kaeyif">
                  <MainInsideLeftDiv className="ContactsPage__ContentContainer-sc-1ewu7oo-2 ContactsPage__ContactsListContainer-sc-1ewu7oo-3 bgSENQ">
                    <ContactsListDiv className="ContactsList__Container-sc-4pmjvq-0 fRJNWk">
                      <SearchContactsInput
                        placeholder="Search..."
                        aria-label="Search for contacts"
                        type="search"
                        className="SearchBar__Input-sc-10u3mjb-0 gGgrxN"
                        
                        onChange={findPossibleContacts}
                      />
                      <ContactListUl className="ContactsList__List-sc-4pmjvq-1 jwgxls">
                      
                        
                        { possibleContacts !== undefined && possibleContacts.length > 0 ? (
                                <>
                                {console.log("TestA")}
                                {possibleContacts.map(contact => (
                                  <>
                                  
                        <ContactListLi onClick={() => {setSelectedContact(contact)}}>
                        <ContactListLiDiv className="ContactListItem__Container-sc-6zfn3o-0 kvYBdu">
                        {contact.contactPicture!==null ? (
                <>
                              <MainContactsImage
                                src={contact.contactPicture.url}
                                alt="Contact Avatar"
                                className="Avatar__Image-sc-1gddwuf-0 jPaKQM"
                              />
                </>
              ):(
                <>
                <MainContactsImage
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAADNBAMAAADpkulaAAAAElBMVEXc1KbMx7A/Egb/+dwkQmyV1Oi7WMeAAAAAz0lEQVR42u3WSwrCMBQF0ExcgbgBxbmldQW28/rb/1acqKDSkIEKeT33TR850HBD0/UvGROHw+FwOBwOh8PhcDgcDofzLee0LsuWw+FwOBzODJ1Nm8uew+FwOBzObJzjsrlPG8I5t2WpxmnKPlw1TrD70R/90R/9iX8/+anFCfy+ZWdVi6M/+qM/7kd/KnN26TOLghM4HA6Hw+H81rn0jxyyfwXdc2/gcDjhnUmse13hcDixnLfT+ymsy+4NHA4nvFMaDofD4XA4HA6HE8C5AdnNl/zz8GiBAAAAAElFTkSuQmCC"
                                alt="Contact Avatar"
                                className="Avatar__Image-sc-1gddwuf-0 jPaKQM"
                              />
                </>
              )}

                              <ContactItemDiv className="ContactListItem__ContactsDetailsContainer-sc-6zfn3o-1 iXVqdu">
                                {/*<ContactItemSpan1 className="ContactListItem__ContactName-sc-6zfn3o-2 cMdBAk">Birthe Schook</ContactItemSpan1>*/}
                                <ContactItemSpan1 className="ContactListItem__ContactName-sc-6zfn3o-2 cMdBAk">
                                  {contact.forename} {contact.surname}
                                </ContactItemSpan1>
                                <ContactItemSpan2 className="ContactListItem__ContactUsername-sc-6zfn3o-3 bZlGkk">
                                {contact.job}
                                </ContactItemSpan2>
                                <ContactItemSpan3 className="ContactListItem__ContactEmail-sc-6zfn3o-4 fnPulZ">
                                  {contact.jobDescription}
                                </ContactItemSpan3>
                              </ContactItemDiv>
                            </ContactListLiDiv>
                        </ContactListLi>
                                </>
                                ))}
                                </>
                              ) : (
                                <>
                                </>
                              )}
                        
                      </ContactListUl>
                    </ContactsListDiv>
                  </MainInsideLeftDiv>

                  <MainInsideRightDiv className="ContactsPage__ContentContainer-sc-1ewu7oo-2 ContactsPage__ContactsDetailsContainer-sc-1ewu7oo-4 gJELcz">
                    <SingleContactDetailsMainDiv className="ContactDetails__MainContainer-sc-1gubtf7-0 bGPHuI">
                      <SingleDetailsBackButton
                        aria-label="Back Button"
                        className="ContactDetails__BackButton-sc-1gubtf7-2 eAipaH"
                      >
                        <SingleDetailsBackButtonSvg
                          viewBox="0 0 24 24"
                          height="30"
                          width="30"
                          aria-hidden="true"
                          focusable="false"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          className="sc-AxjAm dQgIel"
                        >
                          <g data-name="Layer 2">
                            <path
                              d="M13.83 19a1 1 0 01-.78-.37l-4.83-6a1 1 0 010-1.27l5-6a1 1 0 011.54 1.28L10.29 12l4.32 5.36a1 1 0 01-.78 1.64z"
                              data-name="arrow-ios-back"
                            ></path>
                          </g>
                        </SingleDetailsBackButtonSvg>
                      </SingleDetailsBackButton>
                      {
                        selectedContact !== null ? (
                          <>
                          {/* {console.log(selectedContact)} */}
                          <ContactDetailsContainer className="ContactDetails__DetailsContainer-sc-1gubtf7-1 gBnRzM">
                        <ContactDetailsHeader className="ContactDetailsHeader__Header-m73fog-0 fqRgHC">
                        {selectedContact.contactPicture!==null ? (
                          <>
                          <ContactDetailsSingleImage
                            src={selectedContact.contactPicture.url}
                            alt="Contact Profile Image"
                            className="Avatar__Image-sc-1gddwuf-0 bLUeE"
                          />
                          </>
                        ):(
                          <>
                          <ContactDetailsSingleImage
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAADNBAMAAADpkulaAAAAElBMVEXc1KbMx7A/Egb/+dwkQmyV1Oi7WMeAAAAAz0lEQVR42u3WSwrCMBQF0ExcgbgBxbmldQW28/rb/1acqKDSkIEKeT33TR850HBD0/UvGROHw+FwOBwOh8PhcDgcDofzLee0LsuWw+FwOBzODJ1Nm8uew+FwOBzObJzjsrlPG8I5t2WpxmnKPlw1TrD70R/90R/9iX8/+anFCfy+ZWdVi6M/+qM/7kd/KnN26TOLghM4HA6Hw+H81rn0jxyyfwXdc2/gcDjhnUmse13hcDixnLfT+ymsy+4NHA4nvFMaDofD4XA4HA6HE8C5AdnNl/zz8GiBAAAAAElFTkSuQmCC"
                            alt="Contact Profile Image"
                            className="Avatar__Image-sc-1gddwuf-0 bLUeE"
                          />
                          </>
                        )}
                          <ContactDetailsHeaderDiv1 className="ContactDetailsHeader__HeaderDetails-m73fog-3 gYZaiX">
                            <ContactDetailsHeaderDiv2 className="ContactDetailsHeader__Column-m73fog-2 fmzbGl">
                              <ContactDetailsName className="ContactDetailsHeader__ContactName-m73fog-4 gkrwxG">
                                {selectedContact.forename} {selectedContact.surname}
                                <ContactDetailsGreenDot
                                  title="Online"
                                  className="ContactDetailsHeader__UserStatus-m73fog-6 cfJRZG"
                                ></ContactDetailsGreenDot>
                              </ContactDetailsName>
                              <ContactDetailsCountry className="ContactDetailsHeader__ContactCountry-m73fog-5 kbBllw">
                              {selectedContact.country}
                              </ContactDetailsCountry>
                            </ContactDetailsHeaderDiv2>
                            <ContactDetailsChatDiv className="ContactDetailsHeader__Row-m73fog-1 gbVsPW">
                              <ContactDetailsChatButton className="Button__Container-sc-1ltq5rw-0 hqukir">
                                <ContactDetailsChatSvg
                                  viewBox="0 0 20 20"
                                  height="18"
                                  width="18"
                                  aria-hidden="true"
                                  focusable="false"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="sc-AxjAm dQgIel"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                                    clipRule="evenodd"
                                  ></path>
                                </ContactDetailsChatSvg>
                                Chat
                              </ContactDetailsChatButton>
                              {
                                !allData.contacts.some(contact=>contact.id===selectedContact.id)?(
                                  <>
                                <ContactDetailsChatButton className="Button__Container-sc-1ltq5rw-0 hqukir" onClick={()=>{addContact()}}>
                                <ContactDetailsChatSvg
                                  viewBox="0 0 20 20"
                                  height="18"
                                  width="18"
                                  aria-hidden="true"
                                  focusable="false"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="sc-AxjAm dQgIel"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                                    clipRule="evenodd"
                                  ></path>
                                </ContactDetailsChatSvg>
                                Add Contact
                              </ContactDetailsChatButton>
                                  </>
                                ): (
                                  <>
                                                                <ContactDetailsChatButton className="Button__Container-sc-1ltq5rw-0 hqukir">
                                <ContactDetailsChatSvg
                                  viewBox="0 0 20 20"
                                  height="18"
                                  width="18"
                                  aria-hidden="true"
                                  focusable="false"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="sc-AxjAm dQgIel"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                                    clipRule="evenodd"
                                  ></path>
                                </ContactDetailsChatSvg>
                                Remove Contact
                              </ContactDetailsChatButton>
                                  </>
                                )
                              }

                            </ContactDetailsChatDiv>
                          </ContactDetailsHeaderDiv1>
                        </ContactDetailsHeader>
                        <ContactDetailsDivider1 className="ContactDetails__Divider-sc-1gubtf7-3 eKtgsK"></ContactDetailsDivider1>
                        <ContactDetailsDividerSection1 className="ContactDetails__Section-sc-1gubtf7-4 hZvtxh">
                          <ContactDetailsSection1H3 className="ContactDetails__SectionHeader-sc-1gubtf7-5 eFXpIL">
                            Bio
                          </ContactDetailsSection1H3>
                          <ContactDetailsSection1P>
                            {selectedContact.bio}
                          </ContactDetailsSection1P>
                        </ContactDetailsDividerSection1>
                        <ContactDetailsDivider2 className="ContactDetails__Divider-sc-1gubtf7-3 eKtgsK"></ContactDetailsDivider2>
                        <ContactDetailsDividerSection2 className="ContactDetails__Section-sc-1gubtf7-4 hZvtxh">
                          <ContactDetailsDividerSection2H3 className="ContactDetails__SectionHeader-sc-1gubtf7-5 eFXpIL">
                            Contact
                          </ContactDetailsDividerSection2H3>
                          <ContactSection2DetailsDiv className="ContactDetails__ContactDetailsContainer-sc-1gubtf7-6 dhuGLj">
                            <ContactSection2DetailsRow className="ContactDetails__ContactDetailRow-sc-1gubtf7-7 kyrzsA">
                              <CSection2DetailsRowSvg
                                viewBox="0 0 20 20"
                                height="20"
                                width="20"
                                aria-hidden="true"
                                focusable="false"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                className="sc-AxjAm dQgIel"
                              >
                                <path d="M18.672 11H17v6c0 .445-.194 1-1 1h-4v-6H8v6H4c-.806 0-1-.555-1-1v-6H1.328c-.598 0-.47-.324-.06-.748L9.292 2.22c.195-.202.451-.302.708-.312.257.01.513.109.708.312l8.023 8.031c.411.425.539.749-.059.749z"></path>
                              </CSection2DetailsRowSvg>
                              <CSection2Span1AfterSvg className="ContactDetails__ContactDetailLabel-sc-1gubtf7-8 gxVRDD">
                                Mobile:
                              </CSection2Span1AfterSvg>
                              <CSection2Span2AfterSvg className="ContactDetails__ContactDetailValue-sc-1gubtf7-9 hnfmlH">
                              {selectedContact.mobile}
                              </CSection2Span2AfterSvg>
                            </ContactSection2DetailsRow>
                            <ContactSection2DetailsRow className="ContactDetails__ContactDetailRow-sc-1gubtf7-7 kyrzsA">
                              <CSection2DetailsRowSvg
                                viewBox="0 0 20 20"
                                height="20"
                                width="20"
                                aria-hidden="true"
                                focusable="false"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                className="sc-AxjAm dQgIel"
                              >
                                <path d="M14.004 0H5.996A1.996 1.996 0 004 1.996v16.007C4 19.106 4.894 20 5.996 20h8.007A1.997 1.997 0 0016 18.004V1.996A1.996 1.996 0 0014.004 0zM10 19c-.69 0-1.25-.447-1.25-1s.56-1 1.25-1 1.25.447 1.25 1-.56 1-1.25 1zm4-3H6V2h8v14z"></path>
                              </CSection2DetailsRowSvg>
                              <CSection2Span1AfterSvg className="ContactDetails__ContactDetailLabel-sc-1gubtf7-8 gxVRDD">
                                Work:
                              </CSection2Span1AfterSvg>
                              <CSection2Span2AfterSvg className="ContactDetails__ContactDetailValue-sc-1gubtf7-9 hnfmlH">
                              {selectedContact.workNumber}
                              </CSection2Span2AfterSvg>
                            </ContactSection2DetailsRow>
                            <ContactSection2DetailsRow className="ContactDetails__ContactDetailRow-sc-1gubtf7-7 kyrzsA">
                              <CSection2DetailsRowSvg
                                viewBox="0 0 24 24"
                                height="20"
                                width="20"
                                aria-hidden="true"
                                focusable="false"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                className="sc-AxjAm dQgIel"
                              >
                                <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4.7l-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path>
                              </CSection2DetailsRowSvg>
                              <CSection2Span1AfterSvg className="ContactDetails__ContactDetailLabel-sc-1gubtf7-8 gxVRDD">
                                Email:
                              </CSection2Span1AfterSvg>
                              <CSection2Span2AfterSvg className="ContactDetails__ContactDetailValue-sc-1gubtf7-9 hnfmlH">
                              {selectedContact.email}
                              </CSection2Span2AfterSvg>
                            </ContactSection2DetailsRow>
                          </ContactSection2DetailsDiv>
                        </ContactDetailsDividerSection2>
                        <ContactDetailsDivider3 className="ContactDetails__Divider-sc-1gubtf7-3 eKtgsK"></ContactDetailsDivider3>
                        <ContactDetailsDividerSection3 className="ContactDetails__Section-sc-1gubtf7-4 hZvtxh">
                          <ContactDetailsDividerSection33H3 className="ContactDetails__SectionHeader-sc-1gubtf7-5 eFXpIL">
                            Recent Conversations
                          </ContactDetailsDividerSection33H3>
                          <div>
                            {}
                            {convos.map(convo=>(
                              <>
                              <ContactDetailsChatD className="RecentConversations__MessageContainer-sc-1tr4pbl-0 ezApHO">
                              <ContactDetailsChatImage
                                src={convo.messages[0].from.contactPicture.url}
                                alt="Contact Avatar"
                                className="Avatar__Image-sc-1gddwuf-0 kaqgMw"
                              />                                

                              <ContactDetailsDivAfterChatImage className="RecentConversations__InfoContainer-sc-1tr4pbl-1 iOpVYW">
                                <ContactDetailsSpan1AfterChat className="RecentConversations__Title-sc-1tr4pbl-2 kZfYCs">
                                  {convo.messages[0].contents}
                                </ContactDetailsSpan1AfterChat>
                                <ContactDetailsSpan2AfterChat className="RecentConversations__Timestamp-sc-1tr4pbl-3 iGfaLP">
                                  {moment(convo.messages[0].updatedAt).fromNow()}{" "}
                                </ContactDetailsSpan2AfterChat>
                              </ContactDetailsDivAfterChatImage>
                            </ContactDetailsChatD>
                              </>
                              
                            ))}
                            {/* {allData.messagesTo.concat(allData.messagesFrom).filter(messagesWithUser).sort((firstEle,secondEle) => {console.log("aaaa",firstEle, secondEle, moment(firstEle.updatedAt).isBefore(secondEle.updatedAt));if (moment(firstEle.updatedAt).isBefore(secondEle.updatedAt)){return 1} else if (moment(secondEle.updatedAt).isBefore(firstEle.updatedAt)) {return -1} else {return 0}}).map(message => (
                              <>
                              <ContactDetailsChatD className="RecentConversations__MessageContainer-sc-1tr4pbl-0 ezApHO">
                              {message.from.id === profileID ? (
                                <>
                              <ContactDetailsChatImage
                                src={allData.contactPicture.url}
                                alt="Contact Avatar"
                                className="Avatar__Image-sc-1gddwuf-0 kaqgMw"
                              />                                
                                </>
                              ):(
                                <>
                              <ContactDetailsChatImage
                                src={selectedContact.contactPicture.url}
                                alt="Contact Avatar"
                                className="Avatar__Image-sc-1gddwuf-0 kaqgMw"
                              />
                                </>
                              )}
                              <ContactDetailsDivAfterChatImage className="RecentConversations__InfoContainer-sc-1tr4pbl-1 iOpVYW">
                                <ContactDetailsSpan1AfterChat className="RecentConversations__Title-sc-1tr4pbl-2 kZfYCs">
                                  {message.contents}
                                </ContactDetailsSpan1AfterChat>
                                <ContactDetailsSpan2AfterChat className="RecentConversations__Timestamp-sc-1tr4pbl-3 iGfaLP">
                                  {moment(message.updatedAt).fromNow()}{" "}
                                </ContactDetailsSpan2AfterChat>
                              </ContactDetailsDivAfterChatImage>
                            </ContactDetailsChatD>
                              </>
                            ))} */}

                          </div>
                        </ContactDetailsDividerSection3>
                      </ContactDetailsContainer>
                          </>
                        ): (
                          <>
                          {/* {console.log("SC", selectedContact)} */}
                          </>
                        )
                      }
                      
                    </SingleContactDetailsMainDiv>
                  </MainInsideRightDiv>
                </MainInsideContactDiv>
              </MainInsideContentDiv>
            </MainInsideSection>
          </MainInnerSection>
            </>
          )}

          {step === 2 && (
            <MainInnerSection className="Routes__Container-kfwx58-0 hoiTKx">
            <MainInsideSection className="Page__Container-adlajs-0 iGHmFf">
              <MainInsideContentDiv className="Page__Content-adlajs-1 ciiOPl">
                <MainInsideH1Heading className="ContactsPage__PageHeading-sc-1ewu7oo-0 haeIQk">
                  Settings
                </MainInsideH1Heading>
                <MainInsideContactDiv className="ContactsPage__RowContainer-sc-1ewu7oo-1 kaeyif">
                  <ContactDetailsDividerSection1>
                  <ContactDetailsSection1H3 className="ContactDetails__SectionHeader-sc-1gubtf7-5 eFXpIL">
                            Forename
                          </ContactDetailsSection1H3>
                          <ContactDetailsSection1P>
                            <input value={tempProfile.forename} name="forename" onChange={handleInputChange}></input>
                          </ContactDetailsSection1P>
                  <ContactDetailsSection1H3 className="ContactDetails__SectionHeader-sc-1gubtf7-5 eFXpIL">
                            Surname
                          </ContactDetailsSection1H3>
                          <ContactDetailsSection1P>
                          <input value={tempProfile.surname} name="surname" onChange={handleInputChange}></input>
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
                          <input value={allData.email} name="email" onChange={handleInputChange}></input>
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
          )}
          
        </TopDiv>
      </MainDiv>
    </StyledBox>
  );
};

export default App;
