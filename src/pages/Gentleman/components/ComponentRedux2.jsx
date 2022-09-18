import { useSelector } from 'react-redux';

function ComponentRedux2() {
  const  {user }= useSelector(store => store.user);
  return <div>El state del user es: {JSON.stringify(user)}</div>;
}
export default ComponentRedux2;
