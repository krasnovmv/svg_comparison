import type React from "react";
import href from "./images/sprite.svg";
import "./Icons.css";
import type {CommonProps} from "./const.ts";
import {colors, getRandomInt} from "./const.ts";

const SvgSpriteIcon: React.FC<CommonProps> = ({icon, color, ...props}) => {
    const className = ["icon", colors[getRandomInt(colors.length)]].join(" ");
    return (
        <svg {...props} className={className}>
            <use href={`${href}#${icon.toString()}`} />
        </svg>
    );
};
export default SvgSpriteIcon;
