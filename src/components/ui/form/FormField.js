import React from 'react';
import FormGroup from './FormGroup';
import FormLabel from './FormLabel';
import Input from './Input';

function FormField({label, inputType, name, onChangeInput, id, value}) {
  return (
    <FormGroup>
      {label && <FormLabel htmlFor={id}>{label}</FormLabel>}
      <Input onChange={onChangeInput} id={id} name={name} type={inputType} value={value} />
    </FormGroup>
  );
}

export default FormField;
