import React, { useState } from "react";
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";

const FamilyTaxCredit = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        console.log(toggle)
        setToggle(!toggle);
    }

    return (
        <div>
            <Switch id="familyTaxCredit" onCheckedChange={handleToggle} /><Label htmlFor="familyTaxCredit">Családi adókedvezmény</Label>
            {toggle && (
                <div>
                    <Button variant="outline">-</Button>
                    <medium>1</medium>
                    <Button variant="outline">+</Button>
                    <medium>Eltartott, ebből kedvezményezett:</medium>
                    <Button variant="outline">-</Button>
                    <medium>1</medium>
                    <Button variant="outline">+</Button>
                </div>
            )}
        </div>
    );
};

export default FamilyTaxCredit;