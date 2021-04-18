from data_filtering_db import DATA

def run():
  all_python_devs = [worker["name"] for worker in DATA if worker ["language"] == "python"]
  all_Platzi_workers = [worker["name"] for worker in DATA if worker["organization"] == "Platzi"]
  adults = list(filter(lambda worker: worker["age"] > 18, DATA))
  adults = list(map(lambda worker: worker["name"], adults))
  # old_people = list(map(lambda worker: worker | {"old": worker["age"] > 70}, DATA))
  old_people = list(map(lambda worker: {**worker, **{"old": worker["age"] > 70}}, DATA))

  # language python
  # for worker in all_python_devs:
  #   print(worker)

  # workers in the platzi
  # for worker in all_Platzi_workers:
  #   print(worker + "Work in the platzi\n")

  # old adults > 18
  # for worker in adults:
  #   print("Adults old \n" + worker)

  # ald people > 70
  for worker in old_people:
    print(worker)

if __name__ == '__main__':
  run()