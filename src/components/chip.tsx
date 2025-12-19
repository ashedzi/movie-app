interface Props {
 children: React.ReactNode;
}

function Chip({children}: Props) {
    return (
        <div className="inline-flex items-center text-white bg-white/10 backdrop-blur-md text-xs rounded-full shadow-sm px-3 py-1 border border-white/20">
            {children}
        </div>
    )
}

export default Chip;