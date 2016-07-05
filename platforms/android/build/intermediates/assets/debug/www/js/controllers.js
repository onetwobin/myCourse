angular.module('starter.controllers', [])

.controller('CourseCtrl', function($scope) {
  var date =  new Date();
  var currentDay =date.getDay();
  switch (currentDay) {
    case 1:
          currentDay = "一";
          break;
    case 2:
          currentDay = "二";
          break;
    case 3:
          currentDay = "三";
          break;
    case 4:
          currentDay = "四";
          break;
    case 5:
          currentDay = "五";
          break;
    case 6:
          currentDay = "六";
          break;
    case 7:
          currentDay = "日";
          break;
    default: break;
  }
  currentDay = "星期" + currentDay;
  $scope.currentDate = date.getFullYear() +"-"+ (date.getMonth()+1) +"-"+date.getDate()+currentDay;
})

.controller('ChatsCtrl', function($scope, Chats, service) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  //$scope.chats = Chats.all();
  //$scope.remove = function(chat) {
  //  Chats.remove(chat);
  //};

  var tempCourses = [{
    title: "社会-经济危机和经济复苏失败",
    url: "http://open.163.com/movie/2011/2/O/7/M7Q4ATFP0_M7QGP7DO7.html"
  },{
    title: "心理学-联觉现象",
    url: "http://open.163.com/movie/2009/2/0/8/M7Q4CMQU8_M7QGJSQ08.html"
  },{
    title: "生物学-人类行为简介",
    url: "http://open.163.com/movie/2010/3/4/G/M704BKABQ_M704FL74G.html"
  }];

  var privateCourses = [{
    title: "大物-课程简介和牛顿力学",
    url: "http://open.163.com/movie/2010/7/5/T/M6GQSTUPV_M6HUE6G5T.html"
  },{
    title: "计算机-安卓应用开发介绍",
    url: "http://open.163.com/movie/2010/1/8/D/M79HE97C3_M79HEQJ8D.html"
  },{
    title: "英语-be动词、冠词、指示代词、情态动词、一般现在时",
    url: "http://open.163.com/movie/2011/2/8/4/M8I5S848I_M8KTEKR84.html"
  }];

  $scope.courses = privateCourses;

  $scope.getCourse = function(flag) {
    if(flag === 0 ) {
      $scope.courses = tempCourses;
    } else {
      $scope.courses = privateCourses;
    }
  }

  $scope.setUrl = function(url) {
    service.setUrl(url);
  }
})

.controller('PlayMediaCtrl', function($scope, $sce, service) {
  //var url = "http://open.163.com/movie/2011/2/8/4/M8I5S848I_M8KTEKR84.html";
  var url = service.getUrl();
  $scope.myURL = $sce.trustAsResourceUrl(url);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
