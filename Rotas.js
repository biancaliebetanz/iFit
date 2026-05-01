

export const routes = () => {
  return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Cadastro" >
      <Stack.Screen name="Cadastro" component={TelaCadastro} />
      <Stack.Screen name="Catalogo" component={Catalogo} />
    </Stack.Navigator>
  </NavigationContainer>
)}