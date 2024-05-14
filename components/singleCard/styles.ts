import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  imageWrapper: {
    width: '50%',
    padding: 5,
  },
  card: {
    width: '100%',
    height: 140,
    borderRadius: 5,
    position: 'relative',
  },
  front: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
    backfaceVisibility: 'hidden',
  },
  back: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
    backfaceVisibility: 'hidden',
  },
});
