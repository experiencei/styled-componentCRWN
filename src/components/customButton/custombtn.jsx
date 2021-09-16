import React from "react";
import "./custombtn.scss";

export default function Custombtn({children, isGoogleSignin ,...otherprops}) {
    return (
        <div >
         <button className={`${isGoogleSignin ? 'google-sign-in' : ''} custom-button`} {...otherprops}>{children}</button> 
        </div>
    )
}
