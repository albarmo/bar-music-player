import { HStack, ScrollView } from 'native-base'
import { StyleSheet } from 'react-native'
import { Text } from '../components/Themed'
import { RootTabScreenProps } from '../types'
import CardSmall from '../components/CardSmall'
import CarouselCards from '../components/CarouselSlider'
import CarouselText from '../components/CarouselText'

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Good Evening</Text>
      <HStack space="2" marginTop={5}>
        <CardSmall path={''} />
        <CardSmall path={''} />
        <CardSmall path={''} />
      </HStack>
      <HStack space="2" marginTop={2}>
        <CardSmall path={''} />
        <CardSmall path={''} />
        <CardSmall path={''} />
      </HStack>
      <CarouselText />
      <CarouselCards title={'Jumpin Jack Flash'} />
      <CarouselCards hasImageTitle title={'Recomended artist'} header={'70s'} />
      <CarouselCards title={'Your favorite'} />
      <CarouselCards title={'Recomended today'} />
      <CarouselCards hasImageTitle title={'Recomended artist'} header={'80s'} />
      <CarouselCards title={'Youre music mood'} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 100,
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  grid: {},
})
