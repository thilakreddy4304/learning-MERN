import express from "express";
import axios from "axios";

const app = express();
const port = 8000;
const API_URL = "https://secrets-api.appbrewery.com/";
// const random = "random"
//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "thilakre";
const yourPassword = "BOOK@123s";
const yourAPIKey = "850aecf6-1d63-4e82-a4e2-70dfafe0c2d4";
const yourBearerToken = "ab781a7a-f07a-4c01-815f-4073710a081b";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}random`);
    let noAuthData = JSON.stringify(response.data);
    res.render("index.ejs", { content: noAuthData });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.get("/basicAuth", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}all?page=2`, {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });
    let basicAuthData = JSON.stringify(response.data);
    res.render("index.ejs", { content: basicAuthData });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.get("/apiKey", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}filter?score=5&apiKey=${yourAPIKey}`); 
      // auth: {
      //   username: yourUsername,
      //   password: yourPassword,
      // },
    // });
    let apiAuthData = JSON.stringify(response.data);
    res.render("index.ejs", { content: apiAuthData });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.get("/bearerToken", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}filter?score=5&apiKey=${yourAPIKey}`, {
      
    }) 
      // auth: {
      //   username: yourUsername,
      //   password: yourPassword,
      // },
    // });
    let apiAuthData = JSON.stringify(response.data);
    res.render("index.ejs", { content: apiAuthData });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }



  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
