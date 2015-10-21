jest.dontMock('../../../client/components/TVWeekly/programCell');
jest.dontMock('moment');
jest.dontMock('jquery');
jest.dontMock('../../../client/utils/calendarApi.js');
jest.dontMock('moment');
jest.dontMock('../../../client/config/ate.js');

describe('Program Cell for Weekly Schedule', function() {
  var ProgramCell;
  var React;
  var TestUtils;
  var data;
  var ate;
  beforeEach(function() {
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    ProgramCell = require('../../../client/components/TVWeekly/programCell');
    ate = require('../../../client/config/ate-example.js');
    data = {
      minutes: 30,
      start_time: "0000",
      episode_title: "Test Episode Title",
      timestamp: 1444114800,
      title: "Test Title",
      episode_description: "Test episode description",
      description: "Test description"
    }; 
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

  it('should shorten a description if the block is less than 30 minutes and description is longer than 50 characters', function(){ 
   data.minutes = 25;
   data.episode_title = 'Test episode description. Test, test, test. This is a really long description that will need to be shortened.';

   var programCell = TestUtils.renderIntoDocument(<ProgramCell data={data} />);
   var showDescription = TestUtils.scryRenderedDOMComponentsWithClass(programCell, 'react-small-description');

   expect(showDescription[0].getDOMNode().textContent).toEqual('Test episode description. Test, test, test. This i...');

  });
  
  it('should hide an episode description if time block 15 minutes or less', function(){ 
   data.minutes = 15;

   var programCell = TestUtils.renderIntoDocument(<ProgramCell data={data} />);
   var showDescription = TestUtils.scryRenderedDOMComponentsWithClass(programCell, 'react-small-description');

   expect(showDescription[0].getDOMNode().textContent).toEqual('');

  });


});
