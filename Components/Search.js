import React from 'react'
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native'
import FilmItem from './FilmItem'
import films from '../Helpers/filmsData'
class Search extends React.Component {
   render(){
      return(
         <View style={styles.main_container}>
            <TextInput style={styles.textinput} placeholder='Titre du film'/>
            <Button title='Rechercher' onPress={() => {}}/>
            {/* Ici j'ai simplement repris l'exemple sur la documentation de la FlatList */}
            <FlatList
               data={films}
               keyExtractor={(item) => item.id.toString()}
               renderItem={({item}) => <FilmItem film={item}/>}
            />
         </View>
      )
   }
}

const styles = StyleSheet.create({
   textinput: {
      marginLeft: 5,
      marginRight: 5,
      height: 50,
      borderColor: '#000000',
      borderWidth: 1,
      paddingLeft: 5
   }
})
export default Search