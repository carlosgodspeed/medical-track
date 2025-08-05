import { Image, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../constant/Colors';
import ConstantString from '../constant/ConstantString';
import { useRouter } from 'expo-router';

export default function EmptyState() {

    const router = useRouter();

    return (
        <View style={{
            marginTop:80,
            display:'flex',
            alignItems:'center',
        }}>
            <Image source={require('./../assets/images/medicine.png')}
            style={{
                width:120,
                height:120,
            }}
            />
            <Text style={{
                fontSize:35,
                fontWeight:'bold',
                marginTop:30,
            }}>{ConstantString.NoMedication}</Text>
            <Text style={{
                fontSize:15,
                color:Colors.DARK_GRAY,
                textAlign:'center',
                marginTop:20
            }}>{ConstantString.MedicationSubText}</Text>

            <TouchableOpacity style={{
                backgroundColor:Colors.PRIMARY,
                padding:15,
                borderRadius:10,
                width:'100%',
                marginTop:30,
            }} onPress={()=>router.push('/new-medication')}>
                    <Text style={{
                        fontFamily:'bold',
                        fontSize:17,
                        textAlign:'center',
                        color:'white',
                    }}>{ConstantString.AddNewMedication}</Text>
            </TouchableOpacity>
        </View>
    )
}