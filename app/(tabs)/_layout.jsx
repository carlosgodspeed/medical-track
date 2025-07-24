import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { getLocalStorage } from '../../service/Storage';

export default function TabLayout() {

    const router = useRouter(); //1:13:21

    useEffect(()=>{
        GetUserDetail();
    }, [])

    const GetUserDetail= async () => {
        const userInfo = await getLocalStorage('userDetail');
        if(!userInfo)
        {
            router.replace('/login')
        }
    }

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