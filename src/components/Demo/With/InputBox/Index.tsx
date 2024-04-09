import WithFormItem, { BaseFieldProps } from "components/Utils/FormItem";
import React from "react";

export type InputBoxProps = BaseFieldProps & { customProp: "test" };
const renderCustomerizeComponent = ({name, error, maxLength}: any) => {
  return <>
    {name}{error}
  </>;
};
const InputBox: React.FC<InputBoxProps> = ({ name, error }) => {
  return <>{renderCustomerizeComponent({name, error})}</>;
};

const InputBoxControl =  WithFormItem<InputBoxProps>(InputBox);
export default InputBoxControl;