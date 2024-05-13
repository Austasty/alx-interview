#!/usr/bin/python3
""" Minimum Operators """


def minOperations(n):
    """ Minimum Operators """

    if not isinstance(n, int):
        return 0

    operations = 0
    iterator = 2
    while (iterator <= n):
        if not (n % iterator):
            n = int(n / iterator)
            operations += iterator
            iterator = 1
        iterator += 1
    return operations
