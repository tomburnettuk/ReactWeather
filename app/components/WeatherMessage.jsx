const React = require('react');

const WeatherMessage = ({ location, temp }) => {
    return (
        <h3>The weather in {location} is {temp}</h3>
    );
};

module.exports = WeatherMessage;