import { Button } from "@/components/ui/button"
import { useSelector, useDispatch } from 'react-redux';
import { createPerson, setActivePerson } from "@/store/reducers/peopleSlice";

const FamilyMemberTabs = () => {
  const dispatch = useDispatch();
  const activePersonIndex = useSelector(state => state.people.activePersonIndex);
  const people = useSelector(state => state.people.people);

  function setActivePersonIndex(index) {
    dispatch(setActivePerson(index));
  }

  function addPerson() {
    dispatch(createPerson());
  }

  return <div>
    {people.map((person, index) => {
      return <Button key={person.id} variant={index === activePersonIndex ? "primary" : "outline"} onClick={() => setActivePersonIndex(index)}>{person.name}</Button>;
    })}
    <Button onClick={addPerson}>Add Person</Button>
  </div>;
};

export default FamilyMemberTabs;
