import axios from 'axios';
import { REMOTE_URL, USE_MOCK, REMOTE_URL_MOCK } from './constants';
axios.defaults.withCredentials = true;
export const get = async (Path, PARAMS) => {
  var API_URL = REMOTE_URL;
  var useMock = PARAMS.find(
    (item) => item.key === USE_MOCK && item.value === 'true',
  );
  if (useMock) {
    API_URL = REMOTE_URL_MOCK;
  }

  API_URL += `${Path}`;

  const headers = {
    luso_token: 'c6c54ce4-dc21-4e87-bdab-482dc6f0c96b',
    'Content-Type': 'application/json',
  };
  PARAMS.map((param, i) => {
    if (i == 0) {
      API_URL += `?${param.key}=${param.value}`;
    } else {
      API_URL += `&${param.key}=${param.value}`;
    }
  });
  var res = await axios.get(API_URL, { headers });
  return res.data;
};

export const save = async (Path, PARAMS, body) => {
  var API_URL = REMOTE_URL;
  var useMock = PARAMS.find(
    (item) => item.key === USE_MOCK && item.value === 'true',
  );
  if (useMock) {
    API_URL = REMOTE_URL_MOCK;
  }

  API_URL += `${Path}`;

  const headers = {
    luso_token: 'c6c54ce4-dc21-4e87-bdab-482dc6f0c96b',
    'Content-Type': 'application/json',
  };
  PARAMS.map((param, i) => {
    if (i == 0) {
      API_URL += `?${param.key}=${param.value}`;
    } else {
      API_URL += `&${param.key}=${param.value}`;
    }
  });
  var res = await axios.post(API_URL, body, { headers });
  return res.data;
};
