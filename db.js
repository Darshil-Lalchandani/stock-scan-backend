const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb://localhost:27017/stocksData";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function getAllRecords() {
  try {
    await client.connect();
    const database = client.db("stocksData");
    const collection = database.collection("stocksDataCollection");
    const result = await collection.find({}).toArray();
    return result;
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

module.exports = { getAllRecords };
