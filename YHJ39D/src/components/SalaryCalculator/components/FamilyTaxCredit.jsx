import React, { useState } from "react";
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

import NumberWithPlusMinus from "@/components/NumberWithPlusMinus/NumberWithPlusMinus";

const FamilyTaxCredit = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <div>
            <Switch id="familyTaxCredit" onCheckedChange={handleToggle} /><Label htmlFor="familyTaxCredit">Családi adókedvezmény</Label>
            {toggle && (
                <div>
                    <NumberWithPlusMinus number={1} />
                    Eltartott, ebből kedvezményezett:
                    <NumberWithPlusMinus number={0} />
                </div>
            )}
        </div>
    );
};

export default FamilyTaxCredit;