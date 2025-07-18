import { useRouter } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
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
            Alert.alert('Preencha todos os campos');
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
                    padding:25,
                    marginTop:20,
                    backgroundColor:'white',
                }}>
                    <Image source={require('./../../assets/images/medical-icon.png')}
                    style={styles.image}
                    />
                    <Text style={styles.textHeader}>Crie uma Nova Conta</Text>
        
                    <View style={{
                        marginTop:25,
                    }}>
                        <Text>Nome Completo</Text>
                        <TextInput placeholder=''
                        style={styles.textInput}
                        />
                    </View>
                    <View style={{
                        marginTop:25,
                    }}>
                        <Text>Email</Text>
                        <TextInput placeholder=''
                        style={styles.textInput}
                        onChangeText={(value)=>setEmail(value)}
                        />
                    </View>
                    <View style={{
                        marginTop:25,
                    }}>
                        <Text>Senha</Text>
                        <TextInput placeholder=''
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
    },
    image:{
        width:340,
        height:250,
        borderRadius:2
    },
})