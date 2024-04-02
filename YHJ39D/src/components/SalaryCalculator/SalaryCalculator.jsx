import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"



const SalaryCalculator = () => {
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
        <Label htmlFor="name">Családtag neve</Label>
        <Input type="text" placeholder="Bendi" id="name" />
        <small>Add meg a családtag nevét!</small>

        <Label htmlFor="grosssalary">Bruttó bér</Label>
        <Input type="text" placeholder="100.000 Ft" id="grosssalary" />
        <small>Add meg a bruttó béredet!</small>

        <Slider defaultValue={[100000]} max={10000000} step={1} />
        <Button variant="outline">-1%</Button>
        <Button variant="outline">-5%</Button>
        <Button variant="outline">+1%</Button>
        <Button variant="outline">+5%</Button>
        <br />

        <big>Kedvezmények</big><br />
        <Switch id="under25yearsSZJA" /><Label htmlFor="under25yearsSZJA">25 év alattiak SZJA mentessége</Label><br />
        <Switch id="freshMarried" /><Label htmlFor="freshMarried">Friss házasok adókedvezménye</Label><br />
        <Switch id="personalTaxCredit" /><Label htmlFor="personalTaxCredit">Személyes adókedvezmény</Label><br />
        <Switch id="familyTaxCredit" /><Label htmlFor="familyTaxCredit">Családi adókedvezmény</Label><br />

      </CardContent>
      <CardFooter>
        <big>Számított nettó bér</big><br />
        <big>100.000 Ft</big><br />
      </CardFooter>
    </Card>
  </div>);
};

export default SalaryCalculator;
