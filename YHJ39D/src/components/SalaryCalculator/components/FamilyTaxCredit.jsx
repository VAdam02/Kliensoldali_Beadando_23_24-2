import React, { useState } from "react";
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

import NumberWithPlusMinus from "@/components/NumberWithPlusMinus/NumberWithPlusMinus";

const FamilyTaxCredit = ({ checked, dependentNumber, dependentBeneficiaryNumber, maxDependentBeneficiary, onChange }) => {
    const [isFamilyTaxCredit, setFamilyTaxCredit] = useState(checked);
    const [dependent, setDependent] = useState(dependentNumber);
    const [dependentBeneficiary, setDependentBeneficiary] = useState(dependentBeneficiaryNumber);

    const handleToggle = () => {
        const newIsFamilyTaxCredit = !isFamilyTaxCredit;
        setFamilyTaxCredit(newIsFamilyTaxCredit);
        onChange(newIsFamilyTaxCredit, dependent, dependentBeneficiary);
    }

    const handleDependentChange = (dependent) => {
        setDependent(dependent);
        onChange(isFamilyTaxCredit, dependent, dependentBeneficiary);
    }

    const handleDependentBeneficiaryChange = (dependentBeneficiary) => {
        setDependentBeneficiary(dependentBeneficiary);
        onChange(isFamilyTaxCredit, dependent, dependentBeneficiary);
    }

    return (
        <div>
            <Switch id="familyTaxCredit" onCheckedChange={handleToggle} /><Label htmlFor="familyTaxCredit">Családi adókedvezmény</Label>
            {isFamilyTaxCredit && (
                <div>
                    <NumberWithPlusMinus number={dependent} min={0} onChange={handleDependentChange} />
                    Eltartott, ebből kedvezményezett:
                    <NumberWithPlusMinus number={dependentBeneficiary} min={0} max={Math.min(dependent, maxDependentBeneficiary)} onChange={handleDependentBeneficiaryChange} />
                </div>
            )}
        </div>
    );
};

export default FamilyTaxCredit;