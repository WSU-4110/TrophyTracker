import React from 'react';
import featuresData from './featuresData';

describe('featuresData', () => {
  it('should be an array of feature objects', () => {
    expect(Array.isArray(featuresData)).toBe(true);
    featuresData.forEach(feature => {
      expect(typeof feature).toBe('object');
    });
  });

  it('each feature object should have the correct properties', () => {
    featuresData.forEach(feature => {
      expect(feature).toHaveProperty('id');
      expect(typeof feature.id).toBe('number');
      
      expect(feature).toHaveProperty('icon');
      expect(React.isValidElement(feature.icon)).toBe(true);
      
      expect(feature).toHaveProperty('title');
      expect(typeof feature.title).toBe('string');
      
      expect(feature).toHaveProperty('paragraph');
      expect(typeof feature.paragraph).toBe('string');
      
      expect(feature).toHaveProperty('btn');
      expect(typeof feature.btn).toBe('string');
      
      expect(feature).toHaveProperty('btnLink');
      expect(typeof feature.btnLink).toBe('string');
    });
  });

  it('should contain specific titles or properties for predefined checks', () => {
    const titles = featuresData.map(feature => feature.title);
    expect(titles).toEqual(expect.arrayContaining([
      'Achievement Tracking', 'Leaderboards', 'Speedruning', 'Community Forums'
    ]));
  });
});
