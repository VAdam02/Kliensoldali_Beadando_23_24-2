import FamilyMemberTabs from "./FamilyMemberTabs/FamilyMemberTabs";
import HouseholdSummary from "./HouseholdSummary/HouseholdSummary";
import SalaryCalculator from "./SalaryCalculator/SalaryCalculator";
import { Provider } from "react-redux";
import store from "@/store/store.js";

const HouseholdSalaryCalculator = () => {
  return (
    <Provider store={store}>
      <header>
        <FamilyMemberTabs />
      </header>
      <main>
        <SalaryCalculator />
        <HouseholdSummary />
      </main>
    </Provider>
  );
};

export default HouseholdSalaryCalculator;
