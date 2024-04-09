import WithInnerWidth from "components/Utils/WithInnerWidth";
import InputBoxControl from "./InputBox/Index";
const CustomerControl = WithInnerWidth(() => {
  return <></>;
});

const MyTestComponent = () => {
  return (
    <>
      <InputBoxControl name="test" customProp="test" maxLength={12} />
      <CustomerControl />
    </>
  );
};

export default MyTestComponent;
