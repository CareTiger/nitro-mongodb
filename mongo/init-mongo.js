
db = db.getSiblingDB('nitro-mongo');

db.createCollection('todos');

db.todos.insertMany([
 {
    id: 1,
    name: 'todo 1',
    description: 'description 1',
    created_at: new Date()
  },
  {
    id: 2,
    name: 'todo 2',
    description: 'description 2',
    created_at: new Date()
  },
  {
    id: 3,
    name: 'todo 3',
    description: 'description 3',
    created_at: new Date()
  }  
]);