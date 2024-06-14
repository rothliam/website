import {
    BrowserRouter,
    Routes,
    Route,
    Outlet,
    useNavigate,
    useLocation
} from "react-router-dom";
import { Children } from "react";

const About = () => (
    <section style={{
        background: "#fff",
        color: "#000" }}>
            <Nav title="About" />
        </section>
);

const Link = ({ to, children, colorEnd }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClicked = () => {
        const bubbles = document.querySelector("#bubbles");

        bubbles.classList.add("show");

        const bubbleSecond = 
            bubbles.querySelector("div:nth-child(2)");

        bubbleSecond.style.background = colorEnd;

        setTimeout(() => navigate(to), 1000);

        setTimeout(() => {
            bubbles.classList.remove("show");
            bubbles.classList.add("hide");
    }, 1200);

        setTimeout(() =>
        bubbles.classList.remove("hide"), 2400);
    }
    return (
        <a onClick={handleClicked}>{children}</a>
    )
}

const Nav = ({ title }) => (
    <nav>
        <h1>{title}</h1>
        <ul>
            <li>
                <Link to="/about" colorEnd="#fff">
                About
                </Link>
            </li> 
        </ul>
    </nav>
)

const Bubbles = () => {
    return (
        <div id="bubbles">
            <div
            style={{ animationDuration: "1200ms"}}
            className="bubbles__first"
            />
            <div
            style={{ animationDuration: "1200ms"}}
            className="bubbles__second"
            />
        </div>
    )
}

const Layout = () => {
    return (
        <>
            <Bubbles />
            <Outlet />
        </>
    )
}

export const Example = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                path="/"
                element={<Layout />}
                >
                    <Route
                path="about"
                element={<About />}
                />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}