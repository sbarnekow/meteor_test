/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  waitOn: function () {
    return Meteor.subscribe('articles');
  },
});

/*
 *  Example:
 *  Router.route('/', {name: 'home'});
*/
