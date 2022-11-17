import react from "react"
import { Text, Pressable, View, StyleSheet } from "react-native"
import { useNavigation} from '@react-navigation/native'
import About from "../components/about"
export default function Home() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Text style={styles.title}>TP Final DAI</Text>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => navigation.navigate('Clima')}
            >
                <Text style={styles.textStyle}>Ver hora y temperatura</Text>
            </Pressable>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => navigation.navigate('Contactos')}
            >
                <Text style={styles.textStyle}>Ver contactos</Text>
            </Pressable>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => navigation.navigate('CambioImagen')}
            >
                <Text style={styles.textStyle}>Ver cambio de imagen</Text>
            </Pressable>
            <About></About>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 40,
        padding: 10,
        elevation: 2,
        marginTop: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        width: 150,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 700,
        borderRadius: 20,
        padding: 10,

    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',

    }
})