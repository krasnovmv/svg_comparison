import type React from "react";
import type {SVGProps} from "react";
import href from './images/sprite.svg';
import type {IconName} from './const';
import './Icons.css';

export {icons} from './const.ts'

enum Color {
    Red = "red",
    Green = "green",
    Blue = "blue",
    Yellow = "yellow",
    Gray = "gray",
    Orange = "orange",
    Violet = "violet",
    Teal = "teal",
    Indigo = "indigo"
}

export const colors = [Color.Red, Color.Green, Color.Blue, Color.Yellow, Color.Gray, Color.Orange, Color.Violet, Color.Teal, Color.Indigo] as const;

type Props = SVGProps<SVGSVGElement> & { icon: IconName, color: Color }

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

const SvgSpriteIcon: React.FC<Props> = ({
                                   icon, color, ...props
                               }) => {
    const classes = [
        'icon',
        colors[getRandomInt(colors.length)]
    ]
    return (
        <svg {...props} className={classes.join(' ')}>
            <use href={`${href}#${icon.toString()}`}/>
        </svg>
    )
};
export default SvgSpriteIcon;
