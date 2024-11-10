from audioop import reverse

from django.http import HttpResponseRedirect
from django.shortcuts import render, HttpResponse, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import login, authenticate
from django.shortcuts import render, redirect, get_object_or_404
from .forms import CriancaForm
from .models import Crianca

# Create your views here.

def home_view(request):
    return render(request, 'base.html')


def my_login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        # Autentica o usuário
        user = authenticate(request, username=username, password=password)

        if user is not None:
            # Login bem-sucedido
            login(request, user)
            # Redireciona para a página especificada em 'next', ou 'area_restrita' como padrão
            return redirect(request.GET.get('next', 'area_restrita'))
        else:
            # Erro: credenciais inválidas
            return render(request, 'login.html', {
                'error': 'O nome de usuário ou a senha estão incorretos.'
            })

    # Renderiza a página de login em caso de método GET
    return render(request, 'login.html')


def form_crianca(request):
    if request.method == 'POST':
        form = CriancaForm(request.POST)
        if form.is_valid():
            form.save()
            return render(request, 'CadCri.html', {'form': CriancaForm(), 'sucesso': True})
        else:
            return render(request, 'CadCri.html', {'form': form})
    else:
        form = CriancaForm()

    return render(request, 'CadCri.html', {'form': form})

def lista_criancas(request):
    criancas = Crianca.objects.all() # Busca todas as crianças no banco de dados
    # Filtragem
    nome_filter = request.GET.get('filterName', '')
    nascimento_filter = request.GET.get('filterBirthdate', '')
    idade_filter = request.GET.get('filterAge', '')

    # Aplica filtro por nome
    if nome_filter:
        criancas = criancas.filter(nome__icontains=nome_filter)

    # Aplica filtro por data de nascimento (formato 'yyyy-mm-dd')
    if nascimento_filter:
        criancas = criancas.filter(data_nascimento=nascimento_filter)

    # Aplica filtro por idade
    if idade_filter:
        criancas = criancas.filter(idade=idade_filter)
    if request.method == 'POST':
        # Verifica se foi enviado um 'id' da criança para deletar
        if 'limpar_filtros' in request.POST:
            return redirect('criancas')
        if 'deletar' in request.POST:
            pk = request.POST.get('deletar')
            crianca = get_object_or_404(Crianca, pk=pk)
            crianca.delete()  # Deleta a criança
            return redirect('criancas')  # Redireciona de volta para a lista de crianças
        if 'editar' in request.POST:
            pk = request.POST.get('editar')
            crianca = get_object_or_404(Crianca, pk=pk)
            form = CriancaForm(request.POST, instance=crianca)  # Preenche o formulário com a criança existente
            if form.is_valid():
                form.save()  # Salva a criança com as novas informações
                return redirect('criancas')

    context = {'criancas': criancas}
    return render(request, 'criancas.html', {'criancas': criancas})


def editar_crianca(request, cpf):
    # Recupera a criança com o ID (pk) passado, ou retorna 404 se não encontrada
    crianca = get_object_or_404(Crianca, cpf=cpf)
    print(crianca)

    if request.method == 'POST':
        # Se for uma requisição POST, preenche o formulário com os dados do POST e com os dados atuais da criança
        form = CriancaForm(request.POST, instance=crianca)
        if form.is_valid():
            # Salva os dados da criança após edição
            form.save()
            return redirect('criancas')  # Ou para qualquer página que você queira redirecionar após editar
    else:
        # Se for uma requisição GET (quando o usuário entra na página de edição),
        # preenche o formulário com os dados da criança
        form = CriancaForm(instance=crianca)

    return render(request, 'editar_crianca.html', {'form': form, 'criancas': criancas})

def deletar_crianca(request, id):
    crianca = get_object_or_404(Crianca, id=id)  # Busca a criança pelo ID
    if request.method == 'POST':
        crianca.delete()  # Exclui a criança
        return redirect('criancas')  # Redireciona de volta para a página de lista
    return render(request, 'confirmar_delecao.html', {'crianca': crianca})

@login_required
def area_restrita(request):
    return render(request, 'indexGestor.html')
@login_required
def criancas(request):
    return render(request, 'criancas.html')
@login_required
def cadastro(request):
    return render(request, 'CadCri.html')