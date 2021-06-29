
const chalk = require('chalk')
// const validator = require('validator')
const yargs = require('yargs')
const notes = require('./notes.js')

//customize yargs version 
yargs.version('16.06.2021')

//create add command
yargs.command({
    command: 'add',
    description : 'Add new note',
    builder:{
        title:{
            description:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})


//Create remove command
yargs.command({
    command: 'remove',
    description : 'Remove old note',
    builder:{
        title:{
            description:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title, argv.body)
    }
})

//List command
yargs.command({
    command: 'list',
    description : 'List the note',
    handler(argv){
        notes.listNotes()
    }
})

//Read command
yargs.command({
    command: 'read',
    description : 'Read the note',
    handler(argv){
        console.log("Reading the note!")
    }
})
yargs.parse()