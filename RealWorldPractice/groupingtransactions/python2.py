#!/bin/python

import math
import os
import random
import re
import sys

#
# Complete the 'groupTransactions' function below.
#
# The function is expected to return a STRING_ARRAY.
# The function accepts STRING_ARRAY transactions as parameter.
#

def groupTransactions(transactions):
    # Write your code here

if __name__ == '__main__':
    fptr = sys.stdout

    transactions_count = int(raw_input().strip())

    transactions = []

    for _ in xrange(transactions_count):
        transactions_item = raw_input()
        transactions.append(transactions_item)

    result = groupTransactions(transactions)

    fptr.write('\n'.join(result))
    fptr.write('\n')

    fptr.close()
