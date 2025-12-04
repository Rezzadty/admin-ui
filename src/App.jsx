import "./App.css";
import { useState } from 'react';
import SignInPage from "./Pages/signIn";
import SignUpPage from "./Pages/signup";

function App() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <>
      {isSignUp ? (
        <SignUpPage onToggle={() => setIsSignUp(false)} />
      ) : (
        <SignInPage onToggle={() => setIsSignUp(true)} />
      )}
    </>
  );
}

export default App;
