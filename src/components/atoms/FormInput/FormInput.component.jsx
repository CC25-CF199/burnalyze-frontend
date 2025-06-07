import { Controller } from 'react-hook-form';

import { InputComponent } from '../Input';

const FormInputComponent = ({ name, control, rules, inputProps }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, formState }) => {
        // eslint-disable-next-line no-unused-vars
        const { ref, ...rest } = field;
        return (
          <InputComponent
            {...inputProps}
            {...rest}
            inputError={formState?.errors?.[name]?.message}
          />
        );
      }}
      rules={rules}
    />
  );
};

export default FormInputComponent;
