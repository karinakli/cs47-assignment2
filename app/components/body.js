import { StyleSheet, Text, View, Platform, ImageBackground, Image, TurboModuleRegistry } from 'react-native';
import { Themes } from '../../assets/Themes';

export const Card = () => {
    return (
        <View style={styles.card}>
          <ImageBackground source={(require('../../assets/Profiles/mtl.jpg'))} 
              style={styles.cardImage}
              imageStyle={{borderRadius: 10,}}>
              <View style={{padding: 15, justifyContent: 'space-between', height: '100%'}}>
                <Text style={{fontFamily: 'Sydney',fontSize: 32, color: 'white'}}>
                  MTL
                </Text>
                <Text style={{fontFamily: 'Sydney',fontSize: 18, color: 'white'}}>
                  2 miles away
                </Text>
              </View>
          </ImageBackground>

          <View style={styles.audioCard}>
            <Text style={{fontFamily: 'Sydney', fontSize: 25}}>
              My hottest take
            </Text>
            <View style={{height: '80%', flexDirection: 'row', marginTop: '1%', justifyContent: 'space-evenly', alignItems: 'center'}}>
              <Image source={require('../../assets/Icons/player_light.png')}
                    style={{height: 50, width: 50}}/>
              <Image source={require('../../assets/Icons/audio_waveform_light.png')}
                    style={{height: '70%', width: '70%'}}/>
            </View>
          </View>
      </View>
    )
    
}

const styles = StyleSheet.create({
  card: {
    flex: 6,
    backgroundColor: Themes.light.bg,
    width: '80%',
    paddingHorizontal: '5%',
    alignItems: 'center',
  },
  audioCard: {
    marginTop: 20,
    height: '20%',
    backgroundColor: Themes.light.bgSecondary,
    borderRadius: 20,
    width: '100%',
    padding: 15,
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    shadowRadius: Themes.light.shadows.shadowRadius,
    shadowOffset: Themes.light.shadows.shadowOffset,
  },
  cardImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1/1.1,
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    shadowRadius: Themes.light.shadows.shadowRadius,
    shadowOffset: Themes.light.shadows.shadowOffset,
  },
});
  

export default Card;