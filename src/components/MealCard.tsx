import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Meal } from '../types';

interface Props {
  meal: Meal;
  onDelete: () => void;
}

export function MealCard({ meal, onDelete }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.info}>
        <Text style={styles.title}>{meal.title}</Text>
        <Text style={styles.ingredients}>{meal.ingredients.join('\n')}</Text>
      </View>

      <View style={styles.rightSide}>
        <Text style={styles.calories}>{meal.calories} kcal</Text>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => onDelete()} // Mudei aqui
          activeOpacity={0.6}
        >
          <Text style={styles.deleteIcon}>🗑️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1E1E1E',
    marginBottom: 4,
  },
  ingredients: {
    fontSize: 12,
    color: '#757575',
    lineHeight: 18,
  },
  rightSide: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  calories: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E1E1E',
    marginBottom: 8,
  },
  deleteButton: {
    padding: 4,
  },
  deleteIcon: {
    fontSize: 16,
  },
});
