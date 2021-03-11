const database = require('./Database');

const user = database.model('User')
const userSecond = database.model('User')
const project = database.model('Project')

user.create({
    id:1,
    name:'Bogdan',
    lastName:'Nikituk'
})

user.delete(1)

user.create({
    id:1,
    name:'Bogdan',
    lastName:'Nikituk'
})

user.update(1,{age:20})

project.create({
    title:'Project title',
    description:'Project description',
    id:1,
})

project.create({
    id:2,
    title:'Project title',
    description:'Project description'
})

project.delete(2)

project.update(1,{
    title:'Project titttllleee'
})

console.log(project.data)

console.log(userSecond.data)