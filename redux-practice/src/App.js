import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import Box from './component/Box';

function App() {
  const count = useSelector(state => state.count);
  let id = useSelector(state => state.id);
  let password = useSelector(state => state.password);

  const dispatch = useDispatch();

  const increment = () => {
    dispatch({type: 'INCREMENT', payload: {num: 5} });
  }

  const login = () => {
    dispatch({type: 'LOGIN', payload: {id: 'hyerin', password: '123'}});
  }

  const decrement = () => {
    dispatch({type: 'DECREMENT'});
  }

  return (
    <div>
      <h1>{id}, {password}</h1>
      <h5>{count}</h5>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
      <button onClick={login}>로그인</button>
      <Box />
    </div>
  );
}

export default App;
