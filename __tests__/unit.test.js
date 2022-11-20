// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// isPhoneNumber unit tests
test('123-456-7890 is a phone number', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

test('(123)456-7890 is a phone number', () => {
    expect(functions.isPhoneNumber('(123)456-7890')).toBe(true);
});

test('1234567890 not a phone number', () => {
    expect(functions.isPhoneNumber('1234567890')).toBe(false);
});

test('1234567(890) not a phone number', () => {
    expect(functions.isPhoneNumber('1234567(890)')).toBe(false);
});

// isEmail unit tests
test('name@gmail.com is an email', () => {
    expect(functions.isEmail('name@gmail.com')).toBe(true);
});

test('name@corp.net is an email', () => {
    expect(functions.isEmail('name@corp.net')).toBe(true);
});

test('namecorp.net not an email', () => {
    expect(functions.isEmail('namecorp.net')).toBe(false);
});

test('namegmailcom not an email', () => {
    expect(functions.isEmail('namegmailcom')).toBe(false);
});

// isStrongPassword unit tests
test('valid_pass1 is strong password', () => {
    expect(functions.isStrongPassword('valid_pass1')).toBe(true);
});

test('validpass is strong password', () => {
    expect(functions.isStrongPassword('validpass')).toBe(true);
});

test('1notvalid is not strong password', () => {
    expect(functions.isStrongPassword('1notvalid')).toBe(false);
});

test('isnotvalidpassword is not strong password', () => {
    expect(functions.isStrongPassword('isnotavalidpassword')).toBe(false);
});

// isDate unit tests
test('11/20/2022 is a date', () => {
    expect(functions.isDate('11/20/2022')).toBe(true);
});

test('1/1/2023 is a date', () => {
    expect(functions.isDate('1/1/2023')).toBe(true);
});

test('11/20/22 not a date', () => {
    expect(functions.isDate('11/20/22')).toBe(false);
});

test('11/22 not a date', () => {
    expect(functions.isDate('11/22')).toBe(false);
});

// isHexColor unit tests
test('#FF3241 is hex color', () => {
    expect(functions.isHexColor('#FF3241')).toBe(true);
});

test('#A3B is hex color', () => {
    expect(functions.isHexColor('#A3B')).toBe(true);
});

test('FP3241 not hex color', () => {
    expect(functions.isHexColor('FP3241')).toBe(false);
});

test('#B342 not hex color', () => {
    expect(functions.isHexColor('#B342')).toBe(false);
});