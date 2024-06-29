import { SVGProps } from "react";
import * as collection from "./collection";
export type TIconName = keyof typeof collection;
export const iconName = Object.keys(collection) as TIconName[];
const iconsCollection = Object.fromEntries(
  iconName.map((name) => [name, collection[name as TIconName]])
);

export interface ISVGProps extends SVGProps<SVGSVGElement> {}

interface IIcon extends ISVGProps {
  name: TIconName;
}

export default function Icon({ name, ...props }: IIcon) {
  const IconElement = iconsCollection[name];
  return <IconElement {...props} />;
}
