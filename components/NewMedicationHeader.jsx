import Ionicons from '@expo/vector-icons/Ionicons'
import { useRouter } from 'expo-router'
import { Image, TouchableOpacity, View } from 'react-native'
export default function NewMedicationHeader() {

    const router = useRouter();

return (
    <View>
        <Image source={require('./../assets/images/consult.png')}
        style={{
            height:300,
            width:'100%',
        }}
        />
        <TouchableOpacity style={{
            position:'absolute',
            padding:25,
        }} onPress={()=>router.back()}>
            <Ionicons name="arrow-back" size={24} color="black"/>
        </TouchableOpacity>
    </View>
    )
}