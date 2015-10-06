jest.dontMock('../../../client/components/TVWeekly/mobileTimeHeader');

describe('TV Weekly Weekly Header', function() {
  var MobileTimeHeader;
  var React;
  var TestUtils;
  var data = {day: 'Monday', date: 6, month: 10};
  beforeEach(function() {
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    MobileTimeHeader = require('../../../client/components/TVWeekly/mobileTimeHeader');
  });
  it('should exist', function() {
    var mobileTimeHeader = TestUtils.renderIntoDocument(<MobileTimeHeader data={data} />);
    expect(TestUtils.isCompositeComponent(mobileTimeHeader)).toBeTruthy();
  });

  it('should display date', function(){
    var mobileTimeHeader = TestUtils.renderIntoDocument(<MobileTimeHeader data={data} />);
    
    var header = TestUtils.scryRenderedDOMComponentsWithClass(mobileTimeHeader, 'ui inverted header');
    var subHeader = TestUtils.scryRenderedDOMComponentsWithClass(mobileTimeHeader, 'ui sub header');

    expect(header.length).toEqual(1);
    expect(subHeader.length).toEqual(1);

    expect(header[0].getDOMNode().textContent).toEqual('Monday10/6');
    expect(subHeader[0].getDOMNode().textContent).toEqual('10/6');

  });
});
