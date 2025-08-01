import app from "./src/app.js"; // src içindeki app.js dosyanı içe aktar

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor 🚀`);
});
