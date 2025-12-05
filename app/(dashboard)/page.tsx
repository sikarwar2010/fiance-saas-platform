"use client";

import { Loader2 } from "lucide-react";

import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";

export default function Home() {
    const { data: accounts, isLoading } = useGetAccounts();

    if (isLoading)
        return (
            <div>
                <Loader2 />
            </div>
        );

    return (
        <div>
            {accounts?.map((account) => (
                <div key={account.id}>{account.name}</div>
            ))}
        </div>
    );
}
