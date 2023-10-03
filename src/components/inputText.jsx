import React from "react";

function InputText(props) {
    return(
        <div class="m-7">
            <label class="block mb-2 text-lg font-medium">{props.nameLabel}</label>
            <input type={props.typeInput} value={props.value} onChange={props.onChange} min={props.numMin} class="w-80 border  border-linecolor text-base rounded-lg focus:border-midday p-2.5" placeholder={props.placeholder} required/>
        </div>
    )
}

export default InputText;