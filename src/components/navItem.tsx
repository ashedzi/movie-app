import {Link} from "react-router-dom";

interface Props {
    to: string;
    label: string
}

function NavItem({to, label}: Props) {
     return(
        <Link to={to}> {label} </Link>
     )
}

export default NavItem;