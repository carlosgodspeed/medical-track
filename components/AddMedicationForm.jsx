import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Colors from '../constant/Colors';
import { TypeList } from '../constant/Options';
export default function AddMedicationForm() {

    const [formData,setFormData]=useState();

    const onHandleInputChange=(field,value)=>{
        setFormData(prev=>({
            ...prev,
            [field]:value
        }));

        console.log(formData);
        
    }

    return (
        <View style={{
            padding:25,
        }}>
            <Text style={styles.header}>Adicionar Uma Nova Medicação</Text>

            <View style={styles.inputGroup}>
                <Ionicons styles={styles.icon} name='medkit-outline' size={24} color="black" />
                <TextInput style={styles.TextInput} placeholder='Nome do Medicamento'
                onChangeText={(value)=>onHandleInputChange('name',value)}
                />
            </View>

            <FlatList
            data={TypeList}
            horizontal
            style={{
                marginTop:15
            }}
            showsHorizontalScrollIndicator={false}
            renderItem={({item,index})=>(
                <TouchableOpacity 
                style={[styles.inputGroup, {marginRight:10},
                    {backgroundColor:item.name===formData?.type?.name?Colors.PRIMARY:'white'}
                ]}
                onPress={()=>onHandleInputChange('type', item)}
                >
                    <Text style={[styles.typeText,
                        {color:item.name===formData?.type?.name?'white':'black'}
                    ]}>{item.name}</Text>
                </TouchableOpacity>
            )}
            />
            <View style={styles.inputGroup}>
                <Ionicons styles={styles.icon} name='medkit-outline' size={24} color="black" />
                <TextInput style={styles.TextInput} placeholder='Nome do Medicamento'
                onChangeText={(value)=>onHandleInputChange('name',value)}
                />
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
        backgroundColor:'white',
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
    typeText:{
        fontSize:16,
    },
})