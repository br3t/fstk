QUnit.module('dummy');
QUnit.test('some dummy test', function(assert) {
	assert.ok(true, "true is true");
	assert.ok(1, "1 is true");
	assert.ok([], "[ ] is true");
	assert.ok(1 == "1", "1 == '1' is true");

	assert.equal(1, "1", "1 equal '1' is true");

	assert.strictEqual(1, 1, "1 strictEqual '1' is true");

	assert.notOk(false, "false is false");
	assert.notOk(0, "0 is false");
	assert.notOk("", "'' is false");

	assert.notEqual(1, 12, "1 notEqual 12 is false");

	assert.notStrictEqual(1, '1', "1 notStrictEqual '1' is false");
});


QUnit.module('library');
QUnit.test('test librirary.isLessonToday', function(assert) {
	assert.ok(librirary.isLeap(2012), '2012 is OK');
	assert.ok(librirary.isLeap(2016), '2016 is OK');
	assert.ok(librirary.isLeap(2000), '2000 is OK');
	assert.notOk(librirary.isLeap(1987), '1987 is notOK');
	assert.notOk(librirary.isLeap(1900), '1900 is notOK');
	assert.notOk(librirary.isLeap(1800), '1800 is notOK');
	assert.notOk(librirary.isLeap('2000'), '"2000" is notOK');
});

QUnit.test('test isLessonToday', function(assert) {


	assert.notOk(librirary.isLessonToday(0), 'Sunday is notOK');
	assert.notOk(librirary.isLessonToday(1), 'Monday is notOK');
	assert.notOk(librirary.isLessonToday(3), 'Wednesday is notOK');
	assert.notOk(librirary.isLessonToday(5), 'Friday is notOK');
	assert.notOk(librirary.isLessonToday(6), 'Saturday is notOK');

	assert.ok(librirary.isLessonToday(2), 'Tuesday is OK');
	assert.ok(librirary.isLessonToday(4), 'Thursday is OK');
	
});

QUnit.module('SMath');
QUnit.test('test SMath.mult', function(assert) {
	assert.ok(SMath.mult(2, 2) == 4, "2x2 = 4 OK");

	assert.equal(SMath.mult(2, 2), 4, "2x2 = 4 is equal");
	assert.equal(SMath.mult(-10, 3), -30, "-10x3 = -30 is equal");

	assert.notEqual(SMath.mult('-10', 3), -30, "'-10'x3 != -30");
});

QUnit.test('test SMath.sub', function(assert) {
	assert.equal(SMath.sub(4, 2), 2, "4-2==2 OK");
	assert.equal(SMath.sub('abcd', 'ab'), 'cd', "abcd-ab==cd OK");
	assert.equal(SMath.sub('abcd', 'cd'), 'ab', "abcd-cd==ab OK");
	assert.equal(SMath.sub('abcd', 'ef'), 'abcd', "abcd-ef==abcd OK");
	assert.notEqual(SMath.sub('2', 1), 1, "'2'-1==1 notOK");
	assert.notEqual(SMath.sub(2, '1'), 1, "2-'1'==1 notOK");
	assert.equal(SMath.sub(211, '11'), 2, "211-'11'==2 OK");
	assert.equal(SMath.sub(-211, '11'), -2, "-211-'11'==-2 OK");
	assert.equal(SMath.sub(-1, -1), 0, "-1-(-1)==0 OK");
	assert.equal(SMath.sub(0.4, 0.1), 0.3, "0.4-0.1==0.3 OK");
});


QUnit.module('async');
QUnit.test( "async functions", function( assert ) {
  assert.timeout( 600 );
  assert.expect( 2 );

  var ready1 = assert.async();
  var ready2 = assert.async();
  setTimeout(function() {
    assert.ok( true, "async function 1" );
    ready1();
  }, 500 );
  setTimeout(function() {
    assert.ok( true, "async function 2" );
    ready2();
  }, 150);
});













