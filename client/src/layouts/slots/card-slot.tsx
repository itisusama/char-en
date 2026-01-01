export default function CardSlot({spend, expense, gain}: {spend: React.ReactNode, expense: React.ReactNode, gain: React.ReactNode}) {
    return(
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {/* Spend */}
            <div>{spend}</div>
            {/* Expense */}
            <div>{expense}</div>
            {/* Gain */}
            <div>{gain}</div>
        </div>
    )
}