import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function TabBar({ activeTab, setActiveTab }: Props) {
  const tabs = ['TODAY', 'HISTORY', 'FOODS', 'SETTINGS'];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <TouchableOpacity 
            key={tab} 
            style={styles.tabItem} 
            onPress={() => setActiveTab(tab)}
            activeOpacity={1} // <-- Correção do Blur
          >
            <Text style={[styles.text, isActive && styles.activeText]}>
              {tab}
            </Text>
            {isActive && <View style={styles.activeLine} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  tabItem: {
    alignItems: 'center',
    paddingBottom: 12,
  },
  text: {
    fontSize: 11,
    fontWeight: '600',
    color: '#666',
    letterSpacing: 0.5,
  },
  activeText: {
    color: '#4CAF50',
  },
  activeLine: {
    position: 'absolute',
    bottom: 0,
    height: 2,
    width: '100%',
    backgroundColor: '#4CAF50',
  },
});