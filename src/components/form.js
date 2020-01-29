import React from 'react';

function Form (props) {
    const buttonText = "see weather";
    const nameCity = "enter the city";

    return(
        <div className="form-styles">
            <form onSubmit={props.weatherMethod}>
                <input className ="weather-input" type="text" name="city" placeholder={nameCity.toUpperCase()} />
                <br />
                <button className="weather-btn">{buttonText.toUpperCase()}</button>
            </form>
        </div>
    );
}

export default Form;