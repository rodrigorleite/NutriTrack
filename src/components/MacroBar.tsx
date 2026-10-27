import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Macro } from '../types';

interface Props {
  macro: Macro;
}

export function MacroBar({ macro }: Props) {
  const progress = Math.min((macro.current / macro.goal) * 100, 100);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>{macro.name}</Text>
        <Text style={styles.values}>{macro.current} / {macro.goal}{macro.unit}</Text>
      </View>
      <View style={styles.barBackground}>
        <View style={[styles.barFill, { width: `${progress}%` }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 4,
  },
  name: {
    fontSize: 13,
    color: '#1E1E1E',
    fontWeight: '700',
  },
  values: {
    fontSize: 13,
    color: '#686868',
    fontWeight: '400',
  },
  barBackground: {
    height: 5,
    backgroundColor: '#F0F0F0',
    borderRadius: 2.5,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 2.5,
  },
});