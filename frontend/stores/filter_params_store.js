var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    FilterConstants = require('../constants/filter_constants'),
    DropdownConstants = require('../constants/dropdown_constants'),
    DateConstants = require('../constants/date_constants');

var _filter_params = {};
var _filter_title = { location: 'you.' };

var FilterParamsStore = new Store(AppDispatcher);

FilterParamsStore.params = function() {
  return Object.assign({}, _filter_params);
};

FilterParamsStore.getTitle = function() {
  return Object.assign({}, _filter_title);
};

FilterParamsStore.resetFilters = function() {
  _filter_params = {};
  _filter_title = { location: 'you.' };
}

FilterParamsStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case FilterConstants.UPDATE_LOCATION:
      handleLocation(payload.location);
      break;
    case FilterConstants.UPDATE_PRICE:
      handlePrice(payload.price);
      break;
    case FilterConstants.UPDATE_CATEGORY:
      handleCategory(payload.category);
      break;
    case FilterConstants.UPDATE_DATE:
      handleDate(payload.date);
      break;
  }
};

var handleLocation = function(locationData) {
  _filter_params.location = locationData;
  _filter_title.location = locationData.address.split(',')[0];
  FilterParamsStore.__emitChange();
};

var handlePrice = function(priceData) {
  _filter_params.price = priceData;
  _filter_title.price = priceData;
  FilterParamsStore.__emitChange();
};

var handleCategory = function(categoryData) {
  _filter_params.category = categoryData;
  _filter_title.category = categoryData;
  FilterParamsStore.__emitChange();
};

var handleDate = function(dateData) {
  var currentTime = new Date().getTime();
  var newDate;

  switch (dateData) {
    case DateConstants.THIS_WEEK:
      newDate = currentTime + (6.048 * Math.pow(10, 8));
      break;
    case DateConstants.THIS_MONTH:
      newDate = currentTime + (2.628 * Math.pow(10, 9));
      break;
    case DateConstants.THIS_YEAR:
      newDate = currentTime + (3.154 * Math.pow(10, 10));
      break;
  }

  _filter_params.date = newDate;
  _filter_title.date = newDate;
  FilterParamsStore.__emitChange();
};

module.exports = FilterParamsStore;