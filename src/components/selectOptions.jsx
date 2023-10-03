import React from "react";

function SelectOptions(props) {
    return(
        <div class="m-7">
            <label class="block mb-2 text-lg font-medium">{props.nameSelect}</label>
            <select value={props.value} onChange={props.onChange} class="w-80 border border-linecolor text-lg rounded-lg focus:border-midday p-2.5" required>
              <option value="">Selecciona</option>
              <option value="Habilitado">{props.nameOption1}</option>
              <option value="Deshabilitado">{props.nameOption2}</option>
            </select>
        </div>
    )
}

export default SelectOptions;