import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import React, { ReactNode } from "react";

interface FluentUiProviderProps {
    children: ReactNode;
}

/**
 * Initializes fluent ui.
 * https://react.fluentui.dev
 */
export const FluentUiProvider = ({ children }: FluentUiProviderProps) => {
    return <FluentProvider theme={webLightTheme}>{children}</FluentProvider>;
};
