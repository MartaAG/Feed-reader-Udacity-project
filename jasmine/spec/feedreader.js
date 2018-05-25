/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });


        // URL is defined and not empty
    it('ensures that URL is defined', function () {
      allFeeds.forEach(function(feed) {
        expect(feed.url).toBeDefined();
        expect(feed.url.length).not.toBe(0);
      });
    });
    // name is defined and not empty
    it('ensures that name is defined', function () {
      allFeeds.forEach(function(feed) {
        expect(feed.name).toBeDefined();
        expect(feed.name.length).not.toBe(0);
      });
    });

  });

  describe('The menu', function() {

        // Menu is hidden by default
    it('has hidden menu', function () {
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });

    // Menu changes visibility when the menu icon is clicked.
    it('changes visibility menu', function () {
      $('.menu-icon-link').click();
      expect($('body').hasClass('menu-hidden')).toBe(false);
      $('.menu-icon-link').click();
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
  });

  // A test that ensures when the loadFeed function is called and completes its work, there is at least
   //a single .entry element within the .feed container.
    describe('Initial Entries', function () {

    beforeEach(function (done) {
      loadFeed(0, function () {
        done();
      });
    });
    it('ensures it has at least a single entry', function (done) {
      var entries = $('.feed .entry');
      expect(entries.length).toBeGreaterThan(0);
      done();
    });
  });

  // Write a test that ensures when a new feed is loaded
  // by the loadFeed function that the content actually changes.
    describe('New Feed Selection', function () {

    let feedOld;
    let feedNew;
    beforeEach(function (done) {
      loadFeed(0, function () {
        feedOld = $('.feed').html();
        loadFeed(1, function () {
          feedNew = $('.feed').html();
          done();
        });
      });
    });

  it('loads new feeds', function(done) {
    expect(feedNew !== feedOld).toBe(true);
    done();
    });
  });
}());
