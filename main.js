class BinarySearch
{
  static search(arrays, searchValue)
  {
    var low = 0;
    var high = arrays.length - 1;
    var mid = 0;
    while (low <= high)
    {
      mid = (low + high) / 2;
      if (arrays[mid] == searchValue)
      {
        return mid;
      } else if (arrays[mid] < searchValue)
      {
        low = mid + 1;
      } else if (arrays[mid] > searchValue)
      {
        high = mid - 1;
      }
    }
    return -1;
  }
}
