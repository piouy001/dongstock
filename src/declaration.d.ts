// put the custom declaration module in this file.

declare module "*.svg" {
  import React from "react";

  export const content: string;
  export const ReactComponent: React.FC<React.SVGProps<SVGElement>>;
  export const Svg: React.FC<React.SVGProps<SVGElement>>;
  export default Svg;
}

declare module "*.css" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.svg" {
  const content: string;
  export default content;
}
