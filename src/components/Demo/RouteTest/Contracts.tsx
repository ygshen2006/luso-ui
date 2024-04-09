import { useParams } from "react-router-dom";

const Contracts = () => {
  const contracts = [
    {
      id: 1,
      name: "John",
    },
    {
      id: 2,
      name: "Jolly",
    },
  ];
  const { id } = useParams();
  const selectedUser = () => parseInt(id as string) > 0;
  const renderContracts = () => {
    return (
      <ul>
        {contracts.map((c) => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ul>
    );
  };
  const renderContract = () => {
   return contracts.filter((c) => c.id == parseInt(id as string))[0].name;
  };

  return <>{!selectedUser() ? renderContracts() : renderContract()}</>;
};

export default Contracts;
