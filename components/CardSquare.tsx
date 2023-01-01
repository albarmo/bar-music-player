import { StyleSheet } from 'react-native'
import { Box, Heading, Text, Image, Stack } from 'native-base'

export default function CardSquare({
  path,
  key,
}: {
  path: string
  key: number
}) {
  return (
    <Stack borderRadius="md" textAlign={'center'} width={'40'}>
      <Image
        source={{
          uri:
            'https://awsimages.detik.net.id/community/media/visual/2020/08/03/the-sigit-1.jpeg?w=1080',
        }}
        alt="Playlist"
        borderLeftRadius="xs"
        size="40"
      />
      <Stack marginTop={2}>
        <Heading size={'xs'} color="light.400">
          {path}
        </Heading>
        <Text isTruncated maxHeight="40" noOfLines={2} color="gray.500">
          Reality Club, Elephant Kind, The SIGIT, Mocca Reality Club, Elephant
          Kind, The SIGIT, Mocca Reality Club, Elephant Kind, The SIGIT, Mocca
          Reality Club, Elephant Kind, The SIGIT, Mocca
        </Text>
      </Stack>
    </Stack>
  )
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    color: 'white',
  },
})
