interface Props {
    label: string;
    icon: React.ReactNode;
}

function NavItem({label, icon}:Props) {
     return(
        <div className="p-4 text-xs text-white hover:bg-primary w-full">
            {icon && <span className="text-lg">{icon}</span>}
            <span>{label}</span>
        </div>
     )
}

export default NavItem;