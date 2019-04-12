import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Drawer from '../components/Drawer';

export default function DrawerScreen() {
    return (
        <ScrollView style={{ backgroundColor: '#111111' }}>
            <SafeAreaView>
                <Drawer />
            </SafeAreaView>
        </ScrollView>
    );
}
