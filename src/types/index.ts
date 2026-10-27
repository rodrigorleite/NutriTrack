export interface Macro {
  name: string;
  current: number;
  goal: number;
  unit: string;
}

export interface Meal {
  id: string;
  title: string;
  ingredients: string[];
  calories: number;
}

export interface DailyGoal {
  caloriesLeft: number;
  caloriesGoal: number;
  percentage: number;
}