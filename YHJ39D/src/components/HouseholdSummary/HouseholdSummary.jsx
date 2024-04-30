import { useSelector, useDispatch } from 'react-redux';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Table } from "@/components/ui/table"

const HouseholdSummary = () => {
  const people = useSelector(state => state.people.people);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Household Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <thead>
            <tr>
              <th>Név</th>
              <th>Bruttó bér</th>
              <th>Nettó bér</th>
            </tr>
          </thead>
          <tbody>
            {people.map(person => (
              <tr key={person.id}>
                <td>{person.name}</td>
                <td>{person.grossSalary}Ft</td>
                <td>{person.netSalary}Ft</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </CardContent>
      <CardFooter>
        <p>Összesített nettó bevétel: {people.reduce((acc, person) => acc + person.netSalary, 0)}Ft</p>
      </CardFooter>
    </Card>
  );
};

export default HouseholdSummary;
