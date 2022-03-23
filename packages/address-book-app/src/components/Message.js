import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Button } from "./Button";
import moment from "moment";

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
export const Message = ({
    message,
    ...props
  }) => (
    <ContactDetailsChatD className="RecentConversations__MessageContainer-sc-1tr4pbl-0 ezApHO" >
    <ContactDetailsChatImage
      src={message.node.from.contactPicture.url}
      alt="Contact Avatar"
      className="Avatar__Image-sc-1gddwuf-0 kaqgMw"
    />                                

    <ContactDetailsDivAfterChatImage className="RecentConversations__InfoContainer-sc-1tr4pbl-1 iOpVYW" >
      <ContactDetailsSpan1AfterChat className="RecentConversations__Title-sc-1tr4pbl-2 kZfYCs">
        {message.node.contents}
      </ContactDetailsSpan1AfterChat>
      <ContactDetailsSpan2AfterChat className="RecentConversations__Timestamp-sc-1tr4pbl-3 iGfaLP">
        {moment(message.node.updatedAt).fromNow()}{" "}
      </ContactDetailsSpan2AfterChat>
    </ContactDetailsDivAfterChatImage>
  </ContactDetailsChatD>
  );
  
  Message.propTypes = {
    message: PropTypes.object

  };
  
  