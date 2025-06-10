import { Image, StyleSheet, Text, View } from 'react-native'
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
            <Text>Mantenha sua Saúde em Dia</Text>
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