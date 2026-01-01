import { ui, slot } from "@/imports/ui";
import { expenseStats, gainStats, spendStats } from "@/lib/sampleData";

export default function DashboardHeader() { 
  return (
    <slot.CardSlot
        spend={<ui.DashboardCard {...spendStats}/>}
        expense={<ui.DashboardCard {...expenseStats} />}
        gain={<ui.DashboardCard {...gainStats} />}
    />      
  );
}