import { app } from "./app";

app.listen(process.env.PORT || 5676, () => {
  console.log("Server is running on port 5676");
});
