"use client";

import SwaggerUI from "swagger-ui-react";

import "swagger-ui-react/swagger-ui.css";

type Props = {
  spec: Record<string, any>;
  url: string;
};

function ReactSwagger({ spec, url }: Props) {
  // @ts-ignore - SwaggerUI is not typed
  if (process.env.NODE_ENV === "development") {
    return <SwaggerUI spec={spec} />;
  } else {
    return <SwaggerUI url={url} />;
  }
}

export default ReactSwagger;
