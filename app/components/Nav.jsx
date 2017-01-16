const React = require('react');
const { Link, IndexLink } = require('react-router');

const Nav = React.createClass({
    onSearch(e) {
        e.preventDefault();
        alert('TODO: Nav onSearch');
    },
    render() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weather App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Get Weather</IndexLink>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>About</Link>
                        </li>
                        <li>
                            <Link to="/examples" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Examples</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" placeholder="Search weather by city"/>
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get weather"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = Nav;
