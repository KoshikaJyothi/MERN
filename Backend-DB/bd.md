1. generate package.json
     npm init -y
2. create server.js
3. install, import "express" and create HTTP server,assign port
4. ### CONNECT MOngoDB DataBase
    REST api --> mongodb native driver-->  mongoDB server
    REST api --> mondoDB ODM tool(mongoose)-->  mongoDB server

    Sequelize :the java obj is converted into records and stored in form of tables in this
Mongoose : object Document mapping tool
a.install mongoose and connect to mongodb
b.create schema of resource (schema is blueprint of the document)to design the structure wt we want
c.crete model of this schema
d.perform db opeartion on that model