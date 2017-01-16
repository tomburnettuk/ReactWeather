const React = require('react');
const { Link } = require('react-router');

const Examples = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">Examples</h1>
            <p>Here are a few example locations to try out:</p> 
            <ul>
                <li>
                    <Link to="/?location=Mansfield">Mansfield, UK</Link>
                </li>
                <li>
                    <Link to="/?location=Rio">Rio De Janerio, Brazil</Link>
                </li>
            </ul>
        </div>
    );
};

module.exports = Examples;