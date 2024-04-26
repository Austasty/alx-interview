#!/usr/bin/python3
def pascal_triangle(n):
    """
    Generates Pascal's triangle up to the nth row.

    Args:
       n: The number of rows in the triangle.

    Returns:
       A list of lists representing the Pascal's triangle.
    """
    triangle = [] # init of empty triangle list
    if n <= 0:
       return [] # Base check

    firstrow = [1]
    triangle.append(firstrow) #append first row
    if n == 1 : # check if row required equauls 1
       return triangle

        # since the first row will always be [1]
        # let's leave the triangle index 0 out of our itration
    for i in range(1, n):
        # let's get previous row using the 
        # itration count minus 1
        prevRow = triangle[i - 1] 
        # we initialize a next_row to be treated
        next_row = [] 
        # we add 1 to the first index of the next_row
        next_row.append(1)
        for j in range(i - 1):
            # based on the iteration count 
            # we add the values of the 2 nearest index from the previous row
            next_row.append(prevRow[j] + prevRow[j + 1])
        # we add 1 to the last index of the next_row
        next_row.append(1)
        triangle.append(next_row)
        
    return triangle 
            



