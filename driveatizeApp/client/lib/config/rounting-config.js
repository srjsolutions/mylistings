Router.configure({
    // layoutTemplate: 'masterLayout',
    yieldTemplates: {
        myNav: {to: 'nav'},
        myFooter: {to: 'footer'},
    }
});


AccountsTemplates.configureRoute('signIn', {
    name: 'signin',
    path: '/signin',
    // template: 'myLogin',
    // layoutTemplate: 'myLayout',
    redirect: '/user-profile',
});
