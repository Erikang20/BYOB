var app = angular.module( "myApp", [ 'ngRoute' ] );

var urlUsers = "http://ec2-52-35-89-81.us-west-2.compute.amazonaws.com:9001/users";
console.log( urlUsers );
// console.log( urlBeers );
console.log( "angular working here" );

app.config( function ( $routeProvider ) {
    $routeProvider.when( '/profile', {
        templateUrl: 'partials/profile.html',
        controller: 'ProfileController'
    } )

    .when( '/party', {
        templateUrl: 'partials/party.html',
        controller: 'PartyController'
    } )

    .when( '/beer', {
            templateUrl: 'partials/beer.html',
            controller: 'BeerController'
        } )
        .when( '/users', {
            templateUrl: 'partials/users.html',
            controller: 'UserController'
        } );
} );


app.controller( "ProfileController", function ( $scope, $http ) {
    console.log( "profile here" );
    $scope.view = {};
    $scope.view.message = "testing profile!";
    $scope.view.name = "Barney";
    $scope.data = {};
    $scope.data.searchbeer = '';
    $scope.data.searchBrewery = '';


    $scope.hide = function () {
        $scope.showMe = !$scope.showMe;
    }

    $scope.form = function () {
        $scope.hideMe = !$scope.hideMe;
    }

    var result;
    //  var url = 'http://api.brewerydb.com/v2/beers/?key=4d9a0f8e023cb078745503782cabc979&name=Sierra%20Nevada%20Stout';
    var url = 'http://api.brewerydb.com/v2/beers/?key=4d9a0f8e023cb078745503782cabc979&name=Sierra%20Nevada%20Stout&name=Little%20Sumpin%27%20Sumpin%27';
    $http.get( url )
        .success( function ( data, status, headers, config ) {
            $scope.beers = data.data;
            console.log( data );
        } );

} );

app.controller( 'BeerController', function ( $scope, $http ) {
    var result;
    var url = 'http://api.brewerydb.com/v2/beers/?key=4d9a0f8e023cb078745503782cabc979&name=Zoe';
    $http.get( url )
        .success( function ( data, status, headers, config ) {
            $scope.beers = data.data;
            console.log( data );
        } );

    $scope.autocomplete = function () {

        $( "#availableBeer" ).autocomplete( {
            minLength: 0,
            source: 'http://api.brewerydb.com/v2/beers/?key=4d9a0f8e023cb078745503782cabc979&name=Zoe'
        } );
        console.log( 'availableBeer' );
    };

    console.log( "beer here" );
    $scope.data = {};
    $scope.data.searchbeers = '';
    $scope.data.searchBreweries = '';
    $scope.newBeers = [];

    $scope.addBeer = function () {
        var newBeer = {};
        newBeer.name = $scope.newBeers.name;
        newBeer.brewery = $scope.newBeers.brewery;
        newBeer.style = $scope.newBeers.style;

        $scope.newBeers.push( newBeer );
        console.log( "im a new beer!" );
        reset();

    }

    function reset( something ) {
        $scope.beer.name = null;
        $scope.brewery = null;
        $scope.style = null;
        $scope.beer.abn = null;
        console.log( "cleaning the house yo!" );
    }

    $scope.hide = function () {
        $scope.showMe = !$scope.showMe;
    }
} );

app.controller( 'FriendsController', function ( $scope, $http ) {
    console.log( "friends here" );

    //  $scope.friends = [];
    //
    //
    $http.get( "http://ec2-52-35-89-81.us-west-2.compute.amazonaws.com:9001/users" )
        .success( function ( data, status, headers, config ) {

            $scope.users = data;
            console.log( data );
        } );



    //  }
    //  $http( req ).then( function ( data, status, headers, config ) {
    //      $scope.friends = data;
    //      console.log( status );
    //
    //  } );
} );

app.controller( 'partyController', function ( $scope ) {
    console.log( "Lets party" );
} );

app.controller( 'UserController', function ( $scope, $http ) {
    console.log( "user here" );
    $scope.data = null;
    $scope.dataService = null;
    $scope.search = 'users';
    var users = [];
    //  $http.defaults.headers.common[ "X-Custom-Header" ] = "Angular.js";


    $http.get( "http://ec2-52-35-89-81.us-west-2.compute.amazonaws.com:9001/users" )
        .success( function ( data, status, headers, config ) {

            $scope.users = data;
            console.log( data );
        } );

    var urlBeers = "http://ec2-52-35-89-81.us-west-2.compute.amazonaws.com:9001/beers"
    $http.get( urlBeers )
        .success( function ( results, status, headers, config ) {
            $scope.beers = results;
            console.log( results );
        } );

    //  $scope.sendData = function () {
    //      var data = $.param( {
    //          bname = $scope.beer.name
    //      } )
    //  }

    //  $http.post( urlBeers, data, config )
    //      .success( function ( data, status, headers, config ) {
    //          $scope.PostDataResponse = data;
    //      } )
    //      .error( function ( data, status, header, config ) {
    //          $scope.ResponseDetails = "data" + data
    //      } );


    $scope.hide = function () {
        $scope.showMe = !$scope.showMe;
    }

} );
