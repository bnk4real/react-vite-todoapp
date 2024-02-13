export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                            className="me-2"
                            height="20"
                            alt="MDB Logo"
                            loading="lazy"
                        />
                        <small>React TODO App</small>
                    </a>
                </div>
            </nav>
        </>
    );
}