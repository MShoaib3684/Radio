import React from 'react';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Profile, Radio, Setting, TV, Video } from '..';

const BottomTab = createBottomTabNavigator();

const TabRoutes = ({ navigation }) => {
    return (
        <BottomTab.Navigator
            tabBar={(tabsProps) => (
                <>
                    <BottomTabBar {...tabsProps} />
                </>
            )}
            initialRouteName="Radio"
        >
            <BottomTab.Screen name="Radio" component={Radio} />
            <BottomTab.Screen name="TV" component={TV} />
            <BottomTab.Screen name="Video" component={Video} />
            <BottomTab.Screen name="Setting" component={Setting} />
            {/* <BottomTab.Screen name="Home" component={Home} /> */}
            {/* <BottomTab.Screen name="Profile" component={Profile} /> */}
        </BottomTab.Navigator>

    )
}

export default TabRoutes