import { useState, useEffect, useContext } from "react";
import axios from "axios";
import './account.css';
import MyContext from "../context/MyContext";

const Account = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [ready, setReady] = useState(false);
  const { user, setUser } = useContext(MyContext)
  const [selected, setSelected] = useState('none');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  useEffect(() => {
    if (token) axios.post('http://localhost:5000/user/check-token', { token: token }).then(response => {
      if (response.data.error) {
        localStorage.removeItem('token');
        setToken(localStorage.getItem('token'));
      }
      else setUser(response.data.user);
    })
    setReady(true);
  }, [token, setUser]);
  const handleLogin = (e) => {
    e.preventDefault();
    if (password.length < 3) {
      setError('Who are you kidding with that password )o)');
      return null;
    }
    axios.post('http://localhost:5000/user/login', { username: username, password: password }).then(response => {
      if (response.data.error) setError(response.data.error)
      else {
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token)
      }
    })
    return null;
  }

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) return null;
    if (password.length < 3) {
      setError('Please use a longer password ...');
      return null;
    }
    axios.post('http://localhost:5000/user/register', { username: username, password: password }).then(response => {
      if (response.data.error) setError(response.data.error);
    })
  }

if (!token && ready) {
  return (
    <div>
      <div className="booking-login-header">
      <div
        role="button"
        tabIndex={0}
        onClick={() =>{
          selected === "login" ? setSelected("none") : setSelected("login");
          setError('');
        }}
        className={
          selected === "login"
            ? "booking-login-header-div booking-login-selected"
            : "booking-login-header-div"
        }
      >
        <p className="booking-login-maintext">Already have an account ?</p>
        <p className="booking-login-subtext">Log in</p>
      </div>
      <div
        role="button"
        tabIndex={0}
        onClick={() =>
          {
            selected === "register"
            ? setSelected("none")
            : setSelected("register");
            setError('')
          }
        }
        className={
          selected === "register"
            ? "booking-login-header-div booking-login-selected"
            : "booking-login-header-div"
        }
      >
        <p className="booking-login-maintext">
          You don't have an account yet ?
        </p>
        <p className="booking-login-subtext">
          Register here
        </p>
      </div>
    </div>
    <form className={selected === 'register' ? 'register-form' : 'hidden'} onSubmit={handleRegister} >
      <label htmlFor="">Username</label>
      <input required value={username} onChange={(e) => setUsername(e.target.value)} />
      <label htmlFor="">Password</label>
      <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <label htmlFor="">Confirm Password</label>
      <input required type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      <button>Register</button>
    </form>
    <form className={selected === 'login' ? 'login-form' : 'hidden'} onSubmit={handleLogin} >
      <label htmlFor="">Username</label>
      <input required value={username} onChange={(e) => setUsername(e.target.value)} />
      <label htmlFor="">Password</label>
      <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button>Log in</button>
    </form>
    {error === '' ? null : <h4 className="account-error-message">{error}</h4>}
    </div>
  );
} else {
  return <div>
    <p>Welcome {user?.username}</p>
    <button onClick={() => {
      localStorage.removeItem('token');
      setToken(localStorage.getItem('token'));
      setUser([]);
    }}>Disconnect</button>
  </div>;
}
};

export default Account;
