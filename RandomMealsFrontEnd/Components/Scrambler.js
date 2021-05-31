import items from "../screens/Home/foodlist"
export const Scrambler =() => {
  
  return(
      <TouchableOpacity
        style={styles.button}
          onPress={() => {this.foodScrambler}} >
          <Text style={styles.buttonText}>⇄</Text>
        </TouchableOpacity>
  )

  
};

function foodScrambler(){
      let i = items.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = items[i];
    items[i] = items[j];
    item[j] = temp;
    
  }
  
}

const styles = StyleSheet.create ({
button:{
    flexDirection: 'row',
    alignSelf:'flex-start',
    marginBottom: 20,
    justifyContent: 'center',
    marginHorizontal: 48,
    width: 60,
    height: 60,
    fontWeight: "bold",
    fontSize: 40,
},
buttonText: {
        fontSize: 50,
        fontWeight: '400',
        color: "#fff",
    },
  });
//matnummer Rnd
//iterera igenom listan och lägg till rätterna
