import { StyleSheet, Text, View, Platform, Image } from 'react-native';
import { Themes } from '../../assets/Themes';

export const Navbar = () => {
    return (
      <View style={styles.bottomBar}>
        <View style={styles.navIcons}>
          <Image source={require('../../assets/Icons/discover_light.png')}
                style={styles.icon}/>
          <Text style={styles.barText}>Discover</Text>
        </View>
        <View style={styles.navIcons}>
          <Image source={require('../../assets/Icons/heart_light.png')}
                style={styles.icon}/>
          <Text style={styles.barText}>Matches</Text>
        </View>
        <View style={styles.navIcons}>
          <Image source={require('../../assets/Icons/messages_light.png')}
                style={styles.icon}/>
          <Text style={styles.barText}>DMs</Text>
        </View>
      </View>
    )
    
}

const styles = StyleSheet.create({
    bottomBar: {
      flex: 1,
      width: '100%',
      backgroundColor: Themes.light.navigation,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center'
    },
    barText: {
      fontFamily: 'Sydney',
      fontSize: 18,
      color: 'white',
      textAlign: 'center',
    },
    navIcons: {
      justifyContent: 'center',
      alignItems: 'center'
    },  
    icon: {
      height: '40%',
      width: undefined,
      aspectRatio: 1/1,
      marginBottom: 5
    },
  });
  

export default Navbar;