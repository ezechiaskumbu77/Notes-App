const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes....'
}
/** ******************* Add new notes **************** */  
const addNote = (title,body) => {
  const notes = loadNotes()
  const duplicateNotes = notes.filter((note) => note.title === title)
  if(duplicateNotes.length === 0){
    notes.push({
        title: title,
        body: body
    })
    saveNotes(notes)
    console.log(chalk.green.inverse('New note added! '))
  }else{
    console.log(chalk.red.inverse('Note title taken!'))
  }
  
}
/** ******************* End of Add new notes **************** */ 


/** ******************* Remove old notes ******************* */ 
const removeNote = (title) => {
  const notes = loadNotes()
  const notesToKeep = notes.filter((note) => note.title !== title)
  if (notes.length > notesToKeep.length){
      console.log(chalk.green.inverse('Note removed!'))
      saveNotes(notesToKeep)
  }else{
    console.log(chalk.red.inverse('Note not found!'))
  }
}
/** ******************* End of Remove old notes **************** */  

/** ***************************** List Notes  ******************* */ 
const listNotes = () => {
  console.log(chalk.green.inverse(''))
}

/** ********************** End of List Notes  ****************** */ 

/** ***************************** Save Notes  ******************* */ 
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
/** *************************** End of saveNote  ************* */ 

/** ***************************** Load Notes  *************** */ 
const loadNotes = () => {
   try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
   } catch(e){
       return []
   }
} 
/** ********************* End of Load Notes  *************** */ 

module.exports = {
    getNotes : getNotes,
    addNote : addNote,
    removeNote : removeNote,
    listNotes : listNotes
}
