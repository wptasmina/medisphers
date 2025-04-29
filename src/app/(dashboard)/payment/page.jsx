import { Suspense } from "react";
import PaymentPage from './page';

export default function PaymentPage() {
  return (
    <Suspense fallback={<div>Loading payment page...</div>}>
      <PaymentPage />
    </Suspense>
  );
}
