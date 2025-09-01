'use client';
import { Search } from "lucide-react";
import { useState } from "react";

export default function CustomerSearch() {
    const [queryParam, setQueryParam] = useState<string>();
    return (
        <div id="customer-search" className="flex flex-row gap-2 px-2 items-center border border-gray-200 rounded-md bg-gray-100 w-75">
            <Search className="text-gray-400" />
            <input
                className="py-2 w-full h-12 outline-none focus:ring-0"
                type="text"
                placeholder="Search by name, email, phone"
                onChange={(e) => setQueryParam(e.target.value)}
            />
        </div>
    )
}