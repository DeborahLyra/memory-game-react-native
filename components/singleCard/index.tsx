
import { styles } from "./styles";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";


interface SingleCardProps {
  card: {
    src: any,
    id: number,
    match: boolean
  },
  handleChoice: (card: { src: any, id: number, match: boolean }) => void
}

export function SingleCard({ card, handleChoice }: SingleCardProps) {

  const handlePress = () => {
    handleChoice(card)
  }
  return (
    <View style={styles.imageWrapper}>
      <Image key={card.id} source={card.src} style={styles.front} />
      <TouchableOpacity onPress={handlePress}>
        <Image source={require('../../assets/images/back-cover.jpg')} style={styles.back} />
      </TouchableOpacity>

    </View>
  )
}