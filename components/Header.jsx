import Ionicons from '@expo/vector-icons/Ionicons';
import { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import Colors from '../constant/Colors';
import { getLocalStorage } from '../service/Storage';

export default function Header() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        GetUserDetail();
    }, []);

    const GetUserDetail = async () => {
        try {
            const userInfo = await getLocalStorage('userDetail');
            console.log('Usuário carregado:', userInfo);
            setUser(userInfo);
        } catch (error) {
            console.log('Erro ao buscar detalhes do usuário:', error);
        }
    };

    return (
        <View style={{ marginTop: 20 }}>
            <View style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                width:'100%',
            }}>
                <View style={{
                    display:'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                }}>
                    <Image
                        source={require('../assets/images/smiley.png')}
                        style={{ width: 55, height: 55 }}
                    />
                    <Text style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                    }}>
                        {user?.displayName ?? 'Usuário'}
                    </Text>
                </View>
                <Ionicons name="settings-outline" size={34} color={Colors.DARK_GRAY} />
            </View>
        </View>
    );
}
