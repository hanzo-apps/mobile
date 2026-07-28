import { Tabs } from 'expo-router';
import { Text } from 'react-native';
import { t } from '../../theme';

/** Glyph tabs keep the template dependency-free — swap in @expo/vector-icons
 *  once you know which icon set your design system uses. */
const icon = (glyph: string) => ({ color }: { color: string }) => (
  <Text style={{ color, fontSize: 20 }}>{glyph}</Text>
);

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: t.accent,
        tabBarInactiveTintColor: t.dim,
        tabBarStyle: { backgroundColor: t.card, borderTopColor: t.line },
        headerStyle: { backgroundColor: t.bg },
        headerTintColor: t.text,
        sceneStyle: { backgroundColor: t.bg },
      }}>
      <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: icon('◆') }} />
      <Tabs.Screen name="explore" options={{ title: 'Explore', tabBarIcon: icon('◇') }} />
      <Tabs.Screen name="settings" options={{ title: 'Settings', tabBarIcon: icon('⚙') }} />
    </Tabs>
  );
}
