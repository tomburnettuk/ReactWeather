const React=  require('react');

const About = (props) => {
    return (
        <div>
            <h1>About</h1>
            <p>
                This is a weather application built with React 
                as part of The Complete React Web App Developer Course
            </p>
            <p>
                Here are some of the tools used:
            </p> 
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a>
                </li>
                <li>
                    <a href="http://www.openweathermap.org">Open Weather Map</a>
                </li>
            </ul>
        </div> 
    );
};

module.exports = About;