const OrientDBClient = require("orientjs").OrientDBClient;

OrientDBClient.connect({
  host: "localhost",
  port: 2424,
  username: 'root',
  password: '111',
  name: 'o2'
}).then(client => {
  return client.close();
}).then(()=> {
   console.log("Client closed");
});

/*
db.record.get('#47:0').then(function (record) {
  console.log('Loaded record:', record.title);
})
*/
var sql = 'SELECT FROM topic';
sessions.query(sql).all().then((results)=> {
	console.log(results);
});
