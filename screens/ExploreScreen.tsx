import React, { Component } from 'react'
import { View, Dimensions, FlatList, StyleSheet } from 'react-native'
const { height, width } = Dimensions.get('window')
const DATA = require('../data.json')

export default function ExploreScreen() {
  const handleViewableItemsChanged = ({ changed }) => {
    const outOfBoundItems = changed

    if (outOfBoundItems.length !== 0) {
      this.setState({ outOfBoundItems })
    }
  }

  const renderPosts = ({ item, index }) => {
    return (
      <VideoPlayer
        height={height / 1.6}
        width={width}
        videoUri={item.video}
        item={item}
        outOfBoundItems={this.state.outOfBoundItems}
      />
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingTop: 25 }}
        keyExtractor={(_, index) => index}
        data={DATA.videos}
        renderItem={this.renderPosts}
        horizontal={false}
        scrollEventThrottle={20}
        showsVerticalScrollIndicator={false}
        onViewableItemsChanged={this.handleViewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 30,
          waitForInteraction: true,
        }}
        overScrollMode="never"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
