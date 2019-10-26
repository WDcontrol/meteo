import React from 'react';
import PropTypes from 'prop-types';

HomeDetailsPage = props => {
    return(
        <TouchableOpacity style={{ flex: 1, justifyContent: 'center' }} onPress={() => alert()}>
            <Temperature style={styles.textStyles} tempKey='Minimale : ' temp={weather.main.temp_min}></Temperature>
            <Temperature style={styles.textStyles} tempKey='Maximale : ' temp={weather.main.temp_max}></Temperature>
            <Text style={{ fontSize: 20, textAlign: 'center' }}>pression : {weather.main.pressure}</Text>
            <Text style={{ fontSize: 20, textAlign: 'center' }}>Vitesse du vent : {weather.wind.speed} km/h</Text>
            <Sun sunKey='Levé du soleil :' time={weather.sys.sunrise}/>
            <Sun sunKey='Couché du soleil' time={weather.sys.sunset} />
        </TouchableOpacity>
    )
}
export default HomeDetailsPage