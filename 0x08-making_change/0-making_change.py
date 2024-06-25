#!/usr/bin/python3
"""
Interview Question on: few number of coins needed to
meet a given amount of total
"""


def makeChange(coins, total):
    """ few number of coins needed to meet total """
    if total <= 0:
        return 0
    # sort the coins by descending order
    coins.sort(reverse=True)
    change = 0
    for coin in coins:
        if total <= 0:
            break
        temp = total // coin
        change += temp
        total -= (temp * coin)
    if total != 0:
        return -1
    return change
