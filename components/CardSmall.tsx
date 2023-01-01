import { StyleSheet } from 'react-native'
import { Box, HStack, Image } from 'native-base'
import { Text } from './Themed'

export default function CardSmall({ path }: { path: string }) {
  return (
    <HStack
      space="1"
      background={'rgba(101, 101, 101, 0.96)'}
      borderRadius="md"
      width="5/6"
      flex={1}
    >
      <Image
        source={{
          uri:
            'https://i.scdn.co/image/ab6761610000e5eb89d9a98c31c1efa260d6eb13',
        }}
        alt="Playlist"
        size="12"
        borderLeftRadius="md"
      />
      <Box flex={1} alignItems="center" justifyContent={'center'}>
        <Text lightColor="rgba(0,0,0,0.8)" darkColor="rgba(255,255,255,0.8)">
          Native Base
        </Text>
      </Box>
    </HStack>
  )
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    color: 'white',
  },
})
