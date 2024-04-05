import { FC } from "react";
import { SvgProperty } from "types/SystemTypes";

const SvgTest: FC<SvgProperty> = ({ width, height }: SvgProperty) => {
  return (
    <>
      <svg height={height} width={width}>
        <circle cx={100} cy={100} r={20} fill="red" />
        <rect x={125} y={100} width={50} height={50} fill="blue" />
      </svg>


      <object type="image/svg+xml" data="../example.svg">
        <param name="roof" value="#roof" />
      </object>
    </>
  );
};

export default SvgTest;
