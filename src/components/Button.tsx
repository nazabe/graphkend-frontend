// const request = new Request("http://127.0.0.1:3001/api/objectEntity/findMany", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify([
//     { "$match": { "type": { "$eq": "REACT_FLOW_NODE" } } },
//     { "$replaceRoot": { "newRoot": "$props.node" } }
//   ]),
// });

// const response = await fetch(request);
// const data = await response.json();

const component = `
    <div>
      <h1>Welcome to my app</h1>
      <button>
        I'm a button
      </button>
    </div>
`;

// eval("console.log('Alive! Woo!')");

export default function MyButton() {
  return (
    <div dangerouslySetInnerHTML={{__html: component}}></div>
  );
}