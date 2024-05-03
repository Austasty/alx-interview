#!/usr/bin/python3
"""0-lockboxes.py"""


def canUnlockAll(boxes):
    """
    This function checks if all the boxes
    can be accessed
    given a list of keys for each element.
    """

    # Initialize a list to track  elements.
    # Start with all elements as unaccessed.
    opened_boxes = [False] * len(boxes)
    opened_boxes[0] = True  # Marks first element as accessed

    # loop until no new elements are accessed.
    added_boxes = 1  # Start with 1 to enter
    while added_boxes > 0:
        added_boxes = 0
        for i in range(len(boxes)):
            # If an element is accessed, check its keys.
            if opened_boxes[i]:
                for key in boxes[i]:
                    # Try to access the element pointer
                    # by the key.
                    if 0 <= key < len(boxes) and not opened_boxes[key]:
                        opened_boxes[key] = True
                        added_boxes += 1

    # Return True if all elements are accessed, or False if others.
    return all(opened_boxes)
