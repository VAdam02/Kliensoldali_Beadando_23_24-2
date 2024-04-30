import { useSelector, useDispatch } from 'react-redux';
import { removePerson, updateActivePerson } from "@/store/reducers/peopleSlice";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

import TextboxWithLabel from "@/components/TextboxWithLabel/TextboxWithLabel"
import FamilyTaxCredit from "./components/FamilyTaxCredit"
import FreshMarried from "./components/FreshMarried"
import NetSalary from "./components/NetSalary"
import Under25YearsSZJA from "./components/Under25YearsSZJA"

const SalaryCalculator = () => {
  const dispatch = useDispatch();
  const activePersonIndex = useSelector(state => state.people.activePersonIndex);
  const people = useSelector(state => state.people.people);
  const activePerson = people[activePersonIndex];
  if (activePerson == null) return;

  function handleNameChange(name) {
    dispatch(updateActivePerson({id: activePerson.id, new_values: {name: name}}));
  }

  function handleGrossSalaryChange(grossSalary) {
    if (isNaN(grossSalary)) return;
    dispatch(updateActivePerson({id: activePerson.id, new_values: {grossSalary: grossSalary}}));
  }

  function handleButtonSalaryChange(event) {
    let newGrossSalary = activePerson.grossSalary;
    switch (event.target.innerText) {
      case "-5%":
        newGrossSalary = activePerson.grossSalary * 0.95;
        break;
      case "-1%":
        newGrossSalary = activePerson.grossSalary * 0.99;
        break;
      case "+1%":
        newGrossSalary = activePerson.grossSalary * 1.01;
        break;
      case "+5%":
        newGrossSalary = activePerson.grossSalary * 1.05;
        break;
    }
    dispatch(updateActivePerson({id: activePerson.id, new_values: {grossSalary: newGrossSalary}}));
  }

  function handleUnder25YearsSZJAChange(isUnder25YearsSZJA) {
    dispatch(updateActivePerson({id: activePerson.id, new_values: {isUnder25YearsSZJA: isUnder25YearsSZJA}}));
  }

  function handleFreshMarriedChange(isFreshMarried) {
    dispatch(updateActivePerson({id: activePerson.id, new_values: {isFreshMarried: isFreshMarried}}));
  }

  function handlePersonalTaxCreditChange(isPersonalTaxCredit) {
    dispatch(updateActivePerson({id: activePerson.id, new_values: {isPersonalTaxCredit: isPersonalTaxCredit}}));
  }

  function handleFamilyTaxCreditChange(isFamilyTaxCredit, dependent, dependentBeneficiary) {
    dispatch(updateActivePerson({id: activePerson.id, new_values: {isFamilyTaxCredit: isFamilyTaxCredit, dependent: dependent, dependentBeneficiary: dependentBeneficiary}}));
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{activePerson.name} BÉRÉNEK KISZÁMÍTÁSA</CardTitle>
      </CardHeader>
      <CardContent>
        <TextboxWithLabel id="name" label="Családtag neve" description="Add meg a családtag nevét!" placeholder="Bendi" value={activePerson.name} onChange={handleNameChange} />

        <TextboxWithLabel id="grossSalary" label="Bruttó bér" description="Add meg a bruttó béredet!" placeholder="100000 Ft" value={activePerson.grossSalary} onChange={handleGrossSalaryChange} />

        <Slider min={0} max={1000000} step={1} value={[activePerson.grossSalary]} onValueChange={handleGrossSalaryChange} /><br />
        <Button variant="outline" onClick={handleButtonSalaryChange}>-5%</Button>
        <Button variant="outline" onClick={handleButtonSalaryChange}>-1%</Button>
        <Button variant="outline" onClick={handleButtonSalaryChange}>+1%</Button>
        <Button variant="outline" onClick={handleButtonSalaryChange}>+5%</Button>
        <br />

        <big>Kedvezmények</big><br />
        <Under25YearsSZJA checked={activePerson.isUnder25YearsSZJA} onCheckedChange={handleUnder25YearsSZJAChange} />
        <FreshMarried checked={activePerson.isFreshMarried} onPermittedChange={handleFreshMarriedChange} />
        <Switch id="personalTaxCredit" onCheckedChange={handlePersonalTaxCreditChange} checked={activePerson.isPersonalTaxCredit} /><Label htmlFor="personalTaxCredit">Személyes adókedvezmény</Label><br />
        <FamilyTaxCredit checked={activePerson.isFamilyTaxCredit} dependentNumber={activePerson.dependent} dependentBeneficiaryNumber={activePerson.dependentBeneficiary} maxDependentBeneficiary={3} onChange={handleFamilyTaxCreditChange} />

      </CardContent>
      <CardFooter>
        <NetSalary netSalary={activePerson.netSalary} />
        <Button variant="outline" onClick={() => dispatch(removePerson(activePerson.id))}>Remove Person</Button>
      </CardFooter>
    </Card>);
};

export default SalaryCalculator;
