import React, { useEffect, useState } from "react";

export type CustomerProps = {
    innerWidth: number
};

const WithInnerWidth = (Component: React.FC<CustomerProps>) => {
    const innerItem: React.FC = (props)=>{
        return (<Component {...props} innerWidth={12}/>)
    };

    return innerItem;
}

export default WithInnerWidth;
