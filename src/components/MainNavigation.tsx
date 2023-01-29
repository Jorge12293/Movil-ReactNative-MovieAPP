import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/Home";
import Detail from "../screens/Detail";
import NavBar from "./NavBar";
import Search from "../screens/Search";


const Stack = createNativeStackNavigator();

class MainNavigation extends React.PureComponent{
    render (){
        return (
            <Stack.Navigator
                initialRouteName="Home">
                <Stack.Screen 
                    name="Home" 
                    component={Home} 
                    options={{
                        headerTransparent: true,
                        header: ({navigation}) =><NavBar navigation={navigation} main={true}/>
                    }}/>
                <Stack.Screen 
                    name="Detail" 
                    component={Detail} 
                    options={{
                        headerTransparent: true,
                        header: ({navigation}) =><NavBar navigation={navigation} main={false}/>
                    }}/>
                <Stack.Screen 
                    name="Search" 
                    component={Search} 
                    options={{
                        headerTransparent: true,
                        header: ({navigation}) =><NavBar navigation={navigation} main={false}/>
                    }}/>
            </Stack.Navigator>
        );
    }
}


export default MainNavigation;