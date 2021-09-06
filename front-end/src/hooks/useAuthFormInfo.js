import { useState, useEffect } from 'react';
import { fieldChangeHandler } from '../utils/handlers';
import { validateInfo } from '../utils/validateInfo';

const useAuthFormValidation = ({ fields, validationSchema }) => {
  const initialState = fields.reduce(
    (accumulator, field) => ({ ...accumulator, [field]: '' }),
    {},
  );
  const [authInfo, setAuthInfo] = useState(() => initialState);
  const [isValidInfo, setInfoValidation] = useState(() => false);

  useEffect(
    () => {
      const { error } = validateInfo({ info: authInfo, schema: validationSchema });
      setInfoValidation(!!error);
    }, [authInfo],
  );

  const handleFieldsChange = fieldChangeHandler(setAuthInfo);

  return { authInfo, handleFieldsChange, isValidInfo };
};

export default useAuthFormValidation;
