export const Address = () => {
  const data = {
    local: {
      // endPoint: 'http://localhost:8009/api/',
      endPoint: `https://psyadevapi.fardaap.com/api/`,
      mResalatEndPoint: `https://testapi.qhami.com/`,
    },
    server: {
      // endPoint: 'https://api.psya.ir/api/',
      endPoint: `${process.env.REACT_APP_API_URL}`,
      mResalatEndPoint: `https://testapi.qhami.com/`,
    },
  };
  return data;
};

export const Excel = () => {
  const data = {
    endPoint: '/import_file.xlsx',
  };
  return data;
};
