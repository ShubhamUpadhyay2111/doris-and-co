export class ArrayUtils {
  /**
   * Returns a random element from the given array.
   * @param array - The array to choose an element from.
   * @returns A randomly chosen element from the array.
   */
  static getRandomElement<T>(array: T[]): T {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
}
