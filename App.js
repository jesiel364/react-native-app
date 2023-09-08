import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView, Pressable, Image, FlatList, ToastAndroid } from 'react-native';
import { useEffect, useState } from 'react';
import Logo from './assets/linux.png'
import Img1 from './assets/image1.jpg'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

const Card = (props) => {

  return (
    <View style={CardStyle.wrapper}>
      <Text style={CardStyle.title}>{props.title}</Text>
      <Text style={CardStyle.body}>{props.children}</Text>
      <Image source={props.img} style={CardStyle.img} />
    </View>

  )
}

const LoginScreen = ({ navigation }) => {

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT)
  }

  const image = { uri: 'https://legacy.reactjs.org/logo-og.png' };
  const image2 = { Logo };
  const [name, onChangeName] = useState()
  const [pwd, onChangePwd] = useState()

  function onHandleButton() {
    if(name === 'John'){
      navigation.navigate('home', { name: name })
      showToast('Logging success!')
    } else{
      showToast('Logging error!')
    }

  }



  return (
    <View style={styles.container}>

      <Image source={Logo} style={styles.tinyLogo} />

      <Text style={styles.title}>Login</Text>


      <TextInput
        onChangeText={onChangeName}
        value={name}
        placeholder='Name'
        style={styles.input}
        keyboardType='ascii-capable'
      />
      <TextInput
        onChangeText={onChangePwd}
        value={pwd}
        placeholder='Password'
        style={styles.input}
        keyboardType='number-pad'
      />


      <Pressable onPress={() => onHandleButton()} style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>

      </Pressable>

      <Pressable style={{
        width: 340,
        marginTop: 16,
        marginRight: 16
      }} >
        <Text style={{
          textAlign: 'right',
        }}>Forget password?</Text>
      </Pressable>

      <StatusBar style="auto" />

    </View>
  )
}
const HomeScreen = ({ navigation, route }) => {

  const name = route.params.name

  const data = [ ]

  for (let i = 0; i < 10; i++){

    data.push({ id: i,
      title: `Title ${i}`,
      body: 'Minim velit laborum labore ullamco ut aute eiusmod amet.',
      img: Logo
    })
  }

  // useEffect(()=> {
    
  // }, [])


  return (
    <View style={styles.homeContainer}>



      <Text style={styles.welcome}>{name ? `Hello ${name}` : 'Welcome'}</Text>



      <FlatList
        data={data}
        renderItem={({ item }) => (

          <Card title={item.title} img={Img1}>
            {item.body}
   
          </Card>

        )}
        keyExtractor={item => item.id}
      />


      {/* <StatusBar style="auto" /> */}

    </View>
  )
}

export default function App() {



  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name='login'
          component={LoginScreen}
          options={{
            title: 'Welcome'
          }}

        />


        <Stack.Screen
          name='home'
          component={HomeScreen}
          options={{
            title: 'Feed',
            // headerShown: false
          
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const CardStyle = StyleSheet.create({
  wrapper: {
    backgroundColor: '#eee',
    // padding: 16,
    margin: 16,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
    textAlign: 'start'

  },

  text: {
    color: '#363636',
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'left'
  },

  body: {
    color: '#363636',
    fontWeight: '200',
    fontSize: 20,
    marginBottom: 0
  },

  img: {
    width: '100%',
    height: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 16,
    flex: 1,
    borderRadius: 8,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },

  title:{
    fontWeight: '600',
    fontSize: 26,
    color: '#363636',
    // backgroundColor: 'red'
    marginRight: 'auto',
    marginLeft: 16,
    marginBottom: 8,
    marginTop: 8
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // backgroundColor: '#612F74',
    alignItems: 'center',
    // justifyContent: 'center',
    maxWidth: 600,
    justifyContent: 'center',
    textAlign: 'center',
    maxWidth: 400,
  },


  homeContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    // justifyContent: 'center',
    maxWidth: 400,
    justifyContent: 'top',
    textAlign: 'center',
    // maxWidth: '100%',
    marginTop: 0,

  },

  input: {
    // height: 40,
    marginTop: 12,
    borderWidth: 1,
    // borderRadius: 12,
    padding: 8,
    fontSize: 20,
    width: 340

  },

  button: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: 'black',
    elevation: 3,
    borderRadius: 4,
    width: 340
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',

  },

  title: {
    fontWeight: '600',
    fontSize: 26,
    color: 'black',
    // backgroundColor: 'red'
    marginRight: 'auto',
    marginLeft: 28
  },

  tinyLogo: {
    width: 180,
    height: 180,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 64
  },

  welcome: {
    margin: 16,
    fontWeight: '200',
    fontSize: 26,

  }
});
