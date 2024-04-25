import {createSlice} from '@reduxjs/toolkit';

const calculateNetSalary = (person) => {
    const {grossSalary, isUnder25YearsSZJA, isFreshMarried, isFamilyTaxCredit, dependent, dependentBeneficiary} = person;
    let szja = (isUnder25YearsSZJA ? Math.max(0, grossSalary - 499952) : grossSalary) * 0.15;
    let tb = grossSalary * 0.185;
    let bonus = isFreshMarried ? 5000 : 0;
    if (isFamilyTaxCredit) {
        switch (dependentBeneficiary) {
        case 1: bonus += 10000*dependent; break;
        case 2: bonus += 20000*dependent; break;
        case 3: bonus += 33000*dependent; break;
    }}
    let netSalary = grossSalary - szja - tb + bonus;
    return netSalary;
}

const initialState = {
    people: [{
        id: 0,
        name: "Bendi",
        grossSalary: 100000,
        isUnder25YearsSZJA: false,
        isFreshMarried: false,
        isFamilyTaxCredit: false,
        dependent: 0,
        dependentBeneficiary: 0,
        netSalary: 0
    }],
    activePersonIndex: 0
};
initialState.people[0].netSalary = calculateNetSalary(initialState.people[0]);

const peopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
        addPerson(state, {payload}) {
            state.people.push(payload);
        },

        removePerson(state, {payload}) {
            state.people = state.people.filter(person => person.id !== payload);
        },
        
        setActivePerson(state, {payload}) {
            state.activePersonIndex = payload;
        },

        updateActivePerson(state, {payload}) {
            const { id, new_values} = payload;
            const personIndex = state.people.findIndex(person => person.id === id);
            if (personIndex !== -1) {
                state.people[personIndex] = {...state.people[personIndex], ...new_values}
                state.people[personIndex].netSalary = calculateNetSalary(state.people[personIndex]);
            }
        }
    }
});

export const {addPerson, removePerson, setActivePerson, updateActivePerson} = peopleSlice.actions;
export default peopleSlice.reducer;