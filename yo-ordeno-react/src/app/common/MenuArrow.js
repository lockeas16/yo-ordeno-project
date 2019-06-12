import styled from "styled-components";

export default styled.div`
  font-size: 30px;
  position: relative;
  display: inline-block;
  width: 2em;
  height: 2em;
  cursor: pointer;

  & > span {
    position: absolute;
    top: 50%;
    left: 0;
    display: block;
    width: 100%;
    height: 0.2em;
    margin-top: -0.1em;
    background-color: #000;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-transition: background-color 0.3s;
    transition: background-color 0.3s;
  }
  & > span::after,
  & > span::before {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    content: "";
    -webkit-transition: -webkit-transform 0.3s;
    transition: transform 0.3s;
  }
  & > span::before {
    -webkit-transform: translateY(-0.5em);
    transform: translateY(-0.5em);
  }
  & > span::after {
    -webkit-transform: translateY(0.5em);
    transform: translateY(0.5em);
  }
  &.bt-menu-open span::before {
    -webkit-transform: translateY(-0.36em) translateX(0.65em) rotate(45deg)
      scaleX(0.6);
    transform: translateY(-0.35em) translateX(-0.65em) rotate(-45deg)
      scaleX(0.6);
  }
  &.bt-menu-open span::after {
    -webkit-transform: translateY(0.36em) translateX(0.65em) rotate(-45deg)
      scaleX(0.6);
    transform: translateY(0.35em) translateX(-0.65em) rotate(45deg) scaleX(0.6);
  }
`;
