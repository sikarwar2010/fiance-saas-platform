"use client";

import { useUser } from "@clerk/nextjs";

export default function WelcomeMsg() {
    const { user, isLoaded } = useUser();
    return (
        <div className="space-y-2 mb-4">
            <h2 className="text-2xl lg:text-4xl text-white font-medium">Welcome Back{isLoaded ? "," : " "}{user?.firstName}</h2>
            <p className="lg:text-base text-sm text-[#89b6fd] font-medium">
                This is Your financial Overview Report</p>
        </div>
    );
}
