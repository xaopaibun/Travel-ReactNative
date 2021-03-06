import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TextInput,
  ImageBackground,
  View,
  TouchableOpacity, ActivityIndicator,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';

const ChiTietThamQuan = ({ navigation }) => {
  const Data_NhaHang = useSelector(state => state.data_NhaHang);
  const Data = useSelector(state => state.data_diadiemphobien);
  const dispatch = useDispatch();

  const DataKS = useSelector(state => state.data_KS_RS);
  const renderItemKS_RS = ({ item }) => (
    <TouchableOpacity style={{ height: 250, width: 160, marginRight: 16, justifyContent: 'space-between' }} onPress={() => {
      dispatch({ type: 'ChiTietNhaHang', data: item })
      navigation.navigate('ScreenCTNhaHangKhachSan');
    }}>
      <View style={{ flex: 3 }}>
        <Image source={{ uri: item.images[0] }} style={{ width: 160, height: 150, borderRadius: 5 }} />
      </View>
      <View style={{ marginTop: 12, flex: 2, justifyContent: 'space-between', paddingTop: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: '#A2A2A2', fontSize: 10, flex: 0.9 }}>{item.Loai}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 0.5 }}>
            <Image source={require('../assets/images/sao.png')} style={{ width: 10, height: 10 }} />
            <Image source={require('../assets/images/sao.png')} style={{ width: 10, height: 10 }} />
            <Image source={require('../assets/images/sao.png')} style={{ width: 10, height: 10 }} />
            <Image source={require('../assets/images/sao.png')} style={{ width: 10, height: 10 }} />
            <Image source={require('../assets/images/sao.png')} style={{ width: 10, height: 10 }} />
          </View>
        </View>
        <Text style={{ fontWeight: '500', fontSize: 14 }}>{item.Ten}</Text>
        <Text style={{ color: '#3076FE', fontSize: 10 }}><Image source={require('../assets/images/Vector.png')} style={{ width: 7, height: 10 }} /> {item.DiaChi}</Text>
        <Text style={{ fontWeight: '500', fontSize: 12, color: '#FF2424' }}>{item.Gia}</Text>
      </View>
    </TouchableOpacity>
  );
  const renderItemDiaDiem = ({ item }) => (
    <View style={{ width: 150, height: 200, marginRight: 16, borderRadius: 5, overflow: 'hidden' }}>
      <Image source={{ uri: item.image }} style={{ width: 150, height: 200 }} />
      <LinearGradient colors={['rgba(77, 77, 77, 0)', '#000000']} style={{ position: 'absolute', bottom: 0, zIndex: 1, height: 20, width: '100%' }}>
        <Text style={{ color: 'white', fontSize: 13, fontWeight: '600', backgroundColor: 'black', textAlign: 'center' }}>{item.TenDiaDiem}</Text>
      </LinearGradient>
    </View>
  );
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <View style={{ height: 40, alignItems: 'center', flexDirection: 'row', paddingHorizontal: 16, justifyContent: 'space-around', marginVertical: 10, backgroundColor: '#ffffff' }}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ flex: 0.3 }}><Image source={require('../assets/images/back.png')} style={{ width: 6, marginRight: 12 }} /></TouchableOpacity>
        <View style={{ flex: 0.6 }}><Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black' }}>B??i K??? Co</Text></View>
      </View>
      <ScrollView style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
        <View style={{ height: 155, marginTop: 10 }}>
          <Image source={require('../assets/images/Rectangle80.png')} style={{ width: '100%', height: '100%' }} />
        </View>
        <View style={{ height: 110, backgroundColor: 'white', padding: 16, justifyContent: 'space-between' }}>
          <Text style={{ fontWeight: 'bold' }}>B??i K??? Co</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 12 }}>V?? v??o c???ng</Text>
            <Text style={{ fontSize: 12, color: '#FF5F24' }}>60.000??/ v??</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 12 }}>V?? trung chuy???n</Text>
            <Text style={{ fontSize: 12, color: '#FF5F24' }}>40.000??/ l?????t</Text>
          </View>
        </View>
        <View style={{ height: 155, marginTop: 20 }}>
          <Image source={require('../assets/images/Rectangle82.png')} style={{ width: '100%', height: '100%' }} />
        </View>
        <View style={{ height: 44, padding: 16, flexDirection: 'row', backgroundColor: 'white' }}>
          <Image source={require('../assets/images/dinhvi1.png')} style={{ width: 7.24, height: 10, marginRight: 5 }} />
          <Text style={{ fontSize: 10, fontWeight: '400' }}>Quang Trung, TP Quy Nh??n, B??nh ?????nh</Text>
        </View>
        <View style={{ height: 'auto', padding: 16, marginTop: 20, backgroundColor: 'white' }}>
          <Text style={{ fontSize: 12 }}>N???m d?????i ch??n n??i Ph????ng Mai thu???c x?? Nh??n L??, c??ch th??nh ph??? Quy Nh??n 25km v??? ph??a ????ng B???c, b??i K??? Co hi???n l??n nh?? m???t b???c tranh tuy???t ?????p ?????ng l??ng ng?????i. Kh??ng ch??? h???p d???n v???i b??i t???m hoang s?? ??t d???u ch??n ng?????i m?? K??? Co c??n l?? ??i???m th?????ng th???c h???i s???n t????i ngon n???a. ????? ?????n ???????c b??i t???m xinh ?????p n??y, b???n di chuy???n ra Quy Nh??n theo nhi???u c??ch kh??c nhau. B???n c?? th??? ?????t v?? m??y bay, ??i t??u h???a  v???i gi?? v?? dao ?????ng t??? 500k - 800k ho???c ??i xe kh??ch v???i gi?? v?? t??? 350k-400k. T??? Quy Nh??n b???n c?? th??? thu?? xe m??y (kho???ng 120k/ng??y) ho???c b???t taxi ?????n Eo Gi?? (kho???ng 250k). Sau ???? t??? Eo Gi?? thu?? can?? ho???c ghe ra K??? Co. Ghe th?????ng ?????u c??ch b??? kho???ng 100m, b???n s??? ???????c ????a v??o b??? b???ng nh???ng chi???c thuy???n th??ng d??? th????ng.  N???u mu???n th?????ng th???c nh???ng m??n h???i s???n ?????c tr??ng c???a v??ng bi???n, c??c b???n c?? th??? ?????t m??n r???i nh??? ng?????i d??n ??? ????y ch??? bi???n lu??n. H???i s???n ??? ????y ???bao t????i??? n??n r???t ngon, ra ????y kh??ng th?????ng th???c l?? ti???c l???m nha m???y b???n. T??nh chi ph?? cho vi???c ??i nghe ra b??i K??? Co v???i th?????ng th???c h???i s???n ch??? t???m 300k/ng?????i th??i nh??!
</Text>
        </View>
        <View style={{ height: 30, marginHorizontal: 16, justifyContent: 'space-between', flexDirection: 'row', marginTop: 20 }}>
          <Text style={{ color: '#000000', fontWeight: 'bold' }}>?????a ??i???m ????? xu???t</Text>
          <TouchableOpacity><Text style={{ color: '#9E9E9E', fontSize: 12 }}>Xem th??m  <Image source={require('../assets/images/Right.png')} style={{ width: 3, height: 7 }} /></Text></TouchableOpacity>
        </View>
        <FlatList
          data={Data}
          keyExtractor={item => item.id}
          renderItem={renderItemDiaDiem}
          horizontal
          style={{ marginLeft: 16 }}
        />
        <View style={{ height: 30, marginHorizontal: 16, justifyContent: 'space-between', flexDirection: 'row', marginTop: 20 }}>
          <Text style={{ color: '#000000', fontWeight: 'bold' }}>Nh?? h??ng ????? xu???t</Text>
          <TouchableOpacity><Text style={{ color: '#9E9E9E', fontSize: 12 }}>Xem th??m  <Image source={require('../assets/images/Right.png')} style={{ width: 3, height: 7 }} /></Text></TouchableOpacity>
        </View>
        <FlatList
          data={Data_NhaHang}
          keyExtractor={item => item.id}
          renderItem={renderItemKS_RS}
          horizontal
          style={{ marginLeft: 16 }}
        />
        <View style={{ height: 30, marginHorizontal: 16, justifyContent: 'space-between', flexDirection: 'row', marginTop: 20 }}>
          <Text style={{ color: '#000000', fontWeight: 'bold' }}>Kh??ch s???n & Resort</Text>
          <TouchableOpacity><Text style={{ color: '#9E9E9E', fontSize: 12 }}>Xem th??m  <Image source={require('../assets/images/Right.png')} style={{ width: 3, height: 7 }} /></Text></TouchableOpacity>
        </View>
        <FlatList
          data={DataKS}
          keyExtractor={item => item.id}
          renderItem={renderItemKS_RS}
          horizontal
          style={{ marginLeft: 16 }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
export default ChiTietThamQuan;