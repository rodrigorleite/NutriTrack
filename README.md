<img src="https://github.com/user-attachments/assets/650503aa-bf53-4669-a887-28979af525f6" alt="Ícone do App" width="250" /> <img src="https://github.com/user-attachments/assets/c6c5996b-e4d0-4fde-9832-9561d2544b79" alt="Tela Principal" width="250" /> <img src="https://github.com/user-attachments/assets/7c19dbd2-c5d2-4f3a-8784-d26aa12e8a95" alt="Modal de Exclusão" width="250" />


# NutriTrack 🥗

A nutrition dashboard screen built as a technical challenge for a Junior Developer position. The goal was to replicate a mockup using React Native CLI with TypeScript, adding interactions and a clean architecture.

## 🚀 What was built

- **Pixel-perfect UI:** Colors, typography, and spacing adjusted to match the original design.
- **Calorie Ring:** Built with Flexbox (borders and rotation) to ensure maximum performance and stability on Android, without relying on heavy SVG libraries.
- **Interactive Meal List:** Users can add new meals and delete existing ones.
- **Custom Delete Modal:** Instead of the default alert, I built a "Bottom Sheet" using native `Animated` for smooth animations. This prevents accidental deletions and improves the UX.
- **Tab Navigation:** Tabs (TODAY, HISTORY, FOODS, SETTINGS) change the screen content while keeping the nutritional summary fixed at the top.

## 🛠️ Stack & Architecture

- **React Native CLI** with **TypeScript** (strong typing for props and data).
- **React Native Safe Area Context:** To ensure the layout respects the notch and system bars.
- **React Native Animated:** Used for smooth transitions in the delete modal.
- **Folder Structure:** The code is componentized (`CalorieRing`, `MacroBar`, `MealCard`, `ConfirmModal`) to keep it maintainable and scalable.

## 💡 Development Notes (The Challenges)

- **The curved text on the ring:** The original mockup had the text "75% of daily goal" curved at the top of the ring. I tried implementing it using `react-native-svg` (with `TextPath`) and also the `@mreyesh85/apple-rings` library. However, both presented instability on Android (text clipping or conflicts with Reanimated v4). Since I prioritized **stability and user experience**, I made the engineering decision to keep the text straight and build the ring with Flexbox, which is 100% reliable.
- **Environment Setup:** The initial Android setup (JDK and emulator) required extra time, but once stabilized, I focused entirely on componentization and UI refinement.

## ⚙️ How to run

1. Clone the repository.
2. Install dependencies: `npm install`
3. Start Metro: `npx react-native start`
4. In another terminal: `npx react-native run-android`
