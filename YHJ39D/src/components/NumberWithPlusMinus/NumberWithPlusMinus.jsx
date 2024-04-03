import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const NumberWithPlusMinus = ({ number, min = null, max = null }) => {
    const [ num, setNum ] = useState(number);
    const [ minNum, setMinNum ] = useState(min);
    const [ maxNum, setMaxNum ] = useState(max);

    const handlePlus = () => {
        if (maxNum != null && num >= maxNum) { setNum(maxNum); return; }
        setNum(num + 1);
    }

    const handleMinus = () => {
        if (minNum != null && num <= minNum) { setNum(minNum); return; }
        setNum(num - 1);
    }

    return (
    <div>
        <Button variant="outline" onClick={handleMinus}>-</Button>
        {num}
        <Button variant="outline" onClick={handlePlus}>+</Button>
    </div>
    );
}

export default NumberWithPlusMinus;