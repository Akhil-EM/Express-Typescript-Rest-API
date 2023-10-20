import * as mongodb from "./mongodb";
// import * as schema from "./schemas";
(async () => {
    //create connection 
    await mongodb.createConnection();

    //data seeding 

    console.log("mongodb seeding completed..!!!");
    process.exit(0);
    
})();