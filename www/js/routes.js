/**
 * Created by Administrator on 6/25/2016.
 */

angular.module('starter.routes', [])

  .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $ionicConfigProvider.platform.android.navBar.alignTitle('center');
    $ionicConfigProvider.tabs.position("bottom");
    $ionicConfigProvider.backButton.previousTitleText(false);
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html'
      })

      // Each tab has its own nav history stack:

      .state('tab.dash', {
        url: '/dash',
        views: {
          'tab-dash': {
            templateUrl: 'templates/tab-course.html',
            controller: 'CourseCtrl'
          }
        }
      })

      .state('tab.dashDetail', {
        url: '/dashDetail',
        views: {
          'tab-dash': {
            templateUrl: 'templates/course/course-detail.html',
            controller: ''
          }
        }
      })

      .state('tab.chats', {
        url: '/chats',
        views: {
          'tab-chats': {
            templateUrl: 'templates/tab-chats.html',
            controller: 'ChatsCtrl'
          }
        }
      })
      .state('tab.playMedia', {
        url: '/playMedia',
        views: {
          'tab-chats': {
            templateUrl: 'templates/media/playMedia.html',
            controller: 'PlayMediaCtrl'
          }
        }
      })
      .state('tab.chat-detail', {
        url: '/chats/:chatId',
        views: {
          'tab-chats': {
            templateUrl: 'templates/chat-detail.html',
            //controller: 'ChatDetailCtrl'
          }
        }
      })

      .state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'templates/tab-account.html',
            controller: 'AccountCtrl'
          }
        }
      })

      .state('tab.myInfo', {
        url: '/myInfo',
        views: {
          'tab-account': {
            templateUrl: 'templates/account/myInfo.html',
            controller: ''
          }
        }
      })

      .state('tab.contact', {
        url: '/contact',
        views: {
          'tab-account': {
            templateUrl: 'templates/account/contact.html',
            controller: ''
          }
        }
      })

      .state('tab.notice', {
        url: '/notice',
        views: {
          'tab-account': {
            templateUrl: 'templates/account/notice.html',
            controller: ''
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');

  });
