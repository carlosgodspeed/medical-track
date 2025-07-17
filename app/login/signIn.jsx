import { useRouter } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { auth } from '../../config/FirebaseConfig';
import Colors from '../../constant/Colors';

export default function SignIn(){

    const router = useRouter();
    const [email,setEmail] = useState();
    const [password, setPassword] = useState();

    const OnSignInClick = () => {

        if(!email||!password)
        {
            Alert.alert('Por favor Dgite o Email e Senha');
            return;
        }
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            router.replace('(tabs)')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if(errorCode === 'Autenticação/Credencial Invalida')
            {
                Alert.alert('Email ou Senha Invalidos')
            }
        });
    }

    return (
        <View style={{
            padding:25
        }}>
            <Text style={styles.textHeader}>Bem Vindo de Volta</Text>
            <Text style={styles.subText}>Realize seu Login</Text>

            <View style={{
                marginTop:25,
            }}>
                <Text>Email</Text>
                <TextInput placeholder='Email'
                style={styles.textInput}
                onChangeText={(value)=>setEmail(value)}
                />
            </View>
            <View style={{
                marginTop:25,
            }}>
                <Text>Senha</Text>
                <TextInput placeholder='Password'
                secureTextEntry={true}
                style={styles.textInput} 
                onChangeText={(value)=>setPassword(value)}
                />
            </View>

            <TouchableOpacity style={styles.button}
            onPress={OnSignInClick}
            >
                <Text  style={{
                    fontSize:17,
                    color:'white',
                    textAlign:'center',
                }}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonCreate}
            onPress={()=>router.push('login/signUp')}
            >
                <Text  style={{
                    fontSize:17,
                    color:Colors.PRIMARY,
                    textAlign:'center',
                }}>Cadastre-se</Text>
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