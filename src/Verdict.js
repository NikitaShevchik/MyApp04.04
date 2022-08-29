import React, { useState } from "react";


function Verdict({ temp, outside }) {
    let result;
    let result2;

    if (temp >= 100) {
        result = 'Вода газообразная'
    } else if (temp < 0) {
        result = 'Вода твердая'
    } else {
        result = 'Вода жидкая'
    }

    if (outside <= 15 && outside >= 0) {
        result2 = 'Надевайте куртку и штаны. Прохладно'
    } else if (outside < 0) {
        result2 = 'На улице мороз, теплее одевайся'
    } else {
        result2 = 'Нормас, можно тепло считать'
    }

    return <div>
        {result}
        <br />
        {result2}
    </div>
}


export default Verdict;