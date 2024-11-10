from django.urls import path
from django.contrib.auth import views as auth_views
from . import views
from django.contrib.auth.decorators import login_required
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('area-restrita/', login_required(views.area_restrita), name='area-restrita'),

    path('login/', views.my_login_view, name='login'),  # Página de login personalizada

    #path('area-restrita/criancas/', views.criancas, name='criancas'),

    #path('area-restrita/cadastro/', login_required(views.cadastro), name='cadastro'),

    path('home', views.home_view, name='home'),
    path('cadastro-crianca/', views.form_crianca, name='cadastro_crianca'),

    path('criancas/', views.lista_criancas, name='ver_crianca'),

    path('deletar-crianca/<int:id>/', views.deletar_crianca, name='deletar_crianca'),
    path('crianca/<str:cpf>/editar/', views.editar_crianca, name='editar_crianca'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
]