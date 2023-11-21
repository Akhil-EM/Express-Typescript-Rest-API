import * as mongodb from "./mongodb";
// import * as schema from "./schemas";
/**
 * run database seeding operations.
 */
async function seeder() {
  //create connection
  await mongodb.createConnection();

  await mongodb.closeConnection();
}

seeder()
  .then(() => {
    console.log("mongo db seeding completed ..!!");
    process.exit(0);
  })
  .catch((error) => {
    console.log("error seeding database :", (error as Error).message);
    process.exit(0);
  });
