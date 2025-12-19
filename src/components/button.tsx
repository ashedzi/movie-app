import type { ButtonProps } from '../types';

function Button({children}: ButtonProps) {
    return (
    <button className="bg-primary px-5 py-2 rounded-md cursor-pointer text-sm text-white font-medium hover:bg-red-700">
       {children}
    </button>
    )
}

export default Button;