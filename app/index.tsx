import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.title}>The Memory Game</Text>
        <TouchableOpacity style={styles.newGameButton}>
          <Text style={styles.newGameText}>New Game</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}
