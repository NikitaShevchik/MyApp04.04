import React from "react";


function Verdict({ temp }) {
    let result;

    if (temp >= 100) {
        result = 'Вода газообразная'
    } else if (temp < 0) {
        result = 'Вода твердая'
    } else {
        result = 'Вода жидкая'
    }

    return <div>
        {result}
    </div>
}

export default Verdict;