import type {SVGProps} from "react";

import type {IconName} from "./icon-const";

enum Color {
    Red = "red",
    Green = "green",
    Blue = "blue",
    Yellow = "yellow",
    Gray = "gray",
    Orange = "orange",
    Violet = "violet",
    Teal = "teal",
    Indigo = "indigo",
}

export const colors = [
    Color.Red,
    Color.Green,
    Color.Blue,
    Color.Yellow,
    Color.Gray,
    Color.Orange,
    Color.Violet,
    Color.Teal,
    Color.Indigo,
] as const;

export function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

export type CommonProps = SVGProps<SVGSVGElement> & {
    icon: IconName;
    color: Color;
};

export {icons} from "./icon-const.ts";
export type {IconName} from "./icon-const.ts";
