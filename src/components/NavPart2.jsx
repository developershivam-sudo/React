import { Link } from "react-router-dom"


const NavPart2 = () => {


    return (
        <>
            <div className="flex gap-10 text-lg items-center underline">
                {/* <a className="text-xl" href="/">Home</a>
                <a className="text-xl" href="/About">About</a>
                <a className="text-xl" href="/Contacts">Contacts</a>
                <a className="text-xl" href="/Products">Products</a> */}
                
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/contacts'}>Contacts</Link>
                <Link to={'/products'}>Products</Link>
            </div>
        </>
    )
}

export default NavPart2