import { FaRankingStar } from "react-icons/fa6";
import { PiExamFill } from "react-icons/pi";
import ThemeToggle from "./ThemeToggle";
import SideBarIcon from "./SidebarIcon";

export default function Sidebar() {
    return (
        <div className="fixed top-0 left-0 h-screen min-w-16 flex flex-col justify-between bg-gossip-100 z-20">
            <div>
                <SideBarIcon
                    icon={<FaRankingStar size="28" />}
                    text="Rankings"
                    href="/"
                />
                <SideBarIcon
                    icon={<PiExamFill size="32" />}
                    text="Match"
                    href="/match?limit=10"
                />
            </div>
            <ThemeToggle />
        </div>
    );
}
