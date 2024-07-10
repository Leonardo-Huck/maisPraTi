function Header() {
    return (
        <nav class="navbar navbar-expand-lg bg-dark link-light" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand col-6 text-center" href="#">Navbar Component</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav col-6 me-auto mb-2 mb-lg-0 justify-content-center">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Galeria</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Serviços
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Serviço 01</a></li>
                                <li><a class="dropdown-item" href="#">Serviço 02</a></li>
                                <li><a class="dropdown-item" href="#">Serviço 03</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" aria-disabled="true">Contato</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header