import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    Text,
    Image,

    View,
    TouchableOpacity,

} from 'react-native';


const ScreenChinhSachBaoMat = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <StatusBar barStyle='dark-content' />
            <View style={{ height: 25, flexDirection: 'row', paddingHorizontal: 16, justifyContent: 'space-between', marginVertical: 10, backgroundColor: '#ffffff' }}>
                <TouchableOpacity onPress={() => navigation.goBack()} ><Image source={require('../assets/images/back.png')} style={{ width: 7, height: 12 }} /></TouchableOpacity>
                <View><Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black' }}>Chính Sách Bảo Mật</Text></View>
                <View></View>
            </View>
            <View style={{ flex: 1, backgroundColor: '#E5E5E5', padding: 16 }}>
                <Text style={{ lineHeight: 16, fontSize: 13 }}> 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac</Text>
                <Text style={{ lineHeight: 16, fontSize: 13 }}> 2. Senectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt eget. Leo a diam sollicitudin tempor id. A lacus vestibulum sed arcu non odio euismod lacinia. In tellus integer feugiat scelerisque. Feugiat in fermentum posuere urna nec tincidunt praesent. Porttitor rhoncus dolor purus non enim praesent elementum facilisis. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Et malesuada fames ac turpis egestas sed. Sit amet nisl suscipit adipiscing bibendum est ultricies. Arcu ac tortor dignissim convallis aenean et tortor at. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Eros donec ac odio tempor orci dapibus ultrices. Elementum nibh tellus molestie nunc. Et magnis dis parturient montes nascetur. Est placerat in egestas erat imperdiet. Consequat interdum varius sit amet mattis vulputate enim.</Text>
            </View>


        </SafeAreaView>
    );
}
export default ScreenChinhSachBaoMat;