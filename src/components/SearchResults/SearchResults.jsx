"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import SearchCard from "../SearchCard/SearchCard";


function SearchResultsContent() {
    const searchParams = useSearchParams();
    const category = searchParams.get("category") || "doctors";
    const query = searchParams.get("query") || "";

    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (query) {
            fetchResults();
        }
    }, [query]);

    const fetchResults = async () => {
        setLoading(true);
        try {
            const res = await fetch(`/api/search?category=${category}&query=${query}`);
            const data = await res.json();
            setResults(data);
        } catch (error) {
            console.error("Failed to fetch results:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-11/12 mx-auto my-8">
            <h2 className="text-center md:text-3xl text-2xl font-bold">
                Search Results for <span className="text-blue-600">"{query}"</span> in {category}
            </h2>

            {loading && (
                <div className="flex justify-center items-center h-20">
                    <span className="loading loading-bars loading-xl"></span>
                </div>
            )}

            {!loading && results.length === 0 && <p className="text-center text-red-500">No results found.</p>}

            {results.length > 0 && (
                <div className="flex justify-center items-center my-10">
                    {results.map((item) => (
                        <SearchCard key={item._id} item={item} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default function SearchResults() {
    return (
        <Suspense fallback={<p className="text-center"><span className="loading loading-bars loading-xl"></span></p>}>
            <SearchResultsContent />
        </Suspense>
    );
}
