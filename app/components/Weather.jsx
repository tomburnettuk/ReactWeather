const React=  require('react');

const openWeatherMap = require('openWeatherMap');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const ErrorModal = require('ErrorModal');

const Weather = React.createClass({
    getInitialState() {
        return {
            isLoading: false
        }
    },
    handleSearch(location) {
        this.setState({
            isLoading: true,
            errorMessage: undefined
        });

        openWeatherMap.getTemp(location)
            .then((temp) => {
                this.setState({
                    isLoading: false,
                    location,
                    temp
                });
            })
            .catch((err) => {
                this.setState({ 
                    isLoading: false,
                    errorMessage: err.message    
                });
            })
    },
    render() {
        const { isLoading, location, temp, errorMessage } = this.state;

        const renderMessage = () => {
            if (isLoading) {
                return <h3 className="text-center">Fetching weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location}/>;
            }
        };

        const renderError = () => {
            if (typeof errorMessage === 'string') {
                return (
                    <ErrorModal message={errorMessage}/>
                );
            }
        }

        return (
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;