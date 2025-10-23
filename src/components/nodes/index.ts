import type { BuiltInNode, Node, NodeTypes } from "@xyflow/react";
import PositionLoggerNode, {
  type PositionLoggerNode as PositionLoggerNodeType,
} from "./PositionLoggerNode";

const URL_GRAPHKEND = "http://127.0.0.1:3001/api/objectEntity/findMany"

const request = new Request(URL_GRAPHKEND, {
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