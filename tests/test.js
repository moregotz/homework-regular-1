import Validator from '../src/index.js'

test('validate1', () => {
    const username = 'pr0-g4mer';
    const validator = new Validator();
    const result = validator.validateUsername(username);
    expect(result).toBe(true);
})

test('validate2', () => {
    const username = 'agent007';
    const validator = new Validator();
    const result = validator.validateUsername(username);
    expect(result).toBe(false);
})

test('validate3', () => {
    const username = 'l0l0l0shka-';
    const validator = new Validator();
    const result = validator.validateUsername(username);
    expect(result).toBe(false);
})

test('validate4', () => {
    const username = 'MopkoBka55';
    const validator = new Validator();
    const result = validator.validateUsername(username);
    expect(result).toBe(false);
})

test('validate5', () => {
    const username = '123KapTowka';
    const validator = new Validator();
    const result = validator.validateUsername(username);
    expect(result).toBe(false);
})

test('validate6', () => {
    const username = 'A1234A';
    const validator = new Validator();
    const result = validator.validateUsername(username);
    expect(result).toBe(false);
})

test('validate6', () => {
    const username = null;
    const validator = new Validator();
    const result = validator.validateUsername(username);
    expect(result).toBe(false);
})
