import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
    FlatList,
    TextInput,Alert,
    Switch
} from 'react-native';
import { Modal } from 'react-native-paper';

import { useSelector, useDispatch } from 'react-redux';
import CalendarPicker from 'react-native-calendar-picker';
const ScreenTaoLichTrinh = ({ navigation }) => {
    const active_CalendarPicker = useSelector(state => state.active_CalendarPicker);
    const [visible, setVisible] = React.useState(false);
    const dispatch = useDispatch();
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    //const Data_LichTrinh = useSelector(state => state.data_diadiem);
    const XuatPhat = useSelector(state => state.ThanhPhoChon);
    const DiemDen = useSelector(state => state.ThanhPhoChon2);
    //const DiemDen = useSelector(state => state.DiemDen);
    const [isEnabled, setIsEnabled] = React.useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const sum_NguoiThamGia = useSelector(state => state.sum_NguoiThamGia)
    const onFocusXuatPhat = () => {
        dispatch({ type: 'GUIKEY', value: 'xuatphat' });
        dispatch({ type: 'GUIKEYSCREEN', value: 'taolichtrinh' });
        navigation.navigate('ScreenTimKiem');
    }
    const onFocusDiemDen = () => {
        dispatch({ type: 'GUIKEY', value: 'diemden' });
        dispatch({ type: 'GUIKEYSCREEN', value: 'taolichtrinh' });
        navigation.navigate('ScreenTimKiem');
    }
    const CalendarPicker_Custom = () => {

        const customDayHeaderStylesCallback = ({ dayOfWeek, month, year }) => {
            switch (dayOfWeek) { // can also evaluate month, year
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 7:
                    return {
                        textStyle: {
                            color: '#F8530D'
                        }
                    }
                case 6: // Thursday
                    return {
                        textStyle: {
                            color: '#F8530D',
                        }
                    };
            }
        }
        const customDatesStylesCallback = date => {
            switch (date.isoWeekday()) {

                case 6: // Sunday
                    return {
                        textStyle: {
                            color: '#F8530D',
                        }
                    };
                case 5: // Sunday
                    return {
                        textStyle: {
                            color: '#F8530D',
                        }
                    };
            }
        }
        return (
            <View style={{ backgroundColor: 'white', borderRadius: 10, marginHorizontal: 16, overflow: 'hidden' }}>
                <CalendarPicker

                    previousTitle='<'
                    nextTitle='>'
                    customDatesStyles='YYYY-MM'
                    nextTitleStyle={{ backgroundColor: '#FFFFFF', marginRight: 16, borderRadius: 2, elevation: 5, paddingLeft: 10, paddingRight: 10 }}
                    previousTitleStyle={{ backgroundColor: '#FFFFFF', marginLeft: 16, borderRadius: 2, elevation: 5, paddingLeft: 7, paddingRight: 10 }}
                    todayBackgroundColor="#F8530D" selectedDayColor="#F8530D"
                    selectedDayTextColor="#FFFFFF"
                    startFromMonday={true}
                    allowRangeSelection={true}
                    selectedRangeStartStyle={{ backgroundColor: '#F8530D' }}
                    selectedRangeEndStyle={{ backgroundColor: '#F8530D' }}
                    selectedRangeStyle={{ opacity: 0.1, backgroundColor: '#F8530D' }}
                    todayTextStyle='#F8530D'
                    customDatesStyles={customDatesStylesCallback}
                    customDayHeaderStyles={customDayHeaderStylesCallback}
                    weekdays={['Th 2', 'Th 3', 'Th 4', 'Th 5', 'Th 6', 'Th 7', 'CN']}
                    months={['Th??ng 1', 'Th??ng 2', 'Th??ng 3', 'Th??ng 4', 'Th??ng 5', 'Th??ng 6', 'Th??ng 7', 'Th??ng 8', 'Th??ng 9', 'Th??ng 10', 'Th??ng 11', 'Th??ng 12']}
                />
                <View style={{ height: 20, margin: 16, justifyContent: 'center', alignItems: 'flex-end' }}>
                    <TouchableOpacity onPress={hideModal}>
                        <  Text style={{ color: '#FF5F24', fontSize: 14, fontWeight: 'bold' }}>OK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );

    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <StatusBar barStyle='dark-content' />
            <View style={{ height: 40, alignItems: 'center', flexDirection: 'row', paddingHorizontal: 16, justifyContent: 'space-between', marginVertical: 10, backgroundColor: '#ffffff' }}>
                <TouchableOpacity onPress={() => navigation.goBack()} ><Image source={require('../assets/images/back.png')} style={{ width: 6, marginRight: 12 }} /></TouchableOpacity>
                <View><Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black' }}>T???o L???ch Tr??nh</Text></View>
                <View></View>
            </View>
            <View style={{ backgroundColor: '#F8F8F8', flex: 1, padding: 16 }}>
                <View style={{ flex: 9 }}>
                    <View style={{ borderBottomWidth: 0.5, marginVertical: 8, borderColor: '#000000', height: 40, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1, justifyContent: 'center' }}><Image source={require('../assets/images/pin1.png')} style={{ width: 20, height: 20 }} /></View>
                        <TextInput onFocus={onFocusXuatPhat} placeholder="Xu???t ph??t" value={XuatPhat} placeholderTextColor='#989898' style={{ padding: 10, flex: 9 }} />
                    </View>
                    <View style={{ borderBottomWidth: 0.5, marginVertical: 8, borderColor: '#000000', height: 40, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1, justifyContent: 'center' }}><Image source={require('../assets/images/placeholders1.png')} style={{ width: 20, height: 20 }} /></View>
                        <TextInput onFocus={onFocusDiemDen} placeholder="??i???m ?????n" placeholderTextColor='#989898' value={DiemDen} style={{ padding: 10, flex: 9 }} />
                    </View>
                    <View style={{ borderBottomWidth: 0.5, marginVertical: 8, borderColor: '#000000', height: 40, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1, justifyContent: 'center' }}><Image source={require('../assets/images/calendar1.png')} style={{ width: 20, height: 20 }} /></View>
                        <TextInput onFocus={showModal} placeholder="Th???i gian" placeholderTextColor='#989898' style={{ padding: 10, flex: 9 }} />
                    </View>
                    <View style={{ borderBottomWidth: 0.5, marginVertical: 8, borderColor: '#000000', height: 40, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1, justifyContent: 'center' }}><Image source={require('../assets/images/friends1.png')} style={{ width: 20, height: 20 }} /></View>
                        <TextInput value={sum_NguoiThamGia} onFocus={() => navigation.navigate('ScreenNguoiThamGia')} placeholder="Ng?????i tham gia" placeholderTextColor='#989898' style={{ padding: 10, flex: 9 }} />
                    </View>
                    <View style={{ marginVertical: 8, height: 40, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1, justifyContent: 'center' }}><Image source={require('../assets/images/open-lock1.png')} style={{ width: 20, height: 20 }} /></View>
                        <TextInput placeholder="C??ng khai" placeholderTextColor='#989898' style={{ padding: 10, flex: 6 }} />
                        <View style={{ flex: 3, alignItems: 'flex-end' }}>
                            <Switch
                                trackColor={{ false: "#767577", true: "#00D52F" }}
                                thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled} />
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <TouchableOpacity onPress={() => Alert.alert('Th??ng b??o', 'B???n ???? t???o l???ch tr??nh th??nh c??ng !')}style={{ backgroundColor: '#FF5F24', borderRadius: 5, height: 35, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 14, lineHeight: 17 }}>T???o L???ch Tr??nh</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Modal visible={visible} onDismiss={hideModal} >
                <CalendarPicker_Custom />
            </Modal>
        </SafeAreaView>
    );
}
export default ScreenTaoLichTrinh;