import React from 'react'
import PropTypes from 'prop-types'

const Header =(props)=> {
    const {branding}=props;
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
            <div className="container">
                <a href="/" className="navbar-brand">
                        {branding}
                </a>
            </div>
                <ul className="navbar-nav mr-auto mb-0">
                    <ui className="nav-item">
                        <a href="/" className="text-white nav-link">
                            Home
                        </a>
                    </ui>
                </ul>
        </nav>
    )
}
Header.defaultProps={
    branding:'My App'
};
Header.propTypes={
    branding:PropTypes.string.isRequired
}
export default Header;
