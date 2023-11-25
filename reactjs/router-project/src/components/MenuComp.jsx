import { NavLink } from "react-router-dom"

export default function MenuComponent() {
    return (
        <>
            <nav>
                <a href="/">Home</a> | <a href="/about">About</a> | <a href="/contact">Contact</a> | <a href="/blog">Blog</a>
            </nav>

            <nav>
                <NavLink to="/">Home</NavLink> | <NavLink to="/about">About</NavLink> | <NavLink to="/contact">Contact</NavLink> | <NavLink to="/blog">Blog</NavLink>
            </nav>
        </>
    )
}