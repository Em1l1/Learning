"""Posts views."""

# Django 
#from django.shortcuts import render
#from django.http import HttpResponse
from django.shortcuts import render
from datetime import datetime

posts = [
  {
    'title': 'Mont Blac',
    'user': {
      'name': 'Yesica Cortes',
      'picture': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Mount_Baker_32021.JPG/800px-Mount_Baker_32021.JPG'
    },
      'timestamp': datetime.now().strftime('%b %dth, %Y - %H:%M hrs'),

  },
  {
    'title': 'via Lactea',
    'user': {
      'name': 'C. Cander',
      'picture': 'https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5c3f307d5cafe8bf2a7c4780/cosas0.jpg'
    },
      'timestamp': datetime.now().strftime('%b %dth, %Y - %H:%M hrs'),
  },
  {
    'title': 'Nuevo auditorio',
    'user': {
      'name' : 'Thespianartist',
      'picture': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Sala_de_cine.jpg/350px-Sala_de_cine.jpg'
    },
      'timestamp': datetime.now().strftime('%b %dth, %Y - %H:%M hrs'),
  }
]

def list_posts(request):
  """List existing posts."""
#  content = []
#  for post in posts:
#    content.append("""
#    <p><strong>{name}</strong></p>
#    <p><small>{user} - <i>{timestamp}</i></small></p>
#    <figure><img src="{picture}"/></figure>
#    """.format(**post))
#  return HttpResponse('<br>'.join(content))
#  posts = [1, 2, 4]
#  return HttpResponse(str(posts))
  return render(request, 'feed.html', {'posts': posts})