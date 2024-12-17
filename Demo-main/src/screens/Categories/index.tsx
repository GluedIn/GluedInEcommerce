//Global imports
import { View } from 'react-native'

//File imports
import styles from './styles'

//Component imports
import { Header } from '../../components';
import { TopTab } from '../../navigation/rootNavigator';

const { container, bodyContainer} = styles;

const Categories = () => {
    return (
        <View style={container}>
            <Header title="Categories" />
            <View style={bodyContainer}>
                <TopTab />
            </View>
        </View>
    )
}

export default Categories