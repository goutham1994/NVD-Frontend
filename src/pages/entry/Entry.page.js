import React,{useState} from "react"
import'./entry.style.css'
import { LoginForm } from '../../components/login/Login.comp'
import { ResetPassword } from "../../components/password-reset/PasswordReset.comp";

export const Entry = () => {
    const [loginid,setLoginid] = useState("");
    const [password,setPassword] = useState("");
    const [frmLoad,setFrmLoad] = useState("login");
    const handleOnChange = (e) =>
    {
        const{name,value} = e.target;
        switch(name){
            case "loginid":
                setLoginid(value);
                break;
            case "password":
                setPassword(value);
                break;
            default:
                break;
        }
    };
    const handleOnSubmit = (e) =>{
        e.preventDefault();
        if(!loginid||!password){
          return  alert("fill in all details");
        }
        console.log(loginid,password);
    };
    const handleOnResetSubmit = (e) =>{
        e.preventDefault();
        if(!loginid){
          return  alert("fill in Loginid");
        }
        console.log(loginid);
    };
    const formSwitcher =(frmType) =>{
        setFrmLoad(frmType);
    }
  return (
    <div className="entry-page">
        <section className="login-section">
            {frmLoad === 'login' && (<LoginForm 
                handleOnChange={handleOnChange}
                handleOnSubmit={handleOnSubmit}
                formSwitcher={formSwitcher}
                loginid={loginid}
                pass={password}
             />)}
            {frmLoad === 'reset' && (<ResetPassword 
                handleOnChange={handleOnChange}
                handleOnResetSubmit={handleOnResetSubmit}
                formSwitcher={formSwitcher}
                loginid={loginid}
             />)}
              
        </section>
    </div>
  )
}
