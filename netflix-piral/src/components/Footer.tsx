import * as React from "react";

const Footer: React.FC = () => (
  <>
    <footer>
      <p className="text-lightgray">Made with</p>
      <p>
        <a target="_blank" href="https://reactjs.org" rel="noopener noreferrer">
          <img
            id="react-logo"
            title="React"
            src="https://i.imgur.com/gNxwwn1.png"
            height="10"
          />
          &nbsp;React
        </a>
      </p>
      <p className="text-lightgray">and</p>
      <p>
        <a target="_blank" href="https://piral.io" rel="noopener noreferrer">
          <img
            id="piral-logo"
            title="Piral"
            src="https://piral.io/logo-simple.f8667084.png"
            height="10"
          />
          &nbsp;Piral
        </a>
      </p>
      <p>&mdash;</p>
      <p className="copyright">
        ©{" "}
        <a target="_blank" href="https://smapiot.com" rel="noopener noreferrer">
          <img
            id="smapiot-logo"
            title="smapiot"
            src="https://smapiot.com/smapiot_green.03d1162a.svg"
            height="20"
          />
        </a>
      </p>
      <p className="text-lightgray">2021 - {new Date().getFullYear()}</p>
    </footer>
  </>
);

export default Footer;
