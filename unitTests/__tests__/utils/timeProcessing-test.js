jest.dontMock('../../../client/utils/timeProcessing');
jest.dontMock('moment');

describe('Time Utility Function', function() {
  var timeUtils;
  var React;
  var moment;
  var today;
  beforeEach(function() {
    timeUtils = require('../../../client/utils/timeProcessing');
    moment = require('moment'); 
    today = moment();
  });
  it('should return current week starting from today', function() {
    var day1 = {day: today.format('dddd'), date: today.format('D'), month: today.format('M')};
    var endOfWeek = moment().add(6, 'days');
    var day7 = {day: endOfWeek.format('dddd'), date: endOfWeek.format('D'), month: endOfWeek.format('M')};
    
    expect(timeUtils.weekCalculation()).toBeTruthy();
    expect(timeUtils.weekCalculation().length).toEqual(7);

    expect(timeUtils.weekCalculation()[0]).toEqual(day1);
    expect(timeUtils.weekCalculation()[6]).toEqual(day7);

  });
  it('should return next/previous date if within 14 days', function(){

    var tomorrow = today.add(1, 'days').format('YYYYMMDD');
    today = today.format('YYYYMMDD');

    expect(timeUtils.dateLimit(today, tomorrow)).toBeTruthy();
    expect(timeUtils.dateLimit(today, tomorrow)).toEqual(tomorrow);
  });

  it('should return current date if more than 14 days difference from today', function(){
    var tomorrow = today.add(20, 'days').format('YYYYMMDD');
    today = today.format('YYYYMMDD');

    expect(timeUtils.dateLimit(today, tomorrow)).toBeTruthy();
    expect(timeUtils.dateLimit(today, tomorrow)).toEqual(today);
  });
});
