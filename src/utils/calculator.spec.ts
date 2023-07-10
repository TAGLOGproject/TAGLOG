import { addNumber } from './calculator';

/**
 * toBe() : 해당 값과 일치하면 통과
 * toBeNull() toBeUndefined() toBeDefined() : 인 경우 통과
 * toBeTruthy() toBeFasly() : boolean 값 판별
 * toBeGreaterThan 등… : 이상, 이하, 초과, 미만
 * toMatch(/H/) : 정규 표현식으로 문자열 판단
 */
describe('addNumber', () => {
  it('addNumber test', () => {
    expect(addNumber('1', '2')).toEqual(3);
  });
});
