from django.db import models

# Create your models here.
class Crianca(models.Model):
    nome = models.CharField(max_length=100)
    nasc = models.DateField()
    cpf = models.CharField(max_length=14, primary_key=True, unique=True, error_messages={
        'unique': 'Já existe uma crianca cadastrada com este CPF.'})
    rg = models.CharField(max_length=12)
    nomeResp = models.CharField(max_length=100)
    pais = models.CharField(max_length=50)
    escola = models.CharField(max_length=100)
    anoEscolar = models.CharField(max_length=20)
    turno = models.CharField(max_length=20)

    def __str__(self):
        return f"{self.nome} - CPF: {self.cpf}"