import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#007AFF",
                tabBarInactiveTintColor: "#8E8E93",
                tabBarStyle: {
                    backgroundColor: "#FFFFFF",
                    borderTopColor: "#E0E0E0",
                    borderTopWidth: 1,
                    height: 60,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    marginBottom: 5,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    headerShown: false, 
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="login"
                options={{
                    title: "Logar",
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-outline" color={color} size={size} />
                    ),
                }}
            />
        </Tabs>
    );
}