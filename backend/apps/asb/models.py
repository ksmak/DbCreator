from django.db import models


class Country(models.Model):
    """Country model"""
    name = models.CharField(
        verbose_name='наименование',
        max_length=100
    )

    def __str__(self) -> str:
        return self.name

    class Meta:
        verbose_name = 'Страна'
        verbose_name_plural = 'Страны'
        ordering = ['name']


class Region(models.Model):
    """Region model"""
    name = models.CharField(
        verbose_name='наименование',
        max_length=100
    )

    def __str__(self) -> str:
        return self.name

    class Meta:
        verbose_name = 'Область'
        verbose_name_plural = 'Область'
        ordering = ['name']


class Person(models.Model):
    """Asb model"""
    first_name = models.CharField(
        verbose_name='имя',
        max_length=50
    )
    last_name = models.CharField(
        verbose_name='фамилия',
        max_length=50
    )
    middle_name = models.CharField(
        verbose_name='отчество',
        max_length=50,
        null=True,
        blank=True
    )
    birth_date = models.DateField(
        verbose_name='дата рождения'
    )
    iin = models.BigIntegerField(
        verbose_name='ИИН'
    )

    def __str__(self) -> str:
        return (f"{self.last_name} {self.first_name} {self.middle_name} "
                f"{self.birth_date}")


class Address(models.Model):
    """Address model"""
    STATES = [
        ('registration', 'Прописка'),
        ('extract', 'Выписка'),
    ]
    person = models.ForeignKey(
        verbose_name='физическое лицо',
        to=Person,
        on_delete=models.RESTRICT
    )
    state = models.CharField(
        verbose_name='состояние',
        max_length=30,
        choices=STATES
    )

    state_date = models.DateField(
        verbose_name='дата прописки/выписки'
    )

    country = models.ForeignKey(
        verbose_name='страна',
        to=Country,
        on_delete=models.RESTRICT
    )
    region = models.ForeignKey(
        verbose_name='область',
        to=Region,
        on_delete=models.RESTRICT
    )
    district = models.CharField(
        verbose_name='район',
        max_length=150,
        null=True,
        blank=True
    )
    punkt = models.CharField(
        verbose_name='населеный пункт',
        max_length=150
    )

    def __str__(self) -> str:
        return (f"{self.person.id}: {self.state} {self.state_date} "
                f"{self.country} {self.region} {self.district} "
                f"{self.punkt}")

    class Meta:
        verbose_name = "адрес прописки/выписки"
        verbose_name_plural = "адреса прописк/выписки"
