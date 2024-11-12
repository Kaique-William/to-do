"use client"

import * as React from "react"
import { ThemeProvider as NextThemeProviders, ThemeProviderProps } from "next-themes"


export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return <NextThemeProviders {...props}> {children} </NextThemeProviders>
}