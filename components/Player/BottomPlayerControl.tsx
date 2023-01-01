import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { HStack, Text, Image, VStack, Slider, Icon, Box } from 'native-base'
import React from 'react'

const BottomPlayerControl = () => {
  return (
    <Box background={'#232121'}>
      <Slider defaultValue={80} size="sm" margin={0} padding="0" mt="-8px">
        <Slider.Track bg={'#929292'} margin={0} padding="0">
          <Slider.FilledTrack bg={'#D9D9D9'} margin={0} padding="0" />
        </Slider.Track>
        <Slider.Thumb borderWidth="0" bg="transparent" margin={0} padding="0">
          <Icon
            as={MaterialIcons}
            name=""
            color="green.600"
            size="sm"
            margin={0}
            padding="0"
          />
        </Slider.Thumb>
      </Slider>
      <HStack
        padding={2}
        width="full"
        space="3"
        background={'#232121'}
        borderRadius="md"
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
        <VStack flex={1} justifyContent={'flex-start'} space="2">
          <Text color={'white'}>Native Base 2</Text>
          <Text color={'white'}>Player</Text>
        </VStack>
        <HStack space={3} alignItems="center" justifyContent={'center'}>
          <Icon size={'lg'} as={Ionicons} name="heart" />
          <Icon size={'lg'} as={Ionicons} name="play" />
          <Icon size={'lg'} as={Ionicons} name="pause" />
        </HStack>
      </HStack>
    </Box>
  )
}

export default BottomPlayerControl
