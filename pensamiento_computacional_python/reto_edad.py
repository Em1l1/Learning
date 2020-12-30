print("Bienvenido chicos, quieren saber quien es el mayor entre ustedes? 🙋")

print('Primera persona: 🥷')
nombre1 = input('Como te llamas? ')
edad1 = int(input('Cuantos anos tienes? '))

print('Segunda persona: 🧔')
nombre2 = input('Como te llamas? ')
edad2 = int(input('Cuantos anos tienes? '))


if edad1 > edad2:
  print(f' 🤘 {nombre1} tu edad es de {edad1} eres mayor que {nombre2} que tiene la edad de {edad2}')
elif edad1 < edad2:
  print(f'👌 {nombre2} tu edad es de {edad2} eres mayor que {nombre1} que tiene la edad de {edad1} ')
else:
  print(f'{nombre1} y {nombre2} tiene la misma edad, ambos tiene la edad de {edad1}  🎉🎉🎉🎉')
