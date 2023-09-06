import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView, Pressable, Image, FlatList } from 'react-native';
import { useState } from 'react';
import Logo from './assets/linux.png'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

const Card = (props) => {

  return (
    <View style={CardStyle.wrapper}>
      <Text style={CardStyle.text}>{props.title}</Text>
      <Text style={CardStyle.body}>{props.children}</Text>
    </View>

  )
}

const LoginScreen = ({ navigation }) => {

  const showToast = () => {
    // ToastAndroid.show('Logging success!', ToastAndroid.SHORT)
  }

  const image = { uri: 'https://legacy.reactjs.org/logo-og.png' };
  const image2 = { Logo };
  const [name, onChangeName] = useState()
  const [pwd, onChangePwd] = useState()

  function onHandleButton() {
    navigation.navigate('home', { name: name })
    showToast()
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
      />
      <TextInput
        onChangeText={onChangePwd}
        value={pwd}
        placeholder='Password'
        style={styles.input}
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

  const data = [
    {
      title: 'title',
      body: 'Minim velit laborum labore ullamco ut aute eiusmod amet.'
    } * 7,
  ]


  return (
    <View style={styles.homeContainer}>



      <Text style={styles.welcome}>{name ? `Hello ${name}` : 'Welcome'}</Text>



      <FlatList
        data={data}
        renderItem={({ item }) => (

          <Card title={item.title}>
            {item.body}
          </Card>

        )}
        keyExtractor={item => item.title}
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
            title: 'Home'
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const CardStyle = StyleSheet.create({
  wrapper: {
    backgroundColor: 'black',
    padding: 16,
    margin: 16,
    borderRadius: 8

  },

  text: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '600'
  },

  body: {
    color: '#fff',
    fontWeight: '200',
    fontSize: 20
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
