#!/bin/python

import math
import os
import random
import re
import sys

#
# Complete the 'aPlusB' function below.
#
# The function is expected to return a STRING_ARRAY.
# The function accepts STRING_ARRAY lines as parameter.
#

def aPlusB(lines):
    # Write your code here

if __name__ == '__main__':
    fptr = sys.stdout

    lines_count = int(raw_input().strip())

    lines = []

    for _ in xrange(lines_count):
        line = raw_input()
        lines.append(line)

    result = aPlusB(lines)

    fptr.write('\n'.join(result))
    fptr.write('\n')

    fptr.close()
