/**
 *
 * @namespace faker.climate
 */
var Climate = function (faker) {
  var self = this;

  /**
   * climateTypes
   *
   * @method faker.climate.climateTypes
   * @param {string} format
   * @memberOf faker.climate
   */
  self.climateTypes = function (format) {
      format = format || faker.climate.clothing();
      return faker.helpers.replaceSymbolWithNumber(format);
  };

  // FIXME: this is strange passing in an array index.
  /**
   * phoneNumberFormat
   *
   * @method faker.climate.temperatureIndex
   * @param temperatureIndex
   * @memberOf faker.climate
   */
  self.temperature = function (temperatureIndex) {
    temperatureIndex = temperatureIndex || 0;
      return faker.helpers.replaceSymbolWithNumber(faker.definitions.climate.formats[temperatureIndex]);
  };

  /**
   * clothing
   *
   * @method faker.climate.clothing
   */
  self.clothing = function () {
    return faker.random.arrayElement(faker.definitions.climate.formats);
  };
  
  return self;

};

module['exports'] = Climate;
