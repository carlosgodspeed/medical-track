import { View } from 'react-native'
import AddMedicationForm from '../../components/AddMedicationForm'
import NewMedicationHeader from '../../components/NewMedicationHeader'

export default function NewMedication() {
return (
    <View>
        <View>
            <NewMedicationHeader />
            
            <AddMedicationForm/>
        </View>
    </View>
    )
}