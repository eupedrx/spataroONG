# Generated by Django 5.1.3 on 2024-11-10 08:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ong', '0002_remove_crianca_id_alter_crianca_cpf'),
    ]

    operations = [
        migrations.AlterField(
            model_name='crianca',
            name='cpf',
            field=models.CharField(max_length=11, primary_key=True, serialize=False, unique=True),
        ),
    ]
