nones = range(1, 101, 2)
col = 1
for i in nones:
  if (col < 10):
    print(f'{i}\t', end="")
    col += 1
  else:
    print(i)
    col = 1
