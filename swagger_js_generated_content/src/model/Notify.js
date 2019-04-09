/**
 * AMI
 * fuck the cs hse
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.4
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ComponentsschemasDateTime'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ComponentsschemasDateTime'));
  } else {
    // Browser globals (root is window)
    if (!root.Ami) {
      root.Ami = {};
    }
    root.Ami.Notify = factory(root.Ami.ApiClient, root.Ami.ComponentsschemasDateTime);
  }
}(this, function(ApiClient, ComponentsschemasDateTime) {
  'use strict';




  /**
   * The Notify model module.
   * @module model/Notify
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Notify</code>.
   * @alias module:model/Notify
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>Notify</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Notify} obj Optional instance to populate.
   * @return {module:model/Notify} The populated <code>Notify</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('group_id')) {
        obj['group_id'] = ApiClient.convertToType(data['group_id'], 'Number');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ComponentsschemasDateTime.constructFromObject(data['created_at']);
      }
      if (data.hasOwnProperty('header')) {
        obj['header'] = ApiClient.convertToType(data['header'], 'String');
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Number} group_id
   */
  exports.prototype['group_id'] = undefined;
  /**
   * @member {module:model/ComponentsschemasDateTime} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * @member {String} header
   */
  exports.prototype['header'] = undefined;
  /**
   * @member {String} content
   */
  exports.prototype['content'] = undefined;



  return exports;
}));


