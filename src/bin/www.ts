import { app } from "api/app";

const PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log(`Server running at ${PORT}`);
