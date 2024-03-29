import UseLogin from '../../../Hooks/UseLogin';

const GithubUser = ({ login }) => {
  if (!login) return null;
  var { data, loading, error } = UseLogin(
    `https://api.github.com/users/${login}`,
  );
  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  // if data is not null then show the data
  if (data) {
    return (
      <div style={{ marginRight: '50px' }}>
        <p style={{ float: 'right' }}>
          <img
            style={{ width: '30px', lineHeight: '30px', borderRadius: '50%' }}
            alt={data ? data.login : ''}
            src={data ? data.avatar_url : ''}
          />
        </p>
      </div>
    );
  }
  return null;
};

export default GithubUser;
