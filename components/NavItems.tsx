import {Link, NavLink, useLoaderData, useNavigate} from "react-router";
import {sidebarItems} from "~/constants";


const NavItems = ({ handleClick }: { handleClick?: () => void}) => {


    return (
        <section className="nav-items">
            <Link to='/' className="link-logo">
                <img src="/assets/icons/logo.svg" alt="logo" className="size-[30px]" />
                <h1>Tourvisto</h1>
            </Link>

        </section>
    )
}

export default NavItems