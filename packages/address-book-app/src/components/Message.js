import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import moment from "moment";


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

const ContactDetailsChatDS = styled.div`
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

const ContactDetailsSpan2AfterChatSelf = styled.span`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  padding-left: 100%;
`;

const ContactDetailsSpan2AfterChatThem = styled.span`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  padding-right: 100%;
`;
export const Message = ({
    message,
    profile,
    ...props
  }) => (
    <>
    {
      
      message.node.from.id === profile ? (
        <>
        <ContactDetailsSpan2AfterChatSelf>

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
            
  </ContactDetailsSpan2AfterChatSelf>
        </>
      ): (
        <>
        <ContactDetailsSpan2AfterChatThem>
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
  </ContactDetailsSpan2AfterChatThem>
        </>
      )
    }
    
  </>
  );
  
  Message.propTypes = {
    message: PropTypes.object,
    profile: PropTypes.string

  };
  
  