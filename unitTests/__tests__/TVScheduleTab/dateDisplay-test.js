jest.dontMock('../../../client/components/TVScheduleTab/dateDisplay');
jest.dontMock('moment');

describe('TV Schedule Date Display', function() {
  var DateDisplay;
  var React;
  var TestUtils;
  beforeEach(function() {
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    DateDisplay = require('../../../client/components/TVScheduleTab/dateDisplay'); 
  });
  it('should exist', function() {
    var dateDisplay = TestUtils.renderIntoDocument(<DateDisplay />);
    expect(TestUtils.isCompositeComponent(dateDisplay)).toBeTruthy();
  });
  it('should display formatted date', function(){
    var dateDisplay = TestUtils.renderIntoDocument(<DateDisplay date={20150929} />);
    expect(dateDisplay.getDOMNode().textContent).toEqual('Sep 29');
  });
});
