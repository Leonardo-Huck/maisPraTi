function Footer({ props }) {
    return (
        <div class="container">
            <footer class="py-5">
                <div class="row">
                    <div class="col-4 col-lg-2">
                        <h5>Section</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">{props.nav1}</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">{props.nav2}</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">{props.nav3}</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">{props.nav4}</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">{props.nav5}</a></li>
                        </ul>
                    </div>

                    <div class="col-4 col-lg-2">
                        <h5>Section</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">{props.nav1}</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">{props.nav2}</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">{props.nav3}</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">{props.nav4}</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">{props.nav5}</a></li>
                        </ul>
                    </div>

                    <div class="col-4 col-lg-2">
                        <h5>Section</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">{props.nav1}</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">{props.nav2}</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">{props.nav3}</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">{props.nav4}</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">{props.nav5}</a></li>
                        </ul>
                    </div>

                    <div class="col-12 col-lg-4">
                        <form>
                            <h5>Subscribe to our newsletter</h5>
                            <p>Monthly digest of whats new and exciting from us.</p>
                            <div class="d-flex w-100 gap-2">
                                <label for="newsletter1" class="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
                                <button class="btn btn-primary" type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="d-flex justify-content-center py-4 my-4 border-top">
                    <p>© 2021 Company, Inc. All rights reserved.</p>
                    <ul class="list-unstyled d-flex">
                        <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
                        <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
                        <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer