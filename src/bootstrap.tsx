import React from "react";
import { createRoot } from "react-dom/client";
import { RoutingStrategy } from "./routes";
import App from "./App";

import StoreProvider from "platform/providers/StoreProvider";

const mount = ({
  mountPoint,
  initialPathname,
  routingStrategy,
}: {
  mountPoint: HTMLElement;
  initialPathname?: string;
  routingStrategy?: RoutingStrategy;
}) => {
  const root = createRoot(mountPoint);
  root.render(
    <StoreProvider>
      <App
        initialPathname={initialPathname}
        routingStrategy={routingStrategy}
      />
    </StoreProvider>
  );
};

export { mount };
