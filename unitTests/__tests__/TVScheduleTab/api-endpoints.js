var $ = require('jquery');

describe('API Endpoints', function(){

  it('should return an object', function(){
      $.ajax({
          url: 'http://mediaapiservice-vpc.elasticbeanstalk.com/v1.0/tv/listings/kqed/',
          type: 'GET',
          success: function(result){
            var data = result;
            expect(data).toEqual(jasmine.any(Object));
          }
      });
  });
  it('should return valid TV Schedule data', function(){
      $.ajax({
          url: 'http://mediaapiservice-vpc.elasticbeanstalk.com/v1.0/tv/listings/kqed/',
          type: 'GET',
          success: function(result){
            var data = result;

            expect(data.callsign).toEqual('kqed');
            expect(data.data).toExist();
            expect(data.data.KQED).toExist();
            expect(data.data.KQED.listings).toExist();
            expect(data.data.KQED.listings[0].title).toExist();
            expect(data.data.KQED.listings[0].minutes).toExist();
            expect(data.data.KQED.listings[0].description).toExist();
          }
      });
  });

  it('should return valid TV weekly data', function(){
      $.ajax({
          url: 'http://mediaapiservice-vpc.elasticbeanstalk.com/v1.0/tv/listings_week/kqed/',
          type: 'GET',
          success: function(result){
            var data = result;

            expect(data[0].callsign).toEqual('kqed');
            expect(data[0].start_date).toExist();
            expect(data[0].data).toExist();
            expect(data[0].data.KQED).toExist();
            expect(data[0].data.KQED.listings).toExist();
            expect(data[0].data.KQED.listings[0].title).toExist();
            expect(data[0].data.KQED.listings[0].minutes).toExist();
            expect(data[0].data.KQED.listings[0].description).toExist();
          }
      });
  });
});
