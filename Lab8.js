angular.module("Myuser", [])
    .filter("myfilter", function() {
        return function(input, option) {
            if (isNaN(option) || (option == "")) {
                return input;
            } else {
                return input.substring(0, option).toUpperCase();
            }
        }
    })

.controller("userCtrl", function($scope) {
    var users = [
        { name: 'Abhishek', email: "abhishek@mca.christuniversity.in", dob: new Date("July 21,1990"), gender: "Male", location: "Bangalore" },
        { name: 'Supriya', email: "supriya@gamil.com", dob: new Date("July 20,1987"), gender: "Female", location: "Bangalore" },
        { name: 'Utkarsh Razz', email: "utkarsh@gamil.com", dob: new Date("August 19,1983"), gender: "Male", location: "Bangalore" },
        { name: 'Ayushi', email: "ayushi@gamil.com", dob: new Date("November 21,1989"), gender: "Female", location: "Bangalore" },
        { name: 'Aryan Raj', email: "aryan@gamil.com", dob: new Date("June 21,1980"), gender: "Male", location: "Bangalore" },
        { name: 'Santosh', email: "santosh@gamil.com", dob: new Date("May 21,1990"), gender: "Female", location: "Bangalore" }
    ];
    $scope.users = users;
    $scope.rowlimit = 6;
    $scope.SortOrder = '+name';

});