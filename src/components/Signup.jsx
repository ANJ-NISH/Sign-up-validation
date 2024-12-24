import React, { useState } from "react";

const Signup=()=>
{
    let [mailval, setMailval]= useState('');
    let [passval, setPassval]=useState('');
    let [cpassval, setCPassval]=useState('');
    
    let [mcolor, setMcolor]=useState('red');
    let [pcolor, setPcolor]=useState('red');
    let [cpcolor, setCPcolor]=useState('red');

    function validateEmail(email)
    {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    function validatePassword(password)
    {
        if(password.length>=8)
        {
            return true;
        }   
        return false;
    }
  
    function validateCpassword(cpassword)
    {
       if(cpassword.length>=8 && cpassword===passval)
       {
        return true;
       }
       return false;
    }

    function formsubmit(e)
    {
        e.preventDefault();

        if(validateEmail(mailval) && validatePassword(passval) && validateCpassword(cpassval))
        {
            alert("Form has been submitted successfully");
        }
        else
        {
            alert("Form cannot be submitted!");
        }
    }


    return( 
    <>
     <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '95vh'}}>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',width: '450px', height: '400px', backgroundColor: '#dddddd', borderRadius: '10px',border: '1px solid #dddddd'}}>
          <form style={{fontFamily: 'consolas'}} onSubmit={(e)=>formsubmit(e)}>
            <label htmlFor="mail-input">Email:</label><br/>
            <input type="text" id="mail-input" required value={mailval} onChange={(e)=> setMailval(e.target.value)} onFocus={()=> setMcolor('blue')} onBlur={(e)=>setMcolor(`${validateEmail(e.target.value)? 'lightgreen': 'red'}`)}  style={{borderColor: `${mcolor}`, outlineColor: `${mcolor}`, width: '280px', height:'20px', fontFamily: 'consolas', fontSize: '15px', borderRadius:'5px'}}/><br/>
            {!validateEmail(mailval) && <p style={{marginTop: '0px', fontSize:'13px', color: 'red'}} id="mail-msg">Invalid Email Format</p>}
            <br/>
            <label htmlFor="pass-input">Password:</label><br/>
            <input type="password" id="pass-input" required value={passval} onChange={(e)=> setPassval(e.target.value)} onFocus={()=>setPcolor('blue')} onBlur={(e)=> setPcolor(`${validatePassword(e.target.value)? 'lightgreen': 'red'}`)} style={{borderColor: `${pcolor}`, outlineColor: `${pcolor}`, width: '280px', height:'20px', fontFamily: 'consolas', fontSize: '15px',borderRadius:'5px'}}/><br/>
            {!validatePassword(passval) && <p style={{marginTop: '0px', fontSize:'13px', color: 'red'}} id="pass-msg">Password must be atleast 8 characters long</p>}
            <br/>
            <label htmlFor="cpass-input">Confirm Password:</label><br/>
            <input type="password" id="cpass-input" required value={cpassval} onChange={(e)=> setCPassval(e.target.value)} onFocus={()=>setCPcolor('blue')} onBlur={(e)=> setCPcolor(`${validateCpassword(e.target.value)? 'lightgreen': 'red'}`)} style={{borderColor: `${cpcolor}`, outlineColor: `${cpcolor}`, width: '280px', height:'20px', fontFamily: 'consolas', fontSize: '15px',borderRadius:'5px'}}/><br/>
            {!validateCpassword(cpassval) && <p style={{marginTop: '0px', fontSize:'13px', color: 'red'}} id="cpass-msg">Passwords do not match</p>}
            <br/>
            <button type="sumbit" style={{marginLeft: '90px', fontFamily: 'consolas', fontSize: '15px', backgroundColor: 'blue', color: 'white', border: '1px solid blue', borderRadius: '4px', padding: '5px'}}>Sign up</button>
          </form>
        </div>
     </div>
    </>
    );
}

export default Signup;