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

const SalaryCalculator = () => {
  const [grossSalary, setGrossSalary] = useState(100000);
  const [netSalary, setNetSalary] = useState(calculateNetSalary(grossSalary));

  function calculateNetSalary(grossSalary) {
    let szja = grossSalary * 0.15;
    let tb = grossSalary * 0.185;
    return grossSalary - szja - tb;
  }

  function handleEventGrossSalaryChange(event) {
    let newGrossSalary = parseInt(event.target.value || 0);
    if (isNaN(newGrossSalary)) return;
    setGrossSalary(newGrossSalary);
    setNetSalary(calculateNetSalary(newGrossSalary));
  }

  function handleSliderSalaryChange([newGrossSalary]) {
    setGrossSalary(newGrossSalary);
    setNetSalary(calculateNetSalary(newGrossSalary));
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
        <Button variant="outline">-1%</Button>
        <Button variant="outline">-5%</Button>
        <Button variant="outline">+1%</Button>
        <Button variant="outline">+5%</Button>
        <br />

        <big>Kedvezmények</big><br />
        <Switch id="under25yearsSZJA" /><Label htmlFor="under25yearsSZJA">25 év alattiak SZJA mentessége</Label><br />
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
