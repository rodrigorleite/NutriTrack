import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DailyGoal } from '../types';

interface Props {
  data: DailyGoal;
}

export function CalorieRing({ data }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.percentageTop}>{data.percentage}% of daily goal</Text>
      
      <View style={styles.ringContainer}>
        <View style={styles.ringBackground} />
        <View style={styles.ringProgress} />
        
        <View style={styles.centerText}>
          <Text style={styles.calories}>{data.caloriesLeft}</Text>
          <Text style={styles.label}>kcal left</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 160,
    height: 160,
    marginTop: 10,
  },
  percentageTop: {
    position: 'absolute',
    top: 0,
    fontSize: 10,
    color: '#333',
    fontWeight: '600',
    zIndex: 10,
  },
  ringContainer: {
    width: 130,
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  ringBackground: {
    position: 'absolute',
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 7,
    borderColor: '#D8F0DB',
  },
  ringProgress: {
    position: 'absolute',
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 7,
    borderColor: '#4CAF50',
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    transform: [{ rotate: '45deg' }],
  },
  centerText: {
    alignItems: 'center',
    marginTop: 5,
  },
  calories: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#1E1E1E',
    letterSpacing: -1,
  },
  label: {
    fontSize: 12,
    color: '#666',
    marginTop: -2,
  },
});