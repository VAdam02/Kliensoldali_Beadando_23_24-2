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
  const dispatch = useDispatch();
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
              <th>Name</th>
              <th>Gross Salary</th>
              <th>Net Salary</th>
            </tr>
          </thead>
          <tbody>
            {people.map(person => (
              <tr key={person.id}>
                <td>{person.name}</td>
                <td>{person.grossSalary}</td>
                <td>{person.netSalary}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </CardContent>
      <CardFooter>
        <p>Total net salary: {people.reduce((acc, person) => acc + person.netSalary, 0)}</p>
      </CardFooter>
    </Card>
  );
};

export default HouseholdSummary;
