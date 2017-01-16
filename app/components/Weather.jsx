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
            errorMessage: undefined,
            location: undefined,
            temp: undefined
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
    componentDidMount() {
        const { location } = this.props.location.query;

        if (location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    },
    componentWillReceiveProps(newProps) {
        const { location } = newProps.location.query;

        if (location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/';
        }
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
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;