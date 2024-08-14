import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  ActivityIndicator,
  GestureResponderEvent,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import TrackPlayer, { useProgress } from 'react-native-track-player';
import { RepeatMode } from 'react-native-track-player';
import Slider from '@react-native-community/slider';
import { setupPlayer, addTrack, playbackService } from '../musicPlayerServices';
import MusicPlayer from './screens/MusicPlayer';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [iconImg, setIconImg] = useState<string>('play')
  const [isPlaying, setIsPlaying] = useState<string>('')
  const thumbnailData = [
    require('./assets/tnail.jpg'),
    require('./assets/secondTnail.png')
  ]
  const [thumbNail, setThumbNail] = useState<any>(thumbnailData[0])
  const { position, buffered, duration } = useProgress(1)
  
  const track1 = {
    url: 'https://www2.cs.uic.edu/~i101/SoundFiles/gettysburg.wav', // Load media from the network
    title: 'Avaritia',
    artist: 'deadmau5',
    album: 'while(1<2)',
    genre: 'Progressive House, Electro House',
    date: '2014-05-20T07:00:00+00:00', // RFC 3339 // Load artwork from the network
    artwork: './assets/tnail.jpg',
    duration: 402 // Duration in seconds
  };

  const track2 = {
    url: require('./assets/beep.mp3'), // Load media from the app bundle
    title: 'Coelacanth I',
    artist: 'deadmau5', // Load artwork from the app bundle
    duration: 166
  };

  // const track3 = {
  //   url: '/home/agrim/Downloads/songFirst.mp3', // Load media from the file system
  //   title: 'Ice Age',
  //   artist: 'deadmau5',
  //   // Load artwork from the file system:
  //   artwork: 'file:///storage/sdcard0/Downloads/cover.png',
  //   duration: 411
  // };

  // /run/user/1000/gvfs/mtp:host=SAMSUNG_SAMSUNG_Android_RZ8T41QNAQA/SD card/Download/SongSecond.mp3
  
  const track4 = {
    url: require('./assets/songFirst.mp3'), // Load media from the app bundle
    title: 'Coelacanth I',
    artist: 'deadmau5', // Load artwork from the app bundle
    duration: 166,
    artwork: './assets/secondTnail.png'
  };

  const track5 = {
    url: require('./assets/ding.mp3'), // Load media from the app bundle
    title: 'Coelacanth I',
    artist: 'deadmau5', // Load artwork from the app bundle
    duration: 166
  };

  const track6 = {
    url: require('./assets/horn.mp3'), // Load media from the app bundle
    title: 'Coelacanth I',
    artist: 'deadmau5', // Load artwork from the app bundle
    duration: 166
  };

  const track7 = {
    url: require('./assets/shout.mp3'), // Load media from the app bundle
    title: 'Coelacanth I',
    artist: 'deadmau5', // Load artwork from the app bundle
    duration: 166
  };

  //You can then [add](https://rntp.dev/docs/api/functions/queue#addtracks-insertbeforeindex) the items to the queue
  const [isPlayerReady, setIsPlayerReady] = useState(false)

  async function setup(){
    let isSetup = await setupPlayer()

    if (isSetup) {
      await addTrack()
    }

    setIsPlayerReady(isSetup)
  }

  useEffect(() => {
    setup()
  }, [])
  
  if (!isPlayerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    )
  }

  // const setupTrackPlayer = async () => {
  //   if (isPlaying === '') {
  //     await TrackPlayer.setupPlayer();
  //     await TrackPlayer.add([track1,track4]);
  //     TrackPlayer.setRepeatMode(RepeatMode.Queue)
  //     const state = await TrackPlayer.getPlaybackState();
  //     let currentTrackIndex = await TrackPlayer.getActiveTrackIndex();
  //     //let currentTrack = await TrackPlayer.getActiveTrack()
  //     let currentTrackThumbnailIndex = currentTrackIndex ? currentTrackIndex:0;
  //     //console.log(seekbarValue)
  //     console.log(currentTrackIndex, "currentTrackIndex")
  //     console.log(state);
  //     console.log(currentTrackThumbnailIndex,"currentTrackThumbnailIndex")
  //     setThumbNail(thumbnailData[currentTrackThumbnailIndex])
  //     setIconImg('pause');
  //     TrackPlayer.play();
  //     setIsPlaying('playing')
  //   }
  //   else if (isPlaying === 'paused') {
  //     setIconImg('pause');
  //     TrackPlayer.play();
  //     //console.log(seekbarValue)
  //     const state = await TrackPlayer.getPlaybackState();
  //     let currentTrackIndex = await TrackPlayer.getActiveTrackIndex();
  //     console.log(state, currentTrackIndex);
  //     console.log('played');
  //     setIsPlaying('playing')
  //   }
  //   else {
  //     setIconImg('play');
  //     TrackPlayer.pause()
  //     //console.log(seekbarValue)
  //     const state = await TrackPlayer.getPlaybackState();
  //     let currentTrackIndex = await TrackPlayer.getActiveTrackIndex();
  //     console.log(state, currentTrackIndex);
  //     console.log('paused');
  //     setIsPlaying('paused')
  //   }
  // }

  // const handleStepBackward = async (event: GestureResponderEvent): Promise<void> => {
  //   //throw new Error('Function not implemented.');
  //   TrackPlayer.skipToPrevious();
  //   let currentTrackIndex = await TrackPlayer.getActiveTrackIndex();
  //   let currentTrackThumbnailIndex = currentTrackIndex ? currentTrackIndex:0;
  //   console.log(currentTrackIndex, "currentTrackIndex")
  //   console.log(currentTrackThumbnailIndex,"currentTrackThumbnailIndex")
  //   setThumbNail(thumbnailData[currentTrackThumbnailIndex])
  // }

  // async function handleStepForward(event: GestureResponderEvent): Promise<void> {
  //   //throw new Error('Function not implemented.');
  //   TrackPlayer.skipToNext();
  //   let currentTrackIndex = await TrackPlayer.getActiveTrackIndex();
  //   let currentTrackThumbnailIndex = currentTrackIndex ? currentTrackIndex:0;
  //   console.log(currentTrackIndex, "currentTrackIndex")
  //   console.log(currentTrackThumbnailIndex,"currentTrackThumbnailIndex")
  //   setThumbNail(thumbnailData[currentTrackThumbnailIndex])
  // }

  // function handleSliding(value: number): void {
  //   //throw new Error('Function not implemented.');
  //   TrackPlayer.seekTo(value*duration)
  //   //console.log(TrackPlayer.getProgress())
  // }

  // return (
  //   <>
  //     <StatusBar
  //     />
  //     <View style={styles.header}>
  //       <Text style={styles.headerText}>MUSIC PLAYER</Text>
  //     </View>
  //     <View style={styles.container}>
  //       <View style={styles.headerContainer}>
  //         <Image
  //           source={thumbNail}
  //           style={styles.thumbnailImg}
  //         />
  //         <Text>Chak de India</Text>
  //         <Text>chak de o chak de India</Text>
  //       </View>

  //       <Slider
  //         style={[{ width: 300, height: 20 }, styles.slider]}
  //         minimumValue={0}
  //         value={position/duration}
  //         onValueChange={handleSliding}
  //         maximumValue={1}
  //         thumbTintColor='#ddaec3'
  //         minimumTrackTintColor="#7448bb"
  //         maximumTrackTintColor="#000000"
  //       />

  //       <View style={styles.footerContainer}>
  //         <TouchableOpacity style={styles.actionBtn}>
  //           {/* <Text style={styles.actionBtnTxt}>Press me</Text> */}
  //           <Icon name='step-backward' size={30} color="#fff" onPress={handleStepBackward} />
  //         </TouchableOpacity>
  //         <TouchableOpacity style={styles.actionBtnMain} onPress={setupTrackPlayer}>
  //           <Icon name={iconImg} size={30} color="#fff" />
  //         </TouchableOpacity>
  //         <TouchableOpacity style={styles.actionBtn} onPress={handleStepForward}>
  //           <Icon name='step-forward' size={30} color="#fff" />
  //           {/* <Icon name="pause" size={30} color="#900" /> */}
  //         </TouchableOpacity>
  //         {/* <TouchableOpacity onPress={pauseTrackPlayer} style={styles.actionBtn}>
  //         { <Text style={styles.actionBtnTxt}>Pau
  //       </TouchableOpacity> */}
  //       </View>
  //     </View>
  //   </>
  // );

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <MusicPlayer />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 55,
    marginTop: 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000'
  },
  slider:{
    
  },
  headerText: {
    fontSize: 24,
    color: '#ffffff'
  },
  headerContainer: {
    flexDirection: 'column',
    gap: 15,
    alignItems: 'center'
  },
  thumbnailImg: {
    height: 250,
    width: 250
  },
  footerContainer: {
    flexDirection: 'row',
    gap: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    gap: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  highlight: {
    fontWeight: '700',
  },
  actionBtn: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#000000",
    paddingVertical: 17,
    paddingHorizontal: 24
  },
  actionBtnMain: {
    borderRadius: 50,
    marginBottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#000000",
    paddingVertical: 25,
    paddingHorizontal: 28
  },
  actionBtnTxt: {
    fontSize: 24,
    color: "#FFFFFF",
    textTransform: "uppercase"
  }
});

export default App;
