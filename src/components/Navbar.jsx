import NavPart2 from "./NavPart2"


function Navbar () {


    return (
        <>
        <nav className="w-screen bg-emerald-400 flex px-10 py-5 items-center justify-between">
            <h2 className="text-2xl">^_^ <input className="text-black w-20 rounded" type="text" /></h2>
            <NavPart2 />
        </nav>
        </>
    )
}

export default Navbar