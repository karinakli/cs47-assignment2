import { StyleSheet, Text, View, Platform, Image } from 'react-native';
import { Themes } from '../../assets/Themes';

export const Header = () => {
    return (
        <View style={styles.header}>
            <Image source={require('../../assets/Icons/menu_light.png')} 
                style={styles.icon}/>
            <Text style={{fontFamily: 'Sydney-Bold', fontSize: 40}}>
            Hinged
            </Text>
            <Image source={require('../../assets/Icons/sun.png')} 
                style={styles.icon}/>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS == 'ios' ? 30: 0,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      backgroundColor: Themes.light.bg,
    },
    header: {
      flex: 1,
      width: '100%',
      height: Platform.OS == 'ios' ? 41:54,
      backgroundColor: Themes.light.bg,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingRight: 20,
      paddingLeft: 20,
    },
    icon: {
      height: 50,
      width: 50,
    },
  });
  

export default Header;