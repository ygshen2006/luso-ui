import { UserProfileInterface } from "types/SystemTypes";
import { FC } from "react";
import UserProfile from "./UserProfile";
import { Flex } from "antd";
import CommonButton from "./Button";
import GeolocationContainer from "./Geolocation/GeolocationContainer";
const DemoIndex: FC = () => {
    const users: UserProfileInterface[] = [
        {
            name: "John",
            photo: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
            age: 40,
            address: "上海"
        },

        {
            name: "Jolly",
            photo: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
            age: 12,
            address: "上海"
        }
    ];

    return <>
        <Flex gap={"large"}>
            {users.map((_, index) => <UserProfile key={index} {..._} />)}
        </Flex>

        <GeolocationContainer />
    </>;
};

export default DemoIndex;