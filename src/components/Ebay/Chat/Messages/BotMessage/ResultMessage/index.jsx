import "./style.css";

const ResultMessage = ({ message }) => {
  return (
    <div className="message" dangerouslySetInnerHTML={{ __html: message }} />
  );
};

export default ResultMessage;
