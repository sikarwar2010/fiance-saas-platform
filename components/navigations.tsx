"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useMedia } from "react-use";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

import NavButton from "./navbutton";

const routes = [
    {
        id: 1,
        label: "Overviews",
        href: "/",
    },
    {
        id: 2,
        label: "Transactions",
        href: "/transactions",
    },
    {
        id: 3,
        label: "Accounts",
        href: "/accounts",
    },
    {
        id: 4,
        label: "Categories",
        href: "/categories",
    },
    {
        id: 5,
        label: "Settings",
        href: "/settings",
    }
]

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();
    const pathname = usePathname();
    const isMobile = useMedia("(max-width: 1024px)", false);

    const onClick = (href: string) => {
        setIsOpen(!isOpen);
        router.push(href);
    };

    if (isMobile) {
        return (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <Button variant="outline" size="sm" className="font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition">
                        <Menu className="size-4" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="px-2">
                    <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                    <nav className="flex flex-col gap-y-2 pt-6">
                        {routes.map((route) => (
                            <Button variant={route.href === pathname ? "secondary" : "ghost"} key={route.id} onClick={() => onClick(route.href)}
                            className="w-full justify-start">
                                {route.label}
                            </Button>
                        ))}
                    </nav>
                </SheetContent>
            </Sheet>
        );
    }

    return (
        <nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
            {routes.map((route) => (
                <NavButton
                    key={route.id}
                    label={route.label}
                    href={route.href}
                    isActive={pathname === route.href}

                />
            ))}
        </nav>
    )
}
