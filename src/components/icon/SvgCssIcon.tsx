import type React from "react";
import "./Icons.css";
import type {CommonProps} from "./const.ts";

import "./svg-icons.css";

const SvgCssIcon: React.FC<CommonProps> = ({icon, color, ...props}) => {
    const className = ["icon", icon.replace(" ", "_")].join(" ");
    return <span className={className}></span>;
};
export default SvgCssIcon;
