import Link from "next/link";

export default function SideBarIcon({
    icon,
    text = "tooltip",
    href,
}: {
    icon: any;
    text?: string;
    href?: string;
}) {
    const content = (
        <div
            className="relative flex items-center justify-center
                h-12 w-12 mt-2 mb-2 mx-auto bg-gossip-50 
                text-gossip-800 hover:text-gossip-50 hover:bg-gossip-800
                hover:rounded-xl rounded-3xl 
                transition-all duration-300 ease-linear 
                cursor-pointer shadow-lg group"
        >
            {icon}
            <span
                className="absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md 
                    text-gossip-50 bg-gossip-800 text-xs font-bold 
                    transition-all duration-100 scale-0 origin-left group-hover:scale-100"
            >
                {text}
            </span>
        </div>
    );

    return href ? <Link href={href}>{content}</Link> : content;
}
