import React from 'react';

class RadiusButtons extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: 1
        }
    }

    _handleClick(radius) {
        this.setState({ active: radius });
        var updateRadius = this.props.updateRadius;
        updateRadius(radius);
    }

    render() {
        const buttonStyle = {
            width: "27%",
            display: "inline-block",
            fontSize: "small",
            backgroundColor: "#b6b6b6"
        };
        const buttonActiveStyle = {
            width: "27%",
            display: "inline-block",
            fontSize: "small",
            fontWeight: "bolder",
            backgroundColor: "#858585",
            boxShadow: "0 0px rgba(153, 153, 153, 0.24)",
            transform: "translateY(1px)"
        }
        return (
            <div style={{ paddingBottom: "20px", paddingTop: "20px" }}>
                <button
                    // onTouchStart=""
                    onClick={this._handleClick.bind(this, 1)}
                    style={this.state.active === 1 ? buttonActiveStyle : buttonStyle}>
                    1KM
                </button>
                <button
                    // onTouchStart=""
                    onClick={this._handleClick.bind(this, 2)}
                    style={this.state.active === 2 ? buttonActiveStyle : buttonStyle}>
                    2KM
                </button>
                <button
                    // onTouchStart=""
                    onClick={this._handleClick.bind(this, 5)}
                    style={this.state.active === 5 ? buttonActiveStyle : buttonStyle}>
                    5KM
                </button>
            </div >
        )
    }
}

export default RadiusButtons;