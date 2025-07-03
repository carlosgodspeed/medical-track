import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Colors from '../../constant/Colors'

export default function LoginScreen() {
  return (
    <View>
        <View style={{
            display:'flex',
            alignItems:'center',
            marginTop:40,
        }}>
            <Image source={require('./../../assets/images/login.png')}
                style={styles?.image}
            />
        </View>

        <View style={{
            padding:25,
            backgroundColor:Colors.PRIMARY,
            height:'100%'
        }}>
            <Text style={{
                fontSize:30,
                fontWeight:'bold',
                color:'white',
                textAlign:'center'
            }}>Mantenha sua Saúde em Dia</Text>

            <Text style={{
                color:'white',
                textAlign:'center',
                fontSize:17,
                marginTop:20
            }}>Busque seus Medicamentos</Text>


            <TouchableOpacity>
                <Text>Continue</Text>
            </TouchableOpacity>
        </View>
    </View>
   )
}

const styles = StyleSheet.create({
    image:{
        width:210,
        height:450,
        borderRadius:23
    }
})