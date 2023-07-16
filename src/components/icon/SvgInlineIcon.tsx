import type React from "react";
import "./Icons.css";
import type {CommonProps, IconName} from "./const.ts";
import {colors, getRandomInt} from "./const.ts";

import AboutIcon from "./icons/about.svg?raw";
import ArrowIcon from "./icons/arrow.svg?raw";
import BackIcon from "./icons/back.svg?raw";
import BellIcon from "./icons/bell.svg?raw";
import BkIcon from "./icons/bk.svg?raw";
import BoyIcon from "./icons/boy.svg?raw";
import BrushIcon from "./icons/brush.svg?raw";
import BurgerIcon from "./icons/burger.svg?raw";
import CalculatorIcon from "./icons/calculator.svg?raw";
import CalendarIcon from "./icons/calendar.svg?raw";
import CameraIcon from "./icons/camera.svg?raw";
import CartIcon from "./icons/cart.svg?raw";
import CcIcon from "./icons/cc.svg?raw";
import ChickenIcon from "./icons/chicken.svg?raw";
import CoctailIcon from "./icons/coctail.svg?raw";
import CodingIcon from "./icons/coding.svg?raw";
import CoffeeIcon from "./icons/coffee.svg?raw";
import CompassIcon from "./icons/compass.svg?raw";
import ConfirmIcon from "./icons/confirm.svg?raw";
import CropIcon from "./icons/crop.svg?raw";
import CrownIcon from "./icons/crown.svg?raw";
import CupIcon from "./icons/cup.svg?raw";
import DeleteIcon from "./icons/delete.svg?raw";
import DesignIcon from "./icons/design.svg?raw";
import DesktopIcon from "./icons/desktop.svg?raw";
import DiagramIcon from "./icons/diagram.svg?raw";
import DiamondIcon from "./icons/diamond.svg?raw";
import DocumentIcon from "./icons/document.svg?raw";
import DoughnutIcon from "./icons/doughnut.svg?raw";
import DownloadIcon from "./icons/download.svg?raw";
import EditIcon from "./icons/edit.svg?raw";
import EqualizerIcon from "./icons/equalizer.svg?raw";
import ExitIcon from "./icons/exit.svg?raw";
import EyeIcon from "./icons/eye.svg?raw";
import FdIcon from "./icons/fd.svg?raw";
import FlagIcon from "./icons/flag.svg?raw";
import FlashIcon from "./icons/flash.svg?raw";
import FolderIcon from "./icons/folder.svg?raw";
import GamepadIcon from "./icons/gamepad.svg?raw";
import GirlIcon from "./icons/girl.svg?raw";
import GlassesIcon from "./icons/glasses.svg?raw";
import GroupIcon from "./icons/group.svg?raw";
import HandIcon from "./icons/hand.svg?raw";
import HangerIcon from "./icons/hanger.svg?raw";
import HatIcon from "./icons/hat.svg?raw";
import HdIcon from "./icons/hd.svg?raw";
import HeadphonesIcon from "./icons/headphones.svg?raw";
import HeartIcon from "./icons/heart.svg?raw";
import HomeIcon from "./icons/home.svg?raw";
import IcecreamIcon from "./icons/icecream.svg?raw";
import KeyboardIcon from "./icons/keyboard.svg?raw";
import KeyIcon from "./icons/key.svg?raw";
import LampIcon from "./icons/lamp.svg?raw";
import LikeIcon from "./icons/like.svg?raw";
import ListIcon from "./icons/list.svg?raw";
import LockIcon from "./icons/lock.svg?raw";
import MagicIcon from "./icons/magic.svg?raw";
import MagnetIcon from "./icons/magnet.svg?raw";
import MaximizeIcon from "./icons/maximize.svg?raw";
import MedalIcon from "./icons/medal.svg?raw";
import MenuIcon from "./icons/menu.svg?raw";
import MessageIcon from "./icons/message.svg?raw";
import MicIcon from "./icons/mic.svg?raw";
import MinimizeIcon from "./icons/minimize.svg?raw";
import MobileIcon from "./icons/mobile.svg?raw";
import MouseIcon from "./icons/mouse.svg?raw";
import MusicIcon from "./icons/music.svg?raw";
import NextIcon from "./icons/next.svg?raw";
import NotepadIcon from "./icons/notepad.svg?raw";
import PantsIcon from "./icons/pants.svg?raw";
import PauseIcon from "./icons/pause.svg?raw";
import PenToolIcon from "./icons/pen tool.svg?raw";
import PictureIcon from "./icons/picture.svg?raw";
import PinIcon from "./icons/pin.svg?raw";
import PizzaIcon from "./icons/pizza.svg?raw";
import PlayIcon from "./icons/play.svg?raw";
import PlaylistIcon from "./icons/playlist.svg?raw";
import PlusIcon from "./icons/plus.svg?raw";
import PresentationIcon from "./icons/presentation.svg?raw";
import PresentIcon from "./icons/present.svg?raw";
import PrinterIcon from "./icons/printer.svg?raw";
import QuoteIcon from "./icons/quote.svg?raw";
import RandomIcon from "./icons/random.svg?raw";
import RatingIcon from "./icons/rating.svg?raw";
import RefreshIcon from "./icons/refresh.svg?raw";
import RingIcon from "./icons/ring.svg?raw";
import RocketIcon from "./icons/rocket.svg?raw";
import RullerIcon from "./icons/ruller.svg?raw";
import SearchIcon from "./icons/search.svg?raw";
import SendIcon from "./icons/send.svg?raw";
import SettingsIcon from "./icons/settings.svg?raw";
import ShareIcon from "./icons/share.svg?raw";
import SmileIcon from "./icons/smile.svg?raw";
import SoxIcon from "./icons/sox.svg?raw";
import StarIcon from "./icons/star.svg?raw";
import StopIcon from "./icons/stop.svg?raw";
import TableIcon from "./icons/table.svg?raw";
import TextIcon from "./icons/text.svg?raw";
import TextToolIcon from "./icons/text tool.svg?raw";
import TieIcon from "./icons/tie.svg?raw";
import TimerIcon from "./icons/timer.svg?raw";
import TrashIcon from "./icons/trash.svg?raw";
import TshirtIcon from "./icons/tshirt.svg?raw";
import UnlikeIcon from "./icons/unlike.svg?raw";
import UnlockIcon from "./icons/unlock.svg?raw";
import UploadIcon from "./icons/upload.svg?raw";
import VideoIcon from "./icons/video.svg?raw";
import VolumeOffIcon from "./icons/volume off.svg?raw";
import VolumeOnIcon from "./icons/volume on.svg?raw";
import WatchIcon from "./icons/watch.svg?raw";
import WebcamIcon from "./icons/webcam.svg?raw";
import WebIcon from "./icons/web.svg?raw";
import ZipIcon from "./icons/zip.svg?raw";

const iconMap: Record<IconName, string> = {
    about: AboutIcon,
    arrow: ArrowIcon,
    back: BackIcon,
    bell: BellIcon,
    bk: BkIcon,
    boy: BoyIcon,
    brush: BrushIcon,
    burger: BurgerIcon,
    calculator: CalculatorIcon,
    calendar: CalendarIcon,
    camera: CameraIcon,
    cart: CartIcon,
    cc: CcIcon,
    chicken: ChickenIcon,
    coctail: CoctailIcon,
    coding: CodingIcon,
    coffee: CoffeeIcon,
    compass: CompassIcon,
    confirm: ConfirmIcon,
    crop: CropIcon,
    crown: CrownIcon,
    cup: CupIcon,
    delete: DeleteIcon,
    design: DesignIcon,
    desktop: DesktopIcon,
    diagram: DiagramIcon,
    diamond: DiamondIcon,
    document: DocumentIcon,
    doughnut: DoughnutIcon,
    download: DownloadIcon,
    edit: EditIcon,
    equalizer: EqualizerIcon,
    exit: ExitIcon,
    eye: EyeIcon,
    fd: FdIcon,
    flag: FlagIcon,
    flash: FlashIcon,
    folder: FolderIcon,
    gamepad: GamepadIcon,
    girl: GirlIcon,
    glasses: GlassesIcon,
    group: GroupIcon,
    hand: HandIcon,
    hanger: HangerIcon,
    hat: HatIcon,
    hd: HdIcon,
    headphones: HeadphonesIcon,
    heart: HeartIcon,
    home: HomeIcon,
    icecream: IcecreamIcon,
    key: KeyIcon,
    keyboard: KeyboardIcon,
    lamp: LampIcon,
    like: LikeIcon,
    list: ListIcon,
    lock: LockIcon,
    magic: MagicIcon,
    magnet: MagnetIcon,
    maximize: MaximizeIcon,
    medal: MedalIcon,
    menu: MenuIcon,
    message: MessageIcon,
    mic: MicIcon,
    minimize: MinimizeIcon,
    mobile: MobileIcon,
    mouse: MouseIcon,
    music: MusicIcon,
    next: NextIcon,
    notepad: NotepadIcon,
    pants: PantsIcon,
    pause: PauseIcon,
    "pen tool": PenToolIcon,
    picture: PictureIcon,
    pin: PinIcon,
    pizza: PizzaIcon,
    play: PlayIcon,
    playlist: PlaylistIcon,
    plus: PlusIcon,
    present: PresentIcon,
    presentation: PresentationIcon,
    printer: PrinterIcon,
    quote: QuoteIcon,
    random: RandomIcon,
    rating: RatingIcon,
    refresh: RefreshIcon,
    ring: RingIcon,
    rocket: RocketIcon,
    ruller: RullerIcon,
    search: SearchIcon,
    send: SendIcon,
    settings: SettingsIcon,
    share: ShareIcon,
    smile: SmileIcon,
    sox: SoxIcon,
    star: StarIcon,
    stop: StopIcon,
    table: TableIcon,
    "text tool": TextToolIcon,
    text: TextIcon,
    tie: TieIcon,
    timer: TimerIcon,
    trash: TrashIcon,
    tshirt: TshirtIcon,
    unlike: UnlikeIcon,
    unlock: UnlockIcon,
    upload: UploadIcon,
    video: VideoIcon,
    "volume off": VolumeOffIcon,
    "volume on": VolumeOnIcon,
    watch: WatchIcon,
    web: WebIcon,
    webcam: WebcamIcon,
    zip: ZipIcon,
};

const SvgSpriteIcon: React.FC<CommonProps> = ({icon, color, ...props}) => {
    const className = ["icon", colors[getRandomInt(colors.length)]].join(" ");
    return (
        <span
            className={className}
            dangerouslySetInnerHTML={{__html: iconMap[icon]}}
        ></span>
    );
};
export default SvgSpriteIcon;
