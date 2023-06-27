import sum from './sumtest';
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
})

test('aaaaaaaaaaaaaaaaaaaa', () => {
    expect('team').not.toMatch(/I/);
})

// test('aaaaaaaaaaaaaaaaaaaa', () => {
//     expect('team').toMatch(/stop/);
// })

const shopList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
];

test('配列　is contain!!!?????', () => {
    expect(shopList).toContain('milk');
    expect(new Set(shopList)).toContain('milk');
});

function complicode() {
    throw new Error('you are using the wrong JDK!');
};

test('compiling android as expected', () => {
    expect(() => complicode()).toThrow();
    expect(() => complicode()).toThrow(Error);
    
    expect(() => complicode()).toThrow(/^you are using the wrong JDK$/); // Test fails
    //expect(() => complicode()).toThrow(/^you are using the wrong JDK!$/); // Test pass
});