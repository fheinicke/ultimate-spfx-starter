import { WebPartContext } from "@microsoft/sp-webpart-base";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PrimeReactProvider } from "primereact/api";
import { Button } from "primereact/button";
import { Knob } from "primereact/knob";
import { Rating } from "primereact/rating";
import React from "react";
import { Locals } from "../model/locals";
import { WebpartProperties } from "../model/webpart-properties";
import { Catch } from "./common/catch";
import { Loading } from "./common/loading";
import { LocalsProvider } from "./provider/locals-provider";
import { PnPInitializer } from "./provider/pnp-initializer";
import { RecoilInitializer } from "./provider/recoil-initializer";
import { WebpartPropertiesProvider } from "./provider/webpart-properties-provider";

// The QueryClient instance all of our queries and mutations will use.
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            throwOnError: true, // enables use of react's error boundary
        },
        mutations: {
            throwOnError: true,
        },
    },
});

export const Main: React.FC<{
    webpartContext: WebPartContext;
    webpartProperties: WebpartProperties;
    locals: Locals;
}> = ({ webpartContext, webpartProperties, locals }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <PnPInitializer webpartContext={webpartContext}>
                <PrimeReactProvider>
                    <RecoilInitializer>
                        <WebpartPropertiesProvider value={webpartProperties}>
                            <LocalsProvider value={locals}>
                                <Catch>
                                    <Loading>
                                        <Button className={"bg-indigo-500"} label={"Test"} />
                                        <Rating value={5} />
                                        <Knob value={4} max={8} />
                                        <p className="text-2xl">Hello World</p>
                                    </Loading>
                                </Catch>
                            </LocalsProvider>
                        </WebpartPropertiesProvider>
                    </RecoilInitializer>
                </PrimeReactProvider>
            </PnPInitializer>
        </QueryClientProvider>
    );
};
