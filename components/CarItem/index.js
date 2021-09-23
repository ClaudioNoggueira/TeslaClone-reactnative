import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

import styles from './styles.js';

const CarItem = (props) => {
    return (
        <View style={styles.carComponent}>
            <ImageBackground
                source={require('../../assets/images/ModelX.jpeg')}
                style={styles.image}
            />
            <View style={styles.titles}>
                <Text style={styles.title}>Model S</Text>
                <Text style={styles.subtitle}>Starting at $69,420</Text>
            </View>
        </View>
    );
};

export default CarItem;