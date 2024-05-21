export const Form = (location?: string, id?: string) => {
  // console.log('location', location);
  // const navigate = useNavigate();
  // if (id) {
  //   navigate(`${location}${id}`);
  // } else {
  //   navigate(`${location}`);
  // }
  if (id) {
    window.location.href = `/app${location}${id}`;
  } else {
    window.location.href = `/app${location}`;
  }
};
export const Back = () => {
  window.history.go(-1);
};
