import SearchForm from '../../../../ChatLogin/SearchForm';
import './style.css';

const LoginMessage = ({ text, afterLogin }) => {
  return (
    <div className="login-message">
      <div>
        <p>{text}</p>
        <div className="seach-form">
          <SearchForm afterLogin={afterLogin} />
        </div>
      </div>
    </div>
  );
};

export default LoginMessage;
