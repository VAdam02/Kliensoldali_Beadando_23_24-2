import { useState } from "react";

import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

const Under25YearsSZJA = ({checked, onCheckedChange}) => {
    const [isUnder25YearsSZJA, setUnder25YearsSZJA] = useState(checked);

    function handleCheckChange() {
        const newIsUnder25YearsSZJA = !isUnder25YearsSZJA;
        setUnder25YearsSZJA(newIsUnder25YearsSZJA);
        onCheckedChange(newIsUnder25YearsSZJA);
    }

    return (
        <div>
            <Switch id="under25yearsSZJA" onCheckedChange={handleCheckChange}
            checked={isUnder25YearsSZJA} /><Label htmlFor="under25yearsSZJA">25 év alattiak SZJA mentessége</Label>
        </div>
    );
}

export default Under25YearsSZJA;