import React from 'react';
import PropTypes from 'prop-types';
import { InputElement } from '../styles';

function Input({ children: { name, placeholder, inputType } }) {
  return (
    <InputElement
      type={ inputType }
      style={ inputStyle }
      name={ name }
      id={ name }
      placeholder={ placeholder }
    />
  );
}

Input.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  inputType: PropTypes.bool,
}.isRequired;

export default Input;
