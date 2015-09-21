'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller( 'PhoneListCtrl', function ($scope)
{
    $scope.title = "Phones";
    $scope.phones =
        [
            {'name': 'Nexus S',
                'snippet': 'Fast just got faster with Nexus S.',
                'status': true
            },
            {'name': 'Motorola XOOM™ with Wi-Fi',
                'snippet': 'The Next, Next Generation tablet.',
                'status': false
            },
            {'name': 'MOTOROLA XOOM™',
                'snippet': 'The Next, Next Generation tablet.',
                'status': true}
        ]

    //Filter
    var date = new Date();
    $scope.today = date;

    $scope.doneAndFilter = function(phoneItem)
    {
        return phoneItem.name && phoneItem.status === true;
    }

    $scope.sortField = undefined; //"name";
    $scope.reverse = false;

    $scope.sort = function(fieldname)
    {
        if ($scope.sortField === fieldname)
        {
            $scope.reverse = !$scope.reverse;
        }else
        {
            $scope.sortField = fieldname;
            $scope.reverse = false;
        }
    }

    $scope.isSortUp = function(fieldName)
    {
        return $scope.sortField === fieldName && !$scope.reverse;
    }
    $scope.isSortDown = function(fieldName)
    {
        return $scope.sortField === fieldName && $scope.reverse;
    }
}
);