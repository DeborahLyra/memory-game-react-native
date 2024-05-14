import { Text, View, TouchableOpacity, ScrollView, Alert } from "react-native";
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
    matched: boolean
  }

  const [cards, setCards] = useState<CardsType[]>([]);
  const [choiceOne, setChoiceOne] = useState<CardsType | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<CardsType | null>(null);
  const [isWaiting, setIsWaiting] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = [...cardsImages, ...cardsImages]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, id: index + 1, matched: false }));

    setCards(shuffledCards);
    reset()
  };

  useEffect(() => {
    shuffleCards()
  }, [])

  const reset = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setIsWaiting(false);
  }

  const handleChoice = (card: CardsType) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }

  const handleMatched = () => {
    if (choiceOne && choiceTwo) {
      setIsWaiting(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards =>
          prevCards.map(card =>
            card.src === choiceOne.src ? { ...card, matched: true } : card
          )
        );
        reset();
      } else {
        setTimeout(() => reset(), 1000);
      }
    }
  }

  useEffect(() => {
    handleMatched();
  }, [choiceOne, choiceTwo])

  useEffect(() => {
    const allMatched = cards.every(card => card.matched);
    if (allMatched) {
      Alert.alert(
        "You Won!",
        "Do you want to play again?",
        [
          {
            text: "Yes!",
            onPress: () => shuffleCards()
          },
          {
            text: "No :(",
            style: "cancel"
          }
        ]
      );
    }
  }, [cards])

 

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.title}>The Memory Game!</Text>
        <TouchableOpacity style={styles.newGameButton} onPress={shuffleCards}>
          <Text style={styles.newGameText}>New Game</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.imageContainer}>
          {cards.map(card => (
            <SingleCard
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={choiceOne === card || choiceTwo === card || card.matched}
              isWaiting={isWaiting}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}