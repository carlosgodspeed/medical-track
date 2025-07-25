import { useEffect } from 'react';
import { Image, View } from 'react-native';
import { getLocalStorage } from '../service/Storage';
export default function Header() {

    useEffect(() => {
        GetUserDetail();
    },[])

    const GetUserDetail = async () => {
        const userInfo = await getLocalStorage('userDetail');
        console.log(userInfo);
    }

    return (
        <View>
            <Image source={require('../assets/images/smiley.png')} 
            style={{
                width:45,
                height:45,

            }}
            />
        </View>
    )
}