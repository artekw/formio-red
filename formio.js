module.exports = function (RED) {
  "use strict";

  function FormioConfig(node) {
    RED.nodes.createNode(this, node);
    this.login = node.login;
    this.pass = node.password
    this.project = node.project;
  }
  RED.nodes.registerType("formio", FormioConfig);
}