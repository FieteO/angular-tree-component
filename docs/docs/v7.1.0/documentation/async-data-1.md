---
title: "Async Data"
excerpt: ""
---
The tree allows to load children asynchronously using `getChildren` option, and `hasChildren` field on the node.
[block:api-header]
{
  "title": "Demo"
}
[/block]

[block:html]
{
  "html": "<iframe src=\"https://rawgit.com/500tech/angular-tree-component/master/example/cli/dist/#/async\" width=\"100%\" height=\"350px\"></iframe>\n"
}
[/block]

[block:html]
{
  "html": "<a href=\"https://github.com/500tech/angular-tree-component/blob/master/example/cli/src/app/async/async.component.ts\" target=\"_blank\">Source code for this demo</a>"
}
[/block]

[block:api-header]
{
  "type": "basic",
  "title": "'getChildren' option:"
}
[/block]
This options receives a function that has a TreeNode parameter, and returns a value or a promise that resolves to the node's children:
```
(node:TreeNode) => TreeNode[] | Promise<TreeNode[]>
```

The function will be called whenever a node is expanded, the `hasChildren` field is true, and the `children` field is empty.
The result will be loaded into the node's children attribute.
[block:api-header]
{
  "type": "basic",
  "title": "Example:"
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "options = {\n  getChildren: (node:TreeNode) => {\n    return request('/api/children/' + node.id);\n  }\n}\n\nnodes = [\n  {\n    name: 'asyncRoot',\n    hasChildren: true\n  },\n  {\n    name: 'root2',\n    children: [\n      {\n        name: 'leaf',\n        hasChildren: false\n      }\n    ]\n  }\n]\n",
      "language": "javascript"
    }
  ]
}
[/block]