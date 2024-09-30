"use client";

import customTheme from "@/theme/customTheme";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ChakraProvider theme={customTheme}>
			<ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
        {children}
        </ChakraProvider>
    )

}