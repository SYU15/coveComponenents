jest.dontMock('../../../client/components/TVWeekly/timeCell');

describe('Hourly time display cell', function() {
  var TimeCell;
  var React;
  var TestUtils;
  beforeEach(function() {
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    TimeCell = require('../../../client/components/TVWeekly/timeCell'); 
  });
  it('should exist', function() {
    var timeCell = TestUtils.renderIntoDocument(<TimeCell />);
    expect(TestUtils.isCompositeComponent(timeCell)).toBeTruthy();
  });
  it('should display the hour', function(){
    var timeCell = TestUtils.renderIntoDocument(<TimeCell time="12am" />);
    expect(timeCell.getDOMNode().textContent).toEqual('12am');
  });
});
