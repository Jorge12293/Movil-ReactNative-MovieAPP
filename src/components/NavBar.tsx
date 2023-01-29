import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from "../themes/colors";


const NavBar = (props: {navigation:any,main:boolean}) => {
    const {navigation,main} = props;

    return (
        <SafeAreaView>
            {   main 
                ? (<View style={styles.mainNav}>
                    <Image 
                        style={styles.logo}
                        source={require('../../assets/images/movies.png')}/>
                    <TouchableOpacity
                        onPress={()=> {navigation.navigate('Search');}}>
                        <Icon name="search" size={30} color={Colors.white} />
                    </TouchableOpacity>
                  </View>)
                : (<View>
                    <TouchableOpacity
                        onPress={()=> {navigation.goBack()}}>
                        <Icon name="chevron-circle-left" size={35} color={Colors.lightGray} />
                    </TouchableOpacity>
                   </View>
                )}
        </SafeAreaView> 
    );
}


const styles = StyleSheet.create({
    logo:{
       width:50,
       height:50, 
    },
    mainNav:{
       flex:1,
       justifyContent:'space-between',
       flexDirection:'row',
       padding:10,
       alignItems:'center', 
    }
});

export default NavBar;