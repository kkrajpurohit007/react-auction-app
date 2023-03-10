export const AppHeader = (props:any) => {
    return(
        <>
            <nav className='navbar navbar-light bg-light p-1'>
                <div className="d-flex col-12 col-md-3 col-lg-2 mb-2 mb-lg-0 flex-wrap flex-md-nowrap justify-content-between">
                    <a className="navbar-brand" href="#">
                        { 'E-Auction Application' }
                    </a>
                    <button className="navbar-toggler d-md-none collapsed mb-3" type="button" data-toggle="collapse" data-target="#sidebar" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </>
    )
}