import React,{useState} from 'react'
import { Form , Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import './SignIn.scss'
import useStore from '../../store/store'


function SignForm() {
  // const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login} = useStore();
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    console.log("hello");
    e.preventDefault();
    await login(email, password);
    console.log("exec");
    console.log(useStore.getState().user);
    if (useStore.getState().user) {
      if (useStore.getState().user.isAdmin) {
        navigate('/dashboard');
      } else {
        navigate("/");
      }
    }
  };


  return (
<Form className='formInputs' onSubmit={handleSubmit}>
    <Form.Group className="mb-3" >
      <Form.Label className='label'>E-Mail :</Form.Label>
      <Form.Control type="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
      <Form.Label className='label' htmlFor="inputPassword5">Password :</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        onChange={(e) => setPassword(e.target.value)}
      />
    </Form.Group>
    <Button variant="primary" type="submit" style={{fontWeight:"bold"}} className='bouton' >
        Sign-in
      </Button>
      {/* {error && <div>{error}</div>} */}

  </Form> 
    )
}

export default SignForm