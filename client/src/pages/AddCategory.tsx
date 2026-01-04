import { useState } from "react"
import { icons } from "lucide-react"
import { ui } from "@/imports/ui"

export default function AddCategory() {
 const [openKey, setOpenKey] = useState<string | null>(null)

  return (
    <div>
      {/* Plus Box */}
      <ui.Button variant="outline" className="w-50 h-30" onClick={() => setOpenKey("category")}><icons.Plus/></ui.Button>
      <ui.Modal modalKey="category" openKey={openKey} setOpenKey={setOpenKey} />
    </div>
  )
}

