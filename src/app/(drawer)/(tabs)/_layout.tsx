import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

import { colors } from '@/styles/colors';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.black[600],
          borderTopWidth: 0,
          minHeight: 60,
        },
        tabBarItemStyle: {
          paddingTop: 10,
          paddingBottom: 10,
        },
        tabBarActiveTintColor: colors.red[400],
        tabBarInactiveTintColor: colors.gray[700],
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ size, color }) => <MaterialIcons name="home" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
