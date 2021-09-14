import React from "react";
import "./forminput.scss";

function Forminput({handleChange ,label , ...otherprops }) {
    return (
        <div className="group">
           <input
            className="form-input" 
            onChange={handleChange} 
            {...otherprops}
           /> 
           {label? (<label className={`${otherprops.value.length? "shrink":''} form-input-label`} >{label}</label> ) : null }
        </div>
    )
}

export default Forminput

