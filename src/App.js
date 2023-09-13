import logo from './logo.svg';
import './App.css';
import {useState, useEffect } from 'react'

function App() {

  const [otp,setOtp] = useState('')
  useEffect(()=>{
    if ('OTPCredential' in window) { 
      console.log('event is there')
    }
  },[])

  useEffect(()=>{
    const ac = new AbortController();
    const otpFill=()=>{
      console.log("navigator",navigator.credentials);
      navigator.credentials.get({
        otp: { transport:['sms'] },
        signal: ac.signal
      }).then(otp => {
        alert(otp.code)
        setOtp(otp.code)
      }).catch(err => {
        console.log(err)
      });
    }

      otpFill()
  })

  return (
    <div className="App">
      <header className="App-header">
     <label>Automatically Fill otp : </label>
        {/* <form action="/verify-otp" method="POST"> 
          <label>Automatically Fill otp : </label>
          <input type="text"
            value={otp}
            onChange={(e)=>setOtp(e.target.value)}
            inputMode="numeric"
           // autoComplete="one-time-code"
            pattern="\d{6}"
            
            required />*/}
        {/* </form> */}

      </header>
    </div>
  );
}

export default App;
