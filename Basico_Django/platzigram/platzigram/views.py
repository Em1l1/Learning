"""Platzigram views """
# Django
from django.http import HttpResponse
#from django.http import JsonResponse
import json


# Utilities
from datetime import datetime


def hello_world(request):
  """Return a greeting."""
  return HttpResponse('Oh, hi! Current server time is {now}'.format(now=datetime.now().strftime('%b %dth, %Y - %H:%H hrs'))) 
    #return HttpResponse('Hello, world!')


def hi(request):
  """ Return a JSON response with sorted intergers."""
  # Otra manera de hacer el ejercicio
#  numbers = map(lambda x : int(x),request.GET["numbers"].split(","))
#  return JsonResponse({ "numbers" : sorted(numbers)},json_dumps_params={'indent': 2})
#  print(request)

  # resolucion de ejercicio
  numbers = [int(i) for i in request.GET['numbers'].split(',')]
  sorted_ints = sorted(numbers)
  data = {
    'status': 'ok',
    'numbers': sorted_ints,
    'message': 'Integers sorted successfully.'
  }
  # Primera namera
  #import pdb; pdb.set_trace()
#  numbers = request.GET['numbers']
  return  HttpResponse(
    json.dumps(data, indent=4), 
    content_type='application/json'
  )


def say_hello(request, name, age):
  """Return a greeating."""
  if age < 12:
    message = 'Sorry {}, you are not allowed here'.format(name)
  else:
    message = 'Hello. {}! Welcome to Platzigram'.format(name)
    return HttpResponse(message)