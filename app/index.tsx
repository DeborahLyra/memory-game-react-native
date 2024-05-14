import { Text, View, TouchableOpacity, ScrollView  } from "react-native";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import { SingleCard } from "@/components/singleCard";

const cardsImages = [
  {
    src: require('../assets/images/lilo-and-stitch.jpg')
  },
  {
    src: require('../assets/images/mushu.jpg')
  },
  {
    src: require('../assets/images/the-lady-and-the-tramp.jpg')
  },
  {
    src: require('../assets/images/the-lion-king.jpg')
  }
];

export default function Index() {

  interface CardsType {
    src: string,
    id: number,
    match: boolean
  }

  const [cards, setCards] = useState<CardsType[]>([]);

  const shuffleCards = () => {
    const shuffledCards = [...cardsImages, ...cardsImages]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, id: index + 1, match: false }));

    setCards(shuffledCards);
  };

  useEffect(() => {
    shuffleCards()
  }, [])

  return (
    <ScrollView  style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.title}>The Memory Game!</Text>
        <TouchableOpacity style={styles.newGameButton} onPress={shuffleCards}>
          <Text style={styles.newGameText}>New Game</Text>
        </TouchableOpacity>
      </View>
      <View>
        {/* {
          cards.map(img => {
            console.log(img)
            return (
              <>
              <Text>teste</Text>
              <Image source={img.src}/>
              </>
            )
          })
        } */}
        <View  style={styles.imageContainer}>
          {
            cards.map(card => {
              return (
                <SingleCard card={card} key={card.id} />
              )
            })
          }
        </View>
      </View>

    </ScrollView>
  );
}
