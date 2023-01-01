import React from 'react'
import { Text, StyleSheet, ScrollView } from 'react-native'
import { Box, HStack, Button } from 'native-base'

interface CarouselCardsProps {
  hasImageTitle?: boolean
}

const CarouselText: React.FC<CarouselCardsProps> = ({
  hasImageTitle = false,
}) => {
  return (
    <Box marginTop={5}>
      <ScrollView
        style={styles.container}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
      >
        <HStack space={3}>
          {[
            'Trending',
            "2000's",
            'Heavy Metal',
            'Indie Rock',
            'Old But Gold',
            'Vietnam War',
            'Under No Nation',
            'Anarchy',
          ].map((el, idx) => (
            <Button
              key={idx}
              variant="link"
              _text={{
                color: '#ffff',
              }}
            >
              {el}
            </Button>
          ))}
        </HStack>
      </ScrollView>
    </Box>
  )
}

export default CarouselText

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  header: {
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: '#ffff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#ffff',
  },
})
