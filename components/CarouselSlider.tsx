import React from 'react'
import { Text, StyleSheet, ScrollView } from 'react-native'
import { Box, HStack, Stack, Image } from 'native-base'
import CardSquare from './CardSquare'

interface CarouselCardsProps {
  header?: string
  title: string
  hasImageTitle?: boolean
}

const CarouselCards: React.FC<CarouselCardsProps> = ({
  header,
  title,
  hasImageTitle = false,
}) => {
  return (
    <Box marginTop={5}>
      {hasImageTitle ? (
        <HStack space={3}>
          <Image
            size={'xs'}
            resizeMode="cover"
            source={{
              uri: 'https://wallpaperaccess.com/full/317501.jpg',
            }}
            alt={'Alternate Text '}
            borderRadius={100}
          />
          <Stack>
            <Text style={styles.header}>{header}</Text>
            <Text style={styles.title}>{title}</Text>
          </Stack>
        </HStack>
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}

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
            <CardSquare key={idx} path={`${el}`} />
          ))}
        </HStack>
      </ScrollView>
    </Box>
  )
}

export default CarouselCards

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
