import React from 'react';
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";


export default function Layout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "#25406A",
                    },
                    headerTintColor: "#FFFFFF",
                    headerTitle: "",
                    drawerActiveTintColor: "#25406A",
                }}
            >
                <Drawer.Screen name="index"
                    options={{
                        headerTitle: "",
                        drawerLabel: "Home",
                        drawerIcon: ({ size, color }) => (
                            <Ionicons name="home" size={size} color={color} />
                        ),
                    }}
                />
                <Drawer.Screen name="login"
                    options={{
                        headerTitle: "", 
                        drawerLabel: "Login",
                        drawerIcon: ({ size, color }) => (
                            <Ionicons name="person-add-outline" size={size} color={color} />
                        ),
                    }}
                />
                <Drawer.Screen name="time"
                    options={{
                        headerTitle: "", 
                        drawerLabel: "Times",
                        drawerIcon: ({ size, color }) => (
                            <Ionicons name="football" size={size} color={color} />
                        ),
                    }}
                />
                 <Drawer.Screen name="contact"
                    options={{
                        headerTitle: "", 
                        drawerLabel: "Contato",
                        drawerIcon: ({ size, color }) => (
                            <Ionicons name="git-branch" size={size} color={color} />
                        ),
                    }}
                />
                <Drawer.Screen name="developers"
                    options={{
                        headerTitle: "", 
                        drawerLabel: "Membros",
                        drawerIcon: ({ size, color }) => (
                            <Ionicons name="people-sharp" size={size} color={color} />
                        ),
                    }}
                />
                <Drawer.Screen name="botafogo"
                    options={{
                        headerTitle: "", 
                        drawerLabel: "Botafogo",
                        drawerIcon: ({ size, color }) => (
                            <Ionicons name="person" size={size} color={color} />
                        ),
                    }}
                />
                <Drawer.Screen name="favoriteTeam"
                    options={{
                        headerShown: false,
                        headerTitle: "", 
                        drawerLabel: "Time Favorito",
                        drawerIcon: ({ size, color }) => (
                            <Ionicons name="person" size={size} color={color} />
                        ),
                        drawerItemStyle: { display: 'none' },
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    );
}