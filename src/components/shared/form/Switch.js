import React from 'react'
import styled from 'styled-components'

const Switch = ({ toggleTheme, theme }) => (
  <SelectSwitch>
    <input
      type="checkbox"
      onClick={toggleTheme}
      defaultChecked={theme !== 'main'}
    />
    <span className="slider round"></span>
  </SelectSwitch>
)

const SelectSwitch = styled.label`
  position: relative;
  display: flex;
  width: 60px;
  height: 24px;
  margin-left: auto;
  margin-bottom: 10px;

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + .slider {
      background-color: #FF8500;
    }

    &:focus + .slider {
      box-shadow: 0 0 1px #FF8500;
    }

    &:checked + .slider:before {
      transform: translateX(36px);
    }
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: .4s;

    &:before {
      position: absolute;
      content: "";
      height: 21px;
      width: 20px;
      left: 2px;
      bottom: 2px;
      background-color: white;
      transition: .4s;
    }

    &.round {
      border-radius: 34px;
    }

    &.round:before {
      border-radius: 50%;
    }
  }
`

export default Switch
