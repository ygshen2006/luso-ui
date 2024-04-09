import React from "react";

export interface BaseFieldProps {
  name: string;
  error: boolean;
  label?: string;
  toolTip?: string;
}

export interface DefaultProps {
  name: string;
  label?: string;
  unit?: string;
  isOptional?: boolean;
  helpText?: string | React.ReactNode;
  labelToolTip?: string;
  isRequired?: boolean;
  max?: number;
  min?: number;
  maxLength?: number;
  minLength?: number;
}

const WithFormItem = <FieldType extends BaseFieldProps>(
  Component: React.FC<FieldType>
) => {
  const FormItem: React.FC<
    DefaultProps & Omit<FieldType, keyof BaseFieldProps>
  > = (props) => {
    const componentProps = { ...props } as FieldType;
    return <Component {...componentProps} />;
  };

  return FormItem;
};


export default WithFormItem;