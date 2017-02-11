use grocery_list;

db.createUser( {user: "charles", pwd: "charles68", roles: ["readWrite", "dbAdmin"]} );
db.createUser( {user: "sandhya", pwd: "sandhya69", roles: ["readWrite"]} );
db.createUser( {user: "sarah", pwd: "sarah03", roles: ["readWrite"]} );
db.createUser( {user: "sophia", pwd: "sophia06", roles: ["readWrite"]} );

db.createUser( {user: "userAdmin", pwd: "toDoStuff", roles: ["userAdmin"]} );
db.createUser( {user: "application", pwd: "456abcd123", roles: ["readWrite"]});
