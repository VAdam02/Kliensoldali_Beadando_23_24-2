import { useState } from "react";
import { Button } from "@/components/ui/button";

const NumberWithPlusMinus = ({ number, min, max, onChange }) => {
    const [ num, setNum ] = useState(checkNumber(number));

    if (checkNumber(num) !== num) { //check if the bounds have changed
        let newNum = checkNumber(num);
        setNum(newNum);
        setTimeout(() => { onChange(newNum); }, 0); //cheat to avoid updating state during render
    }

    function checkNumber(num) {
        if (min != null && num < min) return min;
        if (max != null && num > max) return max;
        return num;
    }

    const handlePlus = () => {
        const newNum = checkNumber(num + 1);
        if (newNum == num) return;
        setNum(newNum);
        onChange(newNum);
    }

    const handleMinus = () => {
        const newNum = checkNumber(num - 1);
        if (newNum == num) return;
        setNum(newNum);
        onChange(newNum);
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