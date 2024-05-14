import { styles } from "./styles";
import { Text, View, Image, StyleSheet } from "react-native";


interface SingleCardProps {
    card: {
        src: any,
        id: number,
        match: boolean
    }
}

export function SingleCard({ card }: SingleCardProps) {
    return (
      
        <View style={styles.imageWrapper}>
            <Image key={card.id} source={card.src} style={styles.image}/>
        </View>
    )
}