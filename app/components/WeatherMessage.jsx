const React = require('react');

const WeatherMessage = ({ location, temp }) => {
    return (
        <h3 className="text-center">The weather in {location} is {temp}</h3>
    );
};

module.exports = WeatherMessage;