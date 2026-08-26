def isValid(s):
    stack = []

    map = {
        "(": ")",
        "{": "}",
        "[": "]"
    }

    for ch in s:
        if ch in map:
            stack.append(ch)
        else:
            if not stack:
                return False

            top = stack.pop()

            if ch != map[top]:
                return False

    return len(stack) == 0