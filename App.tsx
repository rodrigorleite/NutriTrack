import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Alert, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'; 

import { Header } from './src/components/Header';
import { CalorieRing } from './src/components/CalorieRing';
import { MacroBar } from './src/components/MacroBar';
import { MealCard } from './src/components/MealCard';
import { TabBar } from './src/components/TabBar';
import { ConfirmModal } from './src/components/ConfirmModal';
import { dailyGoal, macros, meals } from './src/data/mock';
import { Meal } from './src/types';

function App(): React.JSX.Element {
  const [mealsList, setMealsList] = useState(meals);
  const [activeTab, setActiveTab] = useState('TODAY');
  
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [mealToDelete, setMealToDelete] = useState<Meal | null>(null);

  const handleAddMeal = () => {
    const newMeal = {
      id: String(Math.random()),
      title: 'New Snack',
      ingredients: ['Fruit', 'Yogurt'],
      calories: 150,
    };
    setMealsList([...mealsList, newMeal]);
  };

  const openDeleteModal = (meal: Meal) => {
    setMealToDelete(meal);
    setIsModalVisible(true);
  };

  const confirmDelete = () => {
    if (mealToDelete) {
      const updatedList = mealsList.filter((meal) => meal.id !== mealToDelete.id);
      setMealsList(updatedList);
    }
    setIsModalVisible(false);
    setMealToDelete(null);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setMealToDelete(null);
  };

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      
      <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
        
        <Header />

        <View style={styles.summaryContainer}>
          <CalorieRing data={dailyGoal} />
          <View style={styles.macrosContainer}>
            {macros.map((macro) => (
              <MacroBar key={macro.name} macro={macro} />
            ))}
          </View>
        </View>

        <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />

        <ScrollView contentContainerStyle={styles.scrollContent}>
          
          {activeTab === 'TODAY' && (
            <View style={styles.mealsBackground}>
              <View style={styles.mealsContainer}>
                <Text style={styles.sectionTitle}>MEALS</Text>
                {mealsList.map((meal) => (
                  <MealCard 
                    key={meal.id} 
                    meal={meal} 
                    onDelete={() => openDeleteModal(meal)} 
                  />
                ))}
              </View>

              <TouchableOpacity style={styles.addMealButton} onPress={handleAddMeal}>
                <View style={styles.addIconCircle}>
                  <Text style={styles.addMealIcon}>+</Text>
                </View>
                <Text style={styles.addMealText}>Add Meal</Text>
              </TouchableOpacity>

              <View style={styles.logFoodContainer}>
                <TouchableOpacity 
                  style={styles.logFoodButton}
                  onPress={() => Alert.alert('Success!', 'Your meal has been logged in your diary.')}
                >
                  <Text style={styles.logFoodText}>LOG FOOD</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          {activeTab === 'HISTORY' && (
            <View style={styles.placeholderContainer}>
              <Text style={styles.placeholderText}>Meal history coming soon...</Text>
            </View>
          )}

          {activeTab === 'FOODS' && (
            <View style={styles.placeholderContainer}>
              <Text style={styles.placeholderText}>Food catalog coming soon...</Text>
            </View>
          )}

          {activeTab === 'SETTINGS' && (
            <View style={styles.placeholderContainer}>
              <Text style={styles.placeholderText}>Settings coming soon...</Text>
            </View>
          )}

        </ScrollView>
      </SafeAreaView>

      <ConfirmModal 
        visible={isModalVisible}
        onClose={closeModal}
        onConfirm={confirmDelete}
        mealTitle={mealToDelete?.title || ''}
      />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  scrollContent: {
    paddingBottom: 0,
    flexGrow: 1,
  },
  summaryContainer: {
    backgroundColor: '#F4F9F4', 
    flexDirection: 'row',
    paddingHorizontal: 24, 
    paddingBottom: 35,
    paddingTop: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  macrosContainer: {
    flex: 1,
    marginLeft: 20,
    marginTop: 15,
  },
  mealsBackground: {
    backgroundColor: '#EAEFF0', 
    flex: 1,
    paddingTop: 20,
    paddingBottom: 40,
    minHeight: 400,
  },
  mealsContainer: {
    paddingHorizontal: 20, 
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#666',
    marginBottom: 16,
    letterSpacing: 0.5,
  },
  addMealButton: {
    backgroundColor: '#FFF',
    borderRadius: 12, 
    padding: 24, 
    marginHorizontal: 20,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04, 
    shadowRadius: 6,
    elevation: 1,
  },
  addIconCircle: {
    width: 40, 
    height: 40, 
    borderRadius: 20, 
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8, 
  },
  addMealIcon: {
    fontSize: 24, 
    color: '#FFF',
    fontWeight: 'bold',
    lineHeight: 26,
  },
  addMealText: {
    fontSize: 15, 
    color: '#666',
    fontWeight: '500', 
  },
  logFoodContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  logFoodButton: {
    backgroundColor: '#5CBC6E', 
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 48, 
    alignItems: 'center',
  },
  logFoodText: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  placeholderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
    minHeight: 400,
  },
  placeholderText: {
    fontSize: 16,
    color: '#999',
    fontWeight: '500',
  },
});

export default App;