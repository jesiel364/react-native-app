import Logo from 'assets/logo'

const LoginScreen = ({ navigation }) => {

    const showToast = (message) => {
      ToastAndroid.show(message, ToastAndroid.SHORT)
    }
  
    const image = { uri: 'https://legacy.reactjs.org/logo-og.png' };
    const image2 = { Logo };
    const [name, onChangeName] = useState()
    const [pwd, onChangePwd] = useState()
  
    function onHandleButton() {
      if (name === 'John') {
        navigation.navigate('home', { name: name })
        showToast('Logging success!')
      } else {
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

export default LoginScreen