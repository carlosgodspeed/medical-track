import { signOut } from 'firebase/auth';
import { Button, Text, View } from 'react-native';
import { auth } from '../../config/FirebaseConfig';
import Header from '../../components/Header';

export default function HomeScreen() { 
  return (
    <View style={{
      padding:25,
      backgroundColor:'white',
      height:'100%'
    }}>
      <Header/>
    </View>
  )
}

