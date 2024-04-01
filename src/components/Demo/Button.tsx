import React from "react";
import { GenericContainerProps } from "types/SystemTypes";

const CommonButton = <T extends {}>({ children }: GenericContainerProps<T>) => {
    return <>{children}</>;
};

export default CommonButton;