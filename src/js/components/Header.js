import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <a href="/" className="header__logo">
                    RQ Log Analyzer
                </a>
            </header>
        );
    }
}

export default Header;