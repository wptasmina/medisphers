import { Suspense } from "react";
import PaymentPageClient from "./PaymentPageClient";


export default function PaymentPage() {
  return (
    <Suspense
      fallback={
        <div className="w-full flex justify-center items-center h-[300px]">
          <div className="flex flex-col items-center gap-2">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-[#022dbb] border-solid"></div>
            <p className="text-[#022dbb] font-semibold">Loading payment form...</p>
          </div>
        </div>
      }
    >
      <PaymentPageClient />
    </Suspense>
  );
}
