import { UserProfileInterface } from "types/SystemTypes";
import { FC } from "react";
import UserProfile from "./UserProfile";
import { Flex } from "antd";
import GeolocationContainer from "./Geolocation/GeolocationContainer";
import ChildFunctionDemo from "./ChildFunction/ChildFunctionDemo";
import Unhandled from "./Form/Unhandled";
import Handled from "./Form/Handled";
import Refs from "./Form/Refs";
import Transition from "./Form/Transition";
import SvgTest from "./Form/SvgTest";
import TaskComponent from "./Hooks/todo/TaskComponent";
import ToDoMain from "./Hooks/todo/ToDoMainComponent";
import ToDoMainComponent from "./Hooks/todo/ToDoMainComponent";
const DemoIndex: FC = () => {
  const users: UserProfileInterface[] = [
    {
      name: "John",
      photo: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      age: 40,
      address: "上海",
    },

    {
      name: "Jolly",
      photo: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      age: 12,
      address: "上海",
    },
  ];

  return (
    <>
      <Flex gap={"large"}>
        {users.map((_, index) => (
          <UserProfile key={index} {..._} />
        ))}
      </Flex>

      <GeolocationContainer />

      <ChildFunctionDemo />

      <Unhandled latitude={1} longtitude={2}/>

      <Handled />

      <Refs />

      <Transition/>

      <SvgTest height={200} width={200} />
      <ToDoMainComponent />
    </>
  );
};

export default DemoIndex;
