import graphene
from graphene_django.types import DjangoObjectType, ObjectType

from .models import Country, Region, Person, Address


class CountryType(DjangoObjectType):
    class Meta:
        model = Country


class RegionType(DjangoObjectType):
    class Meta:
        model = Region


class PersonType(DjangoObjectType):
    class Meta:
        model = Person


class AddressType(DjangoObjectType):
    class Meta:
        model = Address


class Query(ObjectType):
    person = graphene.Field(PersonType, id=graphene.Int())
    address = graphene.Field(AddressType, id=graphene.Int())
    persons = graphene.List(PersonType)
    addresses = graphene.List(AddressType)

    def resolve_person(self, info, **kwargs):
        id = kwargs.get('id')

        if id:
            return Person.objects.get(pk=id)

        return None

    def resolve_address(self, info, **kwargs):
        id = kwargs.get('id')

        if id:
            return Address.objects.get(pk=id)

        return None

    def resolve_persons(self, info, **kwargs):
        return Person.objects.all()

    def resolve_addresses(self, info, **kwargs):
        return Address.objects.all()


class CountryInput(graphene.InputObjectType):
    id = graphene.ID()
    name = graphene.String()


class RegionInput(graphene.InputObjectType):
    id = graphene.ID()
    name = graphene.String()


class PersonInput(graphene.InputObjectType):
    id = graphene.ID()
    first_name = graphene.String()
    last_name = graphene.String()
    middle_name = graphene.String()
    iin = graphene.BigInt()
    birth_date = graphene.Date()


class AddressInput(graphene.InputObjectType):
    id = graphene.ID()
    person = graphene.Field(PersonInput)
    state = graphene.String()
    state_date = graphene.Date()
    country = graphene.Field(CountryInput)
    region = graphene.Field(RegionInput)
    district = graphene.String()
    punkt = graphene.String()


class CreatePerson(graphene.Mutation):
    class Arguments:
        input = PersonInput(required=True)

    ok = graphene.Boolean()
    person = graphene.Field(PersonType)

    @staticmethod
    def mutate(root, info, input=None):
        ok = True
        person_instance = Person(
            first_name=input.first_name,
            last_name=input.last_name,
            middle_name=input.middle_name,
            iin=input.iin,
            birth_date=input.birth_date
        )
        person_instance.save()
        return CreatePerson(ok=ok, person=person_instance)


class UpdatePerson(graphene.Mutation):
    class Arguments:
        id = graphene.Int(required=True)
        input = PersonInput(required=True)

    ok = graphene.Boolean()
    person = graphene.Field(PersonType)

    @staticmethod
    def mutate(root, info, id, input=None):
        ok = False
        person_instance = Person.objects.get(pk=id)
        if person_instance:
            ok = True
            person_instance.first_name = input.first_name
            person_instance.last_name = input.last_name
            person_instance.middle_name = input.middle_name
            person_instance.iin = input.iin
            person_instance.birth_date = input.birth_date
            person_instance.save()
            return UpdatePerson(ok=ok, person=person_instance)

        return UpdatePerson(ok=ok, person=None)


class CreateAddress(graphene.Mutation):
    class Arguments:
        address = AddressInput(required=True)

    ok = graphene.Boolean()
    address = graphene.Field(AddressType)

    @staticmethod
    def mutate(root, info, input=None):
        ok = True
        address_instance = Address(
            person=input.person,
            state=input.state,
            state_date=input.state_date,
            country=input.country,
            region=input.region,
            district=input.district,
            punkt=input.punkt
        )
        address_instance.save()
        return CreateAddress(ok=ok, address=address_instance)


class UpdateAddress(graphene.Mutation):
    class Arguments:
        id = graphene.Int(required=True)
        address = AddressInput(required=True)

    ok = graphene.Boolean()
    address = graphene.Field(AddressType())

    @classmethod
    def mutate(root, info, id, input=None):
        ok = False
        address_instance = Address.objects.get(pk=id)
        if address_instance:
            address_instance.person = input.person
            address_instance.state = input.state
            address_instance.state_date = input.state_date
            address_instance.country = input.country
            address_instance.region = input.region
            address_instance.district = input.district
            address_instance.punkt = input.punkt
            address_instance.save()
            return UpdateAddress(ok=ok, address=address_instance)

        return UpdateAddress(ok=ok, address=None)


class Mutation(graphene.ObjectType):
    create_person = CreatePerson.Field()
    update_person = UpdatePerson.Field()
    create_address = CreateAddress.Field()
    update_address = UpdateAddress.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
