let app = angular.module('news', ['ui.router']);

app.factory('posts', [function(){
	let o = {
		posts: [
			{title: 'My Portfolio', link: 'https://louisiaegerv.github.io', upvotes: 30},
			{title: 'Github profile', link: 'https://github.com/louisiaegerv', upvotes: 25},
			{title: 'Twitter account', link: 'https://twitter.com/theCodeslayer', upvotes: 9},
			{title: 'My LinkedIn', link: 'https://www.linkedin.com/in/louislinkedin', upvotes: 13},
			{title: 'Team Treehouse Account', link: 'https://teamtreehouse.com/louisiaeger', upvotes: 24},
			{title: 'Online resume', link: 'https://louisiaegerv.github.io/resume', upvotes: 10}
		]
	};
	return o;
}]);

app.controller("MainCtrl", [
	'$scope',
	'posts',
	function($scope, posts){
		$scope.test = "AngularJS Reddit Clone";
		$scope.posts = posts.posts;
		$scope.addPost = () => {
			if(!$scope.title) { return; }
			$scope.posts.push({title: $scope.title, link: $scope.link, upvotes: 0});
			$scope.title = "";
			$scope.link = "https://";
		};
		$scope.addUpvote = (post) => {
			post.upvotes++;
		};
		$scope.subtractUpvote = (post) => {
			post.upvotes--;
		};
	}
]);