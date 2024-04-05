import { useState } from "react"

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
  const [grossSalary, setGrossSalary] = useState(100000);
  const [isUnder25YearsSZJA, setUnder25YearsSZJA] = useState(false);
  const [netSalary, setNetSalary] = useState(calculateNetSalary(grossSalary, isUnder25YearsSZJA));

  function calculateNetSalary(grossSalary, isUnder25YearsSZJA) {
    let szja = (isUnder25YearsSZJA ? Math.max(0, grossSalary - 499952) : grossSalary) * 0.15;
    let tb = grossSalary * 0.185;
    return grossSalary - szja - tb;
  }

  function handleEventGrossSalaryChange(event) {
    let newGrossSalary = parseInt(event.target.value || 0);
    if (isNaN(newGrossSalary)) return;
    setGrossSalary(newGrossSalary);
    setNetSalary(calculateNetSalary(newGrossSalary, isUnder25YearsSZJA));
  }

  function handleSliderSalaryChange([newGrossSalary]) {
    setGrossSalary(newGrossSalary);
    setNetSalary(calculateNetSalary(newGrossSalary), isUnder25YearsSZJA);
  }

  function handleButtonSalaryChange(event) {
    let newGrossSalary = grossSalary;
    switch (event.target.innerText) {
      case "-5%":
        newGrossSalary = grossSalary * 0.95;
        break;
      case "-1%":
        newGrossSalary = grossSalary * 0.99;
        break;
      case "+1%":
        newGrossSalary = grossSalary * 1.01;
        break;
      case "+5%":
        newGrossSalary = grossSalary * 1.05;
        break;
    }
    setNetSalary
    setGrossSalary(newGrossSalary);
    setNetSalary(calculateNetSalary(newGrossSalary, isUnder25YearsSZJA));
  }

  function handleUnder25YearsSZJAChange(isUnder25YearsSZJA) {
    setUnder25YearsSZJA(isUnder25YearsSZJA);
    setNetSalary(calculateNetSalary(grossSalary, isUnder25YearsSZJA));
  }

  return (
  <div>
    <div>
      <Button variant="outline">Bendi</Button>
      <Button variant="outline">+</Button>
    </div>
    <Card>
      <CardHeader>
        <CardTitle>BENDI BÉRÉNEK KISZÁMÍTÁSA</CardTitle>
      </CardHeader>
      <CardContent>
        <TextboxWithLabel label="Családtag neve" description="Add meg a családtag nevét!" placeholder="Bendi" />

        <TextboxWithLabel label="Bruttó bér" description="Add meg a bruttó béredet!" placeholder="100000 Ft" value={grossSalary} onChange={handleEventGrossSalaryChange} />

        <Slider min={0} max={1000000} step={1} value={[grossSalary]} onValueChange={handleSliderSalaryChange} /><br />
        <Button variant="outline" onClick={handleButtonSalaryChange}>-5%</Button>
        <Button variant="outline" onClick={handleButtonSalaryChange}>-1%</Button>
        <Button variant="outline" onClick={handleButtonSalaryChange}>+1%</Button>
        <Button variant="outline" onClick={handleButtonSalaryChange}>+5%</Button>
        <br />

        <big>Kedvezmények</big><br />
        <Under25YearsSZJA checked={isUnder25YearsSZJA} onCheckedChange={handleUnder25YearsSZJAChange} />
        <FreshMarried />
        <Switch id="personalTaxCredit" /><Label htmlFor="personalTaxCredit">Személyes adókedvezmény</Label><br />
        <FamilyTaxCredit />

      </CardContent>
      <CardFooter>
        <NetSalary netSalary={netSalary} />
      </CardFooter>
    </Card>
  </div>);
};

export default SalaryCalculator;
