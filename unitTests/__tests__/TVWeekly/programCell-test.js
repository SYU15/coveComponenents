jest.dontMock('../../../client/components/TVWeekly/programCell');
jest.dontMock('moment');
jest.dontMock('jquery');

describe('Program Cell for Weekly Schedule', function() {
  var ProgramCell;
  var React;
  var TestUtils;
  var data = {
    minutes: 30,
    start_time: "0000",
    episode_title: "Test Episode Title",
    timestamp: 1444114800,
    title: "Test Title",
    episode_description: "Test episode description",
    description: "Test description"
  };
  beforeEach(function() {
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    ProgramCell = require('../../../client/components/TVWeekly/programCell'); 
  });
  
  it('should exist', function() {
    var programCell = TestUtils.renderIntoDocument(<ProgramCell data={data} />);
    expect(TestUtils.isCompositeComponent(programCell)).toBeTruthy();
  });

  it('should display program information', function(){
    var programCell = TestUtils.renderIntoDocument(<ProgramCell data={data} />);
    
    var showTitle = TestUtils.scryRenderedDOMComponentsWithClass(programCell, 'ui header');
    var showTime = TestUtils.scryRenderedDOMComponentsWithClass(programCell, 'sub header');
    var showDescription = TestUtils.scryRenderedDOMComponentsWithClass(programCell, 'react-small-description');

    expect(showTitle[0].getDOMNode().textContent).toEqual('Test Title12:00 AMTest Episode Title');
    expect(showTime[0].getDOMNode().textContent).toEqual('12:00 AM');
    expect(showDescription[0].getDOMNode().textContent).toEqual('Test Episode Title');
    
  });

  it('should populate addthisevent calendar with correct fields', function(){
    var programCell = TestUtils.renderIntoDocument(<ProgramCell data={data} />);
    
    var start = TestUtils.scryRenderedDOMComponentsWithClass(programCell, 'start');
    var end = TestUtils.scryRenderedDOMComponentsWithClass(programCell, 'end');
    var title = TestUtils.scryRenderedDOMComponentsWithClass(programCell, 'title');
    var description = TestUtils.scryRenderedDOMComponentsWithClass(programCell, 'description');
    var dateFormat = TestUtils.scryRenderedDOMComponentsWithClass(programCell, 'date_format');
    
    expect(start[0].props.children).toEqual('10/06/2015 12:00 AM');
    expect(end[0].props.children).toEqual('10/06/2015 12:30 AM');
    expect(title[0].props.children).toEqual('Test Title');
    expect(description[0].props.children).toEqual('Test episode description');
    expect(dateFormat[0].props.children).toEqual('10/06/2015');


  });

});
