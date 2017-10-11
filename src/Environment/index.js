// 1
const {
  Environment,
  Network,
  RecordSource,
  Store,
  RecordSourceInspector
} = require('relay-runtime')
// 2
const store = new Store(new RecordSource())
// inspector
const inspector = new RecordSourceInspector(new RecordSource())
inspector.getNodes(); // all records with an id
inspector.getRecords(); // all records with or without an id
// inspector.get("<recordId>").inspect(); // record with fields
// 3
const network = Network.create((operation, variables) => {
  // 4
  return fetch('https://api.graph.cool/relay/v1/cj8mqonaf0gcd0132ndq97kve', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json()
  })
})
// 5
const environment = new Environment({
  network,
  store,
  inspector
})
// 6
export default environment