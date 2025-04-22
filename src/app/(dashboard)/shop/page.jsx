import * as React from "react"


import MedicinesShop from "@/components/medicines-shop/MedicinesShop"

export default function Page() {
  return (
    <div className="w-11/12 mx-auto">
      <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
      <MedicinesShop/>
      <MedicinesShop/>
      <MedicinesShop/>
      <MedicinesShop/>
      </div>
    </div>
  )
}
