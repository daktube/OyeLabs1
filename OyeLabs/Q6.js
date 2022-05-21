function findMissingNum(x)
{
    let y = x.length; 
    let z, total= 1;
    for(z=2; z<=(y+1); z++);
    {
        total += z;
        total -= x[z-2];

    }
    return total;

}


    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
    console.log(findMissingNum(arr));
// Alternate route that can be taken
    // Quick sort method to sort the numbers, then loop doing subtration of digits if result is 1 continue loop if difference is 2 stop the loop return value with -1, eg- 42 44 differnce came to be 2 so loop break 44-1=43 result