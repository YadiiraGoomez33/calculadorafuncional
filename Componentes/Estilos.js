import { StyleSheet } from "react-native";

export const calculatorStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aqua', // Cambio de color a "aqua"
    justifyContent: 'center',
    alignItems: 'center',
  },
  display: {
    fontSize: 50,
    marginBottom: 20,
    color: '#130912',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#569ad1', 
    padding: 20,
    margin: 5,
    borderRadius: 50,
    width: 80,
    height: 80,
    borderWidth: 2,
    borderColor: '#130912',
  },
  buttonText: {
    fontSize: 25,
    color: '#ecf0f1', 
  },
});
