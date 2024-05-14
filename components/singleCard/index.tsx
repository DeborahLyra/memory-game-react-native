
import { styles } from "./styles";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";


interface SingleCardProps {
  card: {
    src: any,
    id: number,
    matched: boolean
  },
  handleChoice: (card: { src: any, id: number, matched: boolean }) => void,
  flipped: boolean
}

export function SingleCard({ card, handleChoice, flipped }: SingleCardProps) {

  const handlePress = () => {
    handleChoice(card)
  }
  return (
    <View style={styles.imageWrapper}>
      <View style={styles.card}>
        {flipped || card.matched ? (
          <Image source={card.src} style={styles.front} />
        ) : (
          <TouchableOpacity onPress={handlePress}>
            <Image source={require('../../assets/images/back-cover.jpg')} style={styles.back} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}