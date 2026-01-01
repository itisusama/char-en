import { ui } from "@/imports/ui";

export default function DashboardCard({border, textColor, text, value}: {border: string, textColor: string, text: string, value: number}) {
    return(
        <ui.Card className={`${border} flex flex-col items-center justify-center`}>
        <div>
          <div className={`text-sm text-center font-medium ${textColor}`}>
            {text}
          </div>
          <p className={`text-2xl font-bold ${textColor}`}>
            {value}
           </p>
        </div>
      </ui.Card>
    )
}