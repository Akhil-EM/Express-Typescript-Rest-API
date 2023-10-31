import request from "supertest";
import app from "../src/app"; // Import your Express app

describe("GET /api", () => {
  it("responds with 200 OK", async () => {
    
    const response = await request(app).get("/");
    console.log(response.body.message);
    

     // Check the HTTP status code
     expect(response.status).toBe(200);
     expect(response.body.message).toBe("server up and running");
  });
});
