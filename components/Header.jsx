import Ionicons from '@expo/vector-icons/Ionicons';
import { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { getLocalStorage } from '../service/Storage';
export default function Header() {

    const [user,setUser] = useState();
    useEffect(() => {
        GetUserDetail();
    },[])

    const GetUserDetail = async () => {
        const userInfo = await getLocalStorage('userDetail');
        console.log(userInfo);
        setUser(userInfo);
    }

    return (
        <View style={{
            marginTop:20
        }}>
        <View>
            <View style={{
                display:'flex',
                flexDirection:'row',
                alignItems:'center',
                gap:10,
            }}>
            <Image source={require('../assets/images/smiley.png')} 
            style={{
                width:45,
                height:45,
            }}
        />
        <Text style={{
            fontSize:30,
            fontWeight:'bold',
        }}>{user.displayName}</Text>
        </View>
        <Ionicons name="settings-outline" size={24} color="black"/>
    </View>
</View>
    )
}