import { Suspense } from "react";
import PaymentPageClient from "./PaymentPageClient";


export default function PaymentPage() {
  return (
    <Suspense fallback={<div>Loading payment page...</div>}>
      <PaymentPageClient />
    </Suspense>
  );
}
