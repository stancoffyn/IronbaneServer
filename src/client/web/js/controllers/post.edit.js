// post.edit.js
angular.module('IronbaneApp')
.controller('PostEditCtrl', ['$scope', 'Post', '$log', function($scope, Post, $log) {
    $scope.board = BoardData;

    $scope.save = function() {
        var post = new Post({
            time: (new Date()).valueOf() / 1000, // convert to mysql unix_timestamp
            bbcontent: $scope.content,
            user: 1 // temp for now
        });
        post.$save($scope.board.id);
    };
}]);