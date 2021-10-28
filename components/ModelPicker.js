import React, { us } from "react";
import { View, Picker, StyleSheet } from "react-native";

const App = () => {
    const [selectedValue, setSelectedValue] = useState("java");
    return (
        <View style={styles.container}>

            <Picker
                selectedValue={selectedValue}
                style={{ height: 100, width: 200 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >

                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        paddingTop: 40,
        alignItems: "center"
    }
});

export default App;