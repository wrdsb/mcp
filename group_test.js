Run it on Casperbox
/*==============================================================================*/
/* Casper generated Tue Jul 25 2017 12:18:00 GMT-0400 (EDT) */
/*==============================================================================*/

var x = require('casper').selectXPath;
casper.options.viewportSize = {width: 716, height: 771};
casper.on('page.error', function(msg, trace) {
   this.echo('Error: ' + msg, 'ERROR');
   for(var i=0; i<trace.length; i++) {
       var step = trace[i];
       this.echo('   ' + step.file + ' (line ' + step.line + ')', 'ERROR');
   }
});
casper.test.begin('Resurrectio test', function(test) {
   casper.start('https://groups.google.com/a/wrdsb.ca/forum/#!groupsettings/chc-orders/content');
   casper.waitForSelector("#gwt-uid-204 .F0XO1GC-F-h",
       function success() {
           test.assertExists("#gwt-uid-204 .F0XO1GC-F-h");
           this.click("#gwt-uid-204 .F0XO1GC-F-h");
       },
       function fail() {
           test.assertExists("#gwt-uid-204 .F0XO1GC-F-h");
   });
   casper.waitForSelector(".F0XO1GC-n-a.jfk-button-action.F0XO1GC-n-a-disabled.F0XO1GC-n-b",
       function success() {
           test.assertExists(".F0XO1GC-n-a.jfk-button-action.F0XO1GC-n-a-disabled.F0XO1GC-n-b");
           this.click(".F0XO1GC-n-a.jfk-button-action.F0XO1GC-n-a-disabled.F0XO1GC-n-b");
       },
       function fail() {
           test.assertExists(".F0XO1GC-n-a.jfk-button-action.F0XO1GC-n-a-disabled.F0XO1GC-n-b");
   });

   casper.run(function() {test.done();});
});
