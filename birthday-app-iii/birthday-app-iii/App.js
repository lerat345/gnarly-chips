// Example of Calendar with Events Listed in React Native
// https://aboutreact.com/example-of-calendar-with-events-listed-in-react-native/

// import React in our code
import React, { useState } from 'react';

// import all the components we are going to use
import { SafeAreaView, StyleSheet, View, Dimensions,TextInput,Text,TouchableOpacity  } from 'react-native';

//import EventCalendar component
import EventCalendar from 'react-native-events-calendar';
import {Card} from 'react-native-paper'; 
//get the size of device
let { width } = Dimensions.get('window');

const App = () => {

     const [start,setStart] =useState('');
   const [end,setEnd] =useState('');
    const [title,setTitle] =useState('');
     const [summary,setSummary] =useState('');
       const [events, setEvents] = useState([
    {
      start: '2022-09-19 08:00:00',
      end: '2022-09-19 10:00:00',
      title: 'cocktail party',
      summary: 'project outlook',
    },
    {
      start: '2020-01-01 01:00:00',
      end: '2020-01-01 02:00:00',
      title: 'New Year Wishes',
      summary: 'Call to every one',
    },
    {
      start: '2020-01-02 00:30:00',
      end: '2020-01-02 01:30:00',
      title: 'Parag Birthday Party',
      summary: 'Call him',
    },
    {
      start: '2020-01-03 01:30:00',
      end: '2020-01-03 02:20:00',
      title: 'My Birthday Party',
      summary: 'Lets Enjoy',
    },
    {
      start: '2020-02-04 04:10:00',
      end: '2020-02-04 04:40:00',
      title: 'Engg Expo 2020',
      summary: 'Expoo Vanue not confirm',
    },
  ]);

  const eventClicked = (event) => {
    //On Click oC a event showing alert from here
    alert(JSON.stringify(event));
  };

 
 

  const addTask =(() => {
    setEvents((events) => [...events, {start:start,end:end,title:title,summary:summary }]);
    consol.log(events);
  })
  const [task,seTask] =useState([])
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <EventCalendar
          eventTapped={eventClicked}
          //Function on event press
          events={events}
          //passing the Array of event
          width={width}
          //Container width
          size={60}
          //number of date will render before and after initDate
          //(default is 30 will render 30 day before initDate and 29 day after initDate)
          initDate={'2020-01-01'}
          //show initial date (default is today)
          scrollToFirst
          //scroll to first event of the day (default true)
         />
        <Text>{name}</Text>
        <TextInput placeholder="Title" onChangeText={(task => setTitle(task))}/>
         <TextInput placeholder="End date" onChangeText={(task => setEnd(task))}/>
             <TextInput placeholder="Start date"  onChangeText={(task => setStart(task))}/>
               <TextInput placeholder="Summary"  onChangeText={(task => setSummary(task))}/>

        <TouchableOpacity style={styles.btn}
        onPress= {addTask}/>
        <Text> Add</Text>
        <TouchableOpacity/>

      
        
         ))}
       <EventCalendar
       eventTapped={eventClicked}
       events={events}
       width={width}
       size={60}
       scrollToFirst/>
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

btn:{
  backgroundColor:'red',
  width:150,
  height:50,
  marginleft:85,
  paddingleft:12,
  paddingTop:15,
},
});
