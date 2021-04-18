def run():
  my_list = [1, "Hello", True, 4.5]
  my_dict = {"firstname": "Victor", "lastname": "Juarez"}


  super_list  = [
    {"firstname": "Victor", "lastname": "Juarez"},
    {"firstname": "Aoi", "lastname": "Juarez"},
    {"firstname": "Jose", "lastname": "Gomez"},
    {"firstname": "Oscar", "lastname": "Jose"},
  ]

  super_dict = {
    "natural_nums": [1, 2, 3, 4, 5],
    "integer_nums": [-1,-2, -3, -4, -5],
    "floating_nums": [1.1, 2.6, 4.1]
  }

  for key, value in super_dict.items():
    print(key, "-", value)

# entry point

if __name__ == '__main__':
  run()