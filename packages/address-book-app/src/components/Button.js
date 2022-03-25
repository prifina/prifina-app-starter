import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


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




export const Button = ({
  onClickFunc,
  title,
  svgString,
  ...props
}) => (
  <ContactDetailsChatButton className="Button__Container-sc-1ltq5rw-0 hqukir" onClick={()=>{onClickFunc()}}>
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
            d={svgString}
            clipRule="evenodd"
          ></path>
        </ContactDetailsChatSvg>
        {title}
      </ContactDetailsChatButton>
);

Button.propTypes = {
  onClickFunc: PropTypes.func,
  title: PropTypes.string,
  svgString: PropTypes.string
};

