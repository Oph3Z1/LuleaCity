import { Text, View } from 'react-native'
import React from 'react'

const Product = ({ route }) => {
    const { data } = route.params

    return (
        <View className="flex-1 items-center justify-center">
        <Text>Product page - { data.name }</Text>
        </View>
    )
}

export default Product