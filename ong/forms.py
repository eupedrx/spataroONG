from django import forms
from .models import Crianca

class CriancaForm(forms.ModelForm):
    class Meta:
        model = Crianca
        fields = ['nome', 'nasc', 'cpf', 'rg', 'nomeResp', 'pais', 'escola', 'anoEscolar', 'turno']
        labels = {'nome': 'Nome', 'cpf': 'CPF', 'rg': 'RG', 'nomeResp': 'Nome Responsável', 'pais': 'Nome Pai ou Mãe', 'escola': 'Escola', 'anoEscolar': 'Ano Escolar', 'turno': 'Turno'}

    nasc = forms.DateField(
        input_formats=['%d/%m/%Y'],  # Permite o formato DD/MM/YYYY
        widget=forms.TextInput(attrs={'type': 'text', 'class': 'date-mask'}),  # Tipo 'text' com a máscara
        label="Data de Nascimento"
    )


def clean_cpf(self):
    cpf = self.cleaned_data.get('cpf')
    # Verifica se o CPF já existe em outra criança, mas não no mesmo objeto
    if Crianca.objects.filter(cpf=cpf).exclude(pk=self.instance.pk).exists():
        raise forms.ValidationError('Já existe uma criança com esse CPF. Tente outro.')
    return cpf

