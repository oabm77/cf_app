import TheOffice from "../../assets/the_office.jpg"
import "./home.css"

function Home() {
    return (
        <>
            <h1>The Office</h1>
            <img className="poster" src={TheOffice} alt="The Office"></img>
            <h2>The Office es una serie de televisión estadounidense</h2>
            <h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h3>
        </>
    )
}

export default Home