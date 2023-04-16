/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
function CreateAccount() {
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <Card
      txtcolor="black"
      header="Create an Account"
      status={status}
      body={show ? 
        <CreateForm setShow={setShow}/> : 
        <CreateMsg setShow={setShow}/>}
    />
  )
}

function CreateMsg(props) {
  return(<>
    <h5>Success! Your account has been created, and you are now logged-in.</h5>
  </>);
}

function CreateForm(props) {

  const ctx = React.useContext(UserContext);  

  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSignUp() {
    // get elements
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');
  
    // validate password
    const passwordRegex = /^(?=.*[A-Z]).{8,}$/; // password must have at least 8 characters and one capital letter
    if (!passwordRegex.test(passwordInput.value)) {
      alert('Password must be at least 8 characters and contain a capital letter');
      return;
    }
  
    // create user account with firebase
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailInput.value, passwordInput.value)
      .then((user) => {
        // handle success
      })
      .catch((error) => {
        // handle error
      });
  }
  
  return (<>
    Name<br/>
    <input type="input" 
      className="form-control" 
      id="nameInput"
      placeholder="Enter name" 
      value={name} 
      onChange={e => setName(e.currentTarget.value)} /><br/>

    Email address<br/>
    <input type="input" 
      className="form-control" 
      id="emailInput"
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    Password<br/>
    <input type="password" 
      className="form-control" 
      id="passwordInput"
      placeholder="Enter password" 
      value={password} 
      onChange={e => setPassword(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-primary" 
      onClick={handleSignUp}>Create Account</button>
  </>);
}