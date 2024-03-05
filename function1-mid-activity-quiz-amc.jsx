
// TouchableOpacity Component: for Delete

<TouchableOpacity onPress={() => iDeleteMo(index)}>

{/*
 it calls the iDeleteMo function with the current index as an argument.
*/}


{/*Delete Button Text:*/}

<Text style={styles.deleteButton}>X</Text>

{/*
Inside the TouchableOpacity, there is a Text component containing the 'X' character.
The style={styles.deleteButton} applies styling to the 'X' character. 
In this case, the text color is set to black, and the font size is set to 20.
*/}



{/*iDeleteMo Function:*/}

const iDeleteMo = (index) => {
  // Function body
};


{/*
The function iDeleteMo is a concise arrow function that takes an index as a parameter. 
It's typically used to delete a goal from an array, 
*/}


const updatedGoals = [...courseGoals];

{/*
The function starts by creating a  copy of the current courseGoals array using the spread operator ([...courseGoals]).
Creating a copy is essential to maintain the immutability of the state.
*/}



{/*Remove the Goal at the Specified Index:*/}


updatedGoals.splice(index, 1);


{/*
The splice method is used to modify the copied array (updatedGoals).
It takes two parameters: index (the position at which to start changing the array) and 1 (the number of elements to remove).
In this case, it removes one element (the goal at the specified index) from the updatedGoals array.
*/}



{/*Update the State with the Modified Array:*/}


setCourseGoals(updatedGoals);

{/*
The setCourseGoals function is used to update the state with the modified array (updatedGoals).
By calling setCourseGoals with the new array, React re-renders the component with the updated state, reflecting the removal of the goal.
*/}


--------------------------------------------------------------------------------------------------------------------------------------------------------


For Hide / Show functions


const itagoMoAko = (index) => {};


{/*This line declares a function named itagoMoAko that takes an index as a parameter.*/}


const updatedGoals = [...courseGoals]; 

{/*It creates a copy of the current courseGoals array using the spread operator to avoid modifying the state directly.*/}


updatedGoals[index].isVisible = !updatedGoals[index].isVisible;

{/*It toggles the isVisible property of the goal at the specified index using the logical NOT operator (!), which means if it was true, it becomes false, and vice versa.*/}


setCourseGoals(updatedGoals);

{/*It updates the state with the modified updatedGoals array, effectively triggering a re-render of the component.*/}



<Text style={styles.textF}>
  {item.isVisible ? `\u2022 ${item.text}` : '************'}
</Text>


{/*the bullet point ("\u2022") to each line in the goal list. The condition checks if the goal is visible, 
and if so, it displays the bullet point followed by the goal text. Otherwise, it displays asterisks to represent a hidden goal.*/}

<
Text style={styles.hideButton}>
  {item.isVisible ? 'HIDE' : 'SHOW'}
</Text>

{/* Similar to the previous conditional rendering, if item.isVisible is true, it shows 'HIDE', and if it's false, it shows 'SHOW'.*/}


-------------------------------------------------------------------------------------------------------------------------------------------------------------



For Edit functions 


const [editingIndex, setEditingIndex] = useState(null);

{/*Keeps track of the index of the goal being edited. If it's null, it means no goal is currently being edited.*/}


const startEditing = (index) => {
};

{/*This function is triggered when the "EDIT" button is pressed.*/}


setEnteredGoalText(courseGoals[index].text);

{/* It sets the enteredGoalText state to the text of the goal being edited. This ensures that the input field displays the current text of the goal.*/}


setEditingIndex(index);

{/* It sets the editingIndex state to the index of the goal being edited. This helps track which goal is currently being edited.*/}



const addGoalHandler = () => {};

{/* This function is triggered when the "Add Goal" or "Edit Goal" button is pressed.*/}


if (editingIndex !== null) {

/*It checks if editingIndex is not null, which means there is an ongoing edit.*/


  const updatedGoals = [...courseGoals];
  updatedGoals[editingIndex].text = enteredGoalText;

{/*If editing, it updates the text of the existing goal at the specified index with the enteredGoalText.*/}

  

  setCourseGoals(updatedGoals);
  setEditingIndex(null);


} else {
  
  setCourseGoals((currentCourseGoals) => [...currentCourseGoals, { text: enteredGoalText, isVisible: true }]);
}

setEnteredGoalText('');

{/*If not editing, it adds a new goal with the entered text and default visibility to true.
It resets the entered goal text to an empty string and sets editingIndex to null.*/}



<TouchableOpacity onPress={() => startEditing(index)}>
  <Text style={styles.editButton}>EDIT</Text>
</TouchableOpacity>

{/*I added a TouchableOpacity around the "EDIT" button, and the corresponding onPress handler calls the startEditing function with the current index.
This allows the user to press the "EDIT" button, initiating the editing process for the corresponding goal.*/}


{/*Ensure that you have the editButton style defined in your styles object. This style is applied to the "EDIT" button, giving it a  color, a font size of 20, and a left margin of 10.*/}


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


File separation

{/*separate this into two files: App.js and styles.js. 

The App.js file contains the main logic and components, while styles.js will hold the styles.*/}

{/*App.js*/}

import { styles } from './styles'; 

{/*Importing styles from the separate file*/}



{/*styles.js*/}

import { StyleSheet } from 'react-native'

{/* This file contains the styles for the components. It exports the styles object, which is imported and used in the App.js file.*/}

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



{/*separate files for the delete, hide/show, and edit functionalities. We'll have DeleteButton.js, HideButton.js, and EditButton.js.*/}


{/*App.js*/}


{/*Import Components:*/}

import DeleteButton from './DeleteButton';
import HideButton from './HideButton';
import EditButton from './EditButton';


{/*imported three components (DeleteButton, HideButton, and EditButton) from separate files. These components will handle the rendering and functionality of the corresponding buttons.*/}

 
{/*Import Components:*/}

<DeleteButton onPress={() => iDeleteMo(index)} />
<HideButton onPress={() => itagoMoAko(index)} isVisible={item.isVisible} />
<EditButton onPress={() => startEditing(index)} />

{/*the direct rendering of buttons with the imported components. Now, each button is a separate component (DeleteButton, HideButton, and EditButton), 
and passed the required props (onPress and isVisible) to each component.*/}


{/*DeleteButton.js*/}

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';


const DeleteButton = ({ onPress }) => (

{/*This line declares a functional component named DeleteButton. It uses arrow function syntax, which is onPress prop 
This prop is a function that will be called when the delete button is pressed.*/}

  <TouchableOpacity onPress={onPress}>
    <Text style={styles.deleteButton}>X</Text>
  </TouchableOpacity>
);

export default DeleteButton;



{/*HideButton.js*/}

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

const HideButton = ({ onPress, isVisible }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={styles.hideButton}>{isVisible ? 'HIDE' : 'SHOW'}</Text>
  </TouchableOpacity>
);

export default HideButton;


{/*EditButton.js*/}

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

const EditButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={styles.editButton}>EDIT</Text>
  </TouchableOpacity>
);

export default EditButton;


{/*
Each component takes an onPress prop to handle the button press.
The styles are imported from the styles.js file to maintain consistent styling across components.
In the main App.js, I've replaced the original buttons with the components, passing the necessary props.*/}


--------If you're Done, Congrats!!-------------
