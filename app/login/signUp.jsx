import { useRouter } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import Colors from '../../constant/Colors';
import { auth } from './../../config/FirebaseConfig';

export default function SignUp(){

    const router = useRouter();

    const [email, setEmail] = useState();
    const [password,setPassword] = useState();

    const OnCreateAccount=()=>{

        if(!email||!password)
        {
            ToastAndroid.show('Preencha todo o Formulario',ToastAndroid.BOTTOM);
            Alert.alert('Entre com o Email e Senha');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential)=> {
                const user = userCredential.user;
                console.log(user);
                router.push('(tabs)')

            })
            .catch((error)=> {
                const errorCode = error.code;
                console.log(errorCode);
                if(errorCode === 'auth/email-already-in-use')
                {
                    ToastAndroid.show('este Email já está em uso',ToastAndroid.BOTTOM);
                    Alert.alert('este Email já está cadastrado')
                }
            });
    }

    return (
        <View style={{
                    padding:25
                }}>
                    <Text style={styles.textHeader}>Crie uma Nova Conta</Text>
        
                    <View style={{
                        marginTop:25,
                    }}>
                        <TextInput placeholder='Nome Completo'
                        style={styles.textInput}
                        />
                    </View>
                    <View style={{
                        marginTop:25,
                    }}>
                        <TextInput placeholder='Email'
                        style={styles.textInput}
                        onChangeText={(value)=>setEmail(value)}
                        />
                    </View>
                    <View style={{
                        marginTop:25,
                    }}>
                        <TextInput placeholder='Password'
                        secureTextEntry={true}
                        style={styles.textInput}
                        onChangeText={(value)=>setPassword(value)} 
                        />
                    </View>
        
                    <TouchableOpacity style={styles.button}
                    onPress={OnCreateAccount}
                    >
                        <Text  style={{
                            fontSize:17,
                            color:'white',
                            textAlign:'center',
                        }}>Criar</Text>
                    </TouchableOpacity>
        
                    <TouchableOpacity style={styles.buttonCreate}
                    onPress={()=>router.push('login/signIn')}
                    >
                        <Text  style={{
                            fontSize:17,
                            color:Colors.PRIMARY,
                            textAlign:'center',
                        }}>Já Possuo uma Conta</Text>
                    </TouchableOpacity>
                </View>
            )
}

const styles = StyleSheet.create({
    textHeader:{
        fontSize:30,
        fontWeight:'bold',
        marginTop:15,
    },
    subText:{
        fontSize:20,
        fontWeight:'bold',
        marginTop:6,
        color:Colors.GRAY,
    },
    textInput:{
        padding:10,
        borderWidth:1,
        fontSize:17,
        borderRadius:10,
        marginTop:5,
        backgroundColor:'white',
    },
    button:{
        padding:15,
        backgroundColor:Colors.PRIMARY,
        borderRadius:10,
        marginTop:40,
    },
    buttonCreate:{
        padding:15,
        backgroundColor:'white',
        borderRadius:10,
        marginTop:20,
        borderWidth:1,
        borderColor:Colors.PRIMARY,
    }
})