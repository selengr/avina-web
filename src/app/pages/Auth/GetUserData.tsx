import { useEffect } from 'react';
import { Util } from 'utils';
import { useNavigate } from 'react-router-dom';
import { Cookie } from 'storage-manager-js';

export function GetUserData() {
  const navigate = useNavigate();
  useEffect(() => {
    Cookie.set('localAuth', { loggedIn: true }, { useSecure: true });
    (async () => {
      await fetchUserData();
    })();
  }, []);
  const fetchUserData = async () => {
    try {
      const result = await Util.GetMe();
      if (result) {
        Util.UserInfoData();
        navigate('/');
        navigate(0);
      }
    } catch (e) {
      console.error(e);
    }
  };
  return null;
}
