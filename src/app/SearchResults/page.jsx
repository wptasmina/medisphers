import SearchResults from "@/components/SearchResults/SearchResults";
import { Suspense } from 'react'



export default function Page() {
    return (
    <Suspense>
     <SearchResults />;
    </Suspense>
)
}

