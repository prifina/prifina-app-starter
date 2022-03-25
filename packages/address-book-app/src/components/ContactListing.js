import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


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
export const ContactListing = ({
    click,
    contact  }) => (
    <ContactListLi onClick={() => {click()}}>
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
                                  {contact.name}
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
  );
  
  ContactListing.propTypes = {
    contact: PropTypes.object,
    click: PropTypes.func,

  };
  
  