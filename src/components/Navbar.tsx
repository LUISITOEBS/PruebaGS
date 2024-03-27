
import { Image } from '.';
import logoMenu from '../assets/hamburguesa.svg';
import logoHome from '../assets/home.svg';

export const Navbar = () => {
    return (
        <nav className="navbar-style navbar navbar-expand-lg">
            <div className="d-flex flex-row h-100 w-100">
                <div className='bg-yellow d-flex justify-content-center align-items-center p-3' style={{ width: '60px' }}>
                    <button
                        data-mdb-collapse-init
                        className="navbar-toggler"
                        type="button"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        style={{
                            padding: '0px',
                            border: 'none'
                        }}
                    >
                        <Image
                            className='navbar-menu-image'
                            src={ logoMenu }
                            alt='Menu Logo'
                        />
                    </button>
            
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <a href="#">
                            <Image
                                className='navbar-menu-image'
                                src={ logoMenu }
                                alt='Menu Logo'
                            />
                        </a>
                    </div>
                </div>


                <div className='d-flex p-2 w-100'>
                    <div className='d-flex flex-row col'>
                        <div className='d-flex justify-content-start align-items-center p-3' style={{ borderRight: '1px solid #222' }}>
                            <Image
                                className='navbar-image'
                                src={logoHome}
                                alt='Menu Logo'
                            />
                        </div>
                    </div>
                    <div className='d-flex flex-row-reverse col'>
                        <div className="d-flex align-items-center">
                            <div>
                                <Image
                                    className='rounded-circle'
                                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                    alt='User Logo'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}