import { FC } from "react";
import { UserProfileInterface } from "types/SystemTypes";
import { Card } from 'antd';
const { Meta } = Card;

const UserProfile: FC<UserProfileInterface> = ({
    name,
    photo,
    age,
    address
}) => {
    return (
        <>
            <Card title={name}
            style={{width: '100px'}}
                bordered={false}
                cover={<img alt={name} src={photo} />}>
                 <Meta title={age} description={address} />
            </Card>
        </>
    );
};

export default UserProfile;