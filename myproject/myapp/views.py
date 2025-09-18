from django.shortcuts import render
from datetime import datetime

def user_info(request):
    user = "lalit varma"
    age = 28
    

    context = {
        'user': user,
        'age': age,
       
    }
    return render(request, 'myapp/myapp.html', context)
