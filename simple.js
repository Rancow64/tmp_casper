var webpage = require('webpage').create();
webpage
    .open('http://flancer32.github.io/mage2_ext_login_as/etc/dev/docs/screenshots/usage/customer_form/customer_form.html') // loads a page
    .then((a) => {
        var we = a;
        slimer.wait(5000);
        slimer.exit()
    });