import type { BuiltInNode, Node, NodeTypes } from "@xyflow/react";
import PositionLoggerNode, {
  type PositionLoggerNode as PositionLoggerNodeType,
} from "./PositionLoggerNode";

// import { loadEnv } from "vite";

// const { SECRET_PASSWORD } = loadEnv(process.env.URL_GRAPHKEND, process.cwd(), "");


const request = new Request("http://127.0.0.1:3001/api/objectEntity/findMany", { // TODO: Replace this with process.env
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify([
    { "$match": { "type": { "$eq": "REACT_FLOW_NODE" } } },
    { "$replaceRoot": { "newRoot": "$props.node" } }
  ]),
});

const response = await fetch(request);
const data = await response.json();

export const initialNodes = data satisfies Node[];

export const nodeTypes = {
  "position-logger": PositionLoggerNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;

// Append the types of you custom edges to the BuiltInNode type
export type CustomNodeType = BuiltInNode | PositionLoggerNodeType;