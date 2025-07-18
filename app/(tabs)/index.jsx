import { signOut } from 'firebase/auth';
import { Button, Text, View } from 'react-native';
import { auth } from '../../config/FirebaseConfig';

export default function HomeScreen() { 
  return (
    <View>
      <Text>HomeScreen</Text> 
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Button title='Logout' onPress={()=>signOut(auth)}/>
    </View>
  )
}

