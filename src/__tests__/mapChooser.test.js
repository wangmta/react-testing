import mapChooser from '../mapChooser';

describe('mapChooser', () => {
  it('returns an image file name based on input given to it', () => {
    let expected = 'portland.png';
    let actual = mapChooser('portland');
    expect(actual).toEqual(expected);
  });
  it('returns an image file name of new york', () => {
    let expected = 'newyork.png';
    let actual = mapChooser('newyork');
    expect(actual).toEqual(expected);
  });
  it('returns a default file name when no input is given', () => {
    let expected = 'none.png';
    let actual = mapChooser('');
    expect(actual).toEqual(expected);
  });
});
