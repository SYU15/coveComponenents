jest.dontMock('../../client/components/TVScheduleTab/dateDisplay');

describe('TV Schedule Date Display', function() {
  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;
  var moment = require('moment');
  var DateDisplay;
  beforeEach(function() {
    DateDisplay = require('../../client/components/TVScheduleTab/dateDisplay'); 
  });
  it('should exist', function() {
    var dateDisplay = TestUtils.renderIntoDocument(<DateDisplay />);
    expect(TestUtils.isCompositeComponent(dateDisplay)).toBeTruthy();
  });
});
