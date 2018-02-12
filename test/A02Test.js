QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 <= "3", "1<3 - the first agrument is 'truthy', so we pass!");
});

QUnit.test('Testing cardType check function with several sets of inputs', function (assert) {
    assert.equal(cardTypeCheck(53435), 0, 'Tested with relatively small positive numbers with length less than 13');
    assert.equal(cardTypeCheck(-5), 0, 'Tested with negative card number.');
    
    assert.equal(cardTypeCheck(""),0, 'Tested with null value.');
    assert.equal(cardTypeCheck(412345678901234),1, 'Tested with appropriate value.');
});
