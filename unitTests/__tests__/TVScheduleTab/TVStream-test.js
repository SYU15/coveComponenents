//Also tests TVList functionality
jest.dontMock('../../../client/components/TVScheduleTab/TVStream');
jest.dontMock('jquery');
jest.dontMock('../../../client/components/TVScheduleTab/TVList');
jest.dontMock('../../../client/utils/calendarApi.js');
jest.dontMock('moment');
jest.dontMock('../../../client/config/ate.js');

describe('TV Schedule Date Display', function() {
  var TVStream;
  var React;
  var TestUtils;
  var TVList;
  var input = {station: "KQED", shows: [{id: 1, show: "Show1", episode: "A Show."}, {id: 2, show: "Show2"}]};
  var shouldShow = true;
  var ate;
  beforeEach(function() {
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    TVStream = require('../../../client/components/TVScheduleTab/TVStream');
    TVList = require('../../../client/components/TVScheduleTab/TVList');
    ate = require('../../../client/config/ate-example.js');

  });
  it('should exist', function() {
    var tvStream = TestUtils.renderIntoDocument(<TVStream shouldShow={shouldShow} data={input} />);
    expect(TestUtils.isCompositeComponent(tvStream)).toBeTruthy();
  });
  it('should display TV Lists with show information', function(){
    var tvStream = TestUtils.renderIntoDocument(<TVStream shouldShow={shouldShow} data={input} />);
    var showTitle = TestUtils.scryRenderedDOMComponentsWithClass(tvStream, 'ui dividing header');
    var showDescription = TestUtils.scryRenderedDOMComponentsWithClass(tvStream, 'react-episode');
    expect(showTitle.length).toEqual(2);
    expect(showDescription.length).toEqual(2);
    
    expect(showTitle[0].getDOMNode().textContent).toEqual('Show1');
    expect(showTitle[1].getDOMNode().textContent).toEqual('Show2');

    expect(showDescription[0].getDOMNode().firstChild.textContent).toEqual('A Show.');
    expect(showDescription[1].getDOMNode().firstChild.textContent).toEqual('');

  });
  it('should set position of scrollbar to the current time program', function(){
    //work in progress
    var input1 = {station: "KQED", shows: [{id: 1, show: "Show1", description: "A Show.", minutes: 90}, {id: 2, show: "Show2", minutes: 120}, {id: 3, show: "Show3", minutes: 120}, {id: 4, show: "Show4", minutes: 90, shouldAnchor: true}]};
    var tvStream = TestUtils.renderIntoDocument(<TVStream shouldShow={shouldShow} data={input1} />);

    var scryRenderedDOMComponentsWithId = function(tree, id) {
      return TestUtils.findAllInRenderedTree(tree, function(inst) {
        return TestUtils.isDOMComponent(inst) && inst.props.id === id;
      });
    };

    var tabs = TestUtils.scryRenderedDOMComponentsWithClass(tvStream, 'react-schedule-tab');
    var anchor = scryRenderedDOMComponentsWithId(tvStream, 'anchor');

    expect(tabs.length).toEqual(1);
    expect(anchor.length).toEqual(1);
    // console.log(tabs[0].getDOMNode().scrollTop);
    // expect(anchor[0].getDOMNode().offsetTop).toEqual(1100);
  });

});
