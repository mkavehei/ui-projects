import { expect } from 'chai';
import { selectedColors }  from './array-methods';
import { updatedColors }   from './array-methods';
import { sortedColors }    from './array-methods';
import { reducedColors }   from './array-methods';
import { hasColor }        from './array-methods';
import { findMultiplier }  from './array-methods';
import { findIndexColor }  from './array-methods';
import { sortedColorsArr } from './array-methods';


describe('Array methods, Filtering', () => {

  it('Filtering should pass', () => {

    // expect((true)).to.equal(false);
    const multiplier = 200;
    const newColors = selectedColors(multiplier).length;
    expect(newColors).to.equal(2);

    const multiplier2 = 100;
    const newColors2 = selectedColors(multiplier2).length;
    expect(newColors2).to.not.equal(2);

    const multiplier3 = 100;
    const newColors3 = selectedColors(multiplier3).length;
    expect(newColors3).to.equal(5);

  });

});

describe('Array methods, Updating', () => {

  it ('Updating color test..', () =>{
      // updatedColors
      const mutiplier2 = updatedColors('', 2);
      const expected2 = [200, 200, 400, 200, 400, 200, 200];
      expect(mutiplier2).to.deep.equal( expected2);

      const color1 = 'red';
      const expected1 =  [200, 100, 200, 100, 200, 100, 100];
      const mutiplier1 = updatedColors(color1, 2);
      expect(mutiplier1).to.deep.equal( expected1 );

  })

});

describe.skip('Array methods, Sorting', () => {

  it ('..color test..', () =>{
      // sorting 
      const sortedType1 = sortedColors('color');
      expect(sortedType1).to.deep.equal(sortedColorsArr);

      /*const sortedType2 = sortedColors('value');
      console.log("sorted2="+ sortedType2);
      const expected2 = [ ];
      expect(sortedType2).to.deep.equal( expected2);
      */
  })

});

// reducedColors
describe('Array methods, Reducing', () => {

  it ('.. reduced to total..', () =>{
      // reducing
      const reduced = reducedColors();
      const expected = 0;
      expect(reduced).to.not.equal(undefined);

      const expected2 = 900;
      expect(reduced).to.equal(expected2);
  })

});

// has Color
describe('Array methods, Some', () => {

  it ('Has a specific color?', () =>{
      // some
      let findColor = hasColor("#fff");
      expect(findColor).to.equal(false);

      findColor = hasColor("#ff0");
      expect(findColor).to.equal(true);
  })

});


// find color
describe('Array methods, Find', () => {

  it ('Find a color?', () =>{
      // Find Value
      let findColor = findMultiplier(100);
      expect(findColor).to.deep.equal( { color: 'red', value: '#f00', mutiplier: 100 }  );

      findColor = findMultiplier(200);
      expect(findColor).to.deep.equal({ color: 'blue', value: '#00f', mutiplier: 200 });
  })

});


// find Index color
describe('Array methods, FindIndex', () => {

  it ('Find Index of color', () =>{
      // FindIndex
      let findIndexColor2 = findIndexColor('#ff0');
      expect( findIndexColor2 ).to.equal(5);

      findIndexColor2  = findIndexColor('#f0f');
      expect( findIndexColor2 ).to.equal( 4);

      findIndexColor2  = findIndexColor('#f0f');
      expect( findIndexColor2 ).to.not.equal( 0);
  })

});

