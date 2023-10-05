import React from 'react';

function HeaderBar(props) {
    return(
        <div class="HeaderBar flex items-center h-20  bg-midday rounded-md border-2 border-linecolor justify-end">
            <i class="bi bi-person-circle text-[25px] pr-5"></i>
            <h1 class='pr-7 text-[25px]'>{props.username}</h1>
        </div>
    )
}

export default HeaderBar;