const React = require('react');
const { Link, IndexLink } = require('react-router');

const Nav = (props) => {
    return (
        <div>
            <h3>Nav component</h3>
            <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Get Weather</IndexLink>
            <Link to="/about" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>About</Link>
            <Link to="/examples" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Examples</Link>
        </div>
    );
};

module.exports = Nav;

