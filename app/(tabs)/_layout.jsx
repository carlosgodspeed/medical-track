import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
        headerShown:false
    }}>
        <Tabs.Screen name='index'
            options={{
                tabBarLabel:'Home',
                tabBarIcon:({color,size})=>(
                    <FontAwesome name='home' size={size} color={color} />
                )
            }}
        />
        <Tabs.Screen name='AddNew'
            options={{
                tabBarLabel:'Add New',
                tabBarIcon:({color,size})=>(
                    <FontAwesome name='plus-square' size={size} color={color} />
                )
            }}
        />
        <Tabs.Screen name='Profile'
            options={{
                tabBarLabel:'Perfil',
                tabBarIcon:({color,size})=>(
                    <FontAwesome name='user' size={size} color={color} />
                )
            }}
        />
    </Tabs>
  )
}