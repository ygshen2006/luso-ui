import './style.css';

const PureMessage = ({ message }) => {
  return (
    <p>
      <div>{message}</div>
    </p>
  );
};

export default PureMessage;
