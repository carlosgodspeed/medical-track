import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Colors from '../constant/Colors';

export default function AddMedicationForm() {
    return (
        <View style={{
            padding:25,
        }}>
            <Text style={styles.header}>Adicionar Uma Nova Medicação</Text>

            <View style={styles.inputGroup}>
                <Ionicons styles={styles.icon} name='medkit-outline' size={24} color="black" />
                <TextInput style={styles.TextInput} placeholder='Nome do Medicamento'/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        fontSize:25,
        fontWeight:'bold',
    },
    inputGroup:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        padding:15,
        borderRadius:8,
        borderWidth:1,
        borderColor:Colors.LIGHT_GRAY_BORDER,
        marginTop:7,
    },
    TextInput:{
        flex:1,
        marginLeft:10,
        fontSize:16,
    },
    icon:{
        color:Colors.PRIMARY,
        borderWidth:1,
        paddingRight:12,
        borderColor:Colors.GRAY,
    },
})