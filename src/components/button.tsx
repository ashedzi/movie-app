interface Props {
    children: React.ReactNode;
    type: string;
}

function Button({children}: Props) {
    return (
    <button className="bg-primary px-4 py-2 rounded-md cursor-pointer text-xs text-white font-semibold hover:bg-red-700">
       {children}
    </button>
    )
}

export default Button;