import "../globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata : Metadata = {
    title: "Home",
    description: "Created By Abinand, As a helping project for the understanding of the language typescript and the next.js framework and the MERN stack"
}

export default function FrontLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>){
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
    </ThemeProvider>;
}