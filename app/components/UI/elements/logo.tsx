import { Link } from "@remix-run/react";

const Logo = () => {
    return (
        <Link to="/dashboard" className="flex gap-3">
            < img
                className="h-14 object-cover object-center"
                src="/logo.png"
                alt="logo"
            />
            <span className="font-bold text-lg self-center text-primary text-bold h-4">
                Db Creator
            </span>
        </Link >
    )
}

export default Logo;