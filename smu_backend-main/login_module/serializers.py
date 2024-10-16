from .models import User
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class SuperUser_Serializer(serializers.ModelSerializer):
    def create(self, validated_data):

        email = validated_data['email']
        if User.objects.filter(email=email).exists():
            raise serializers.ValidationError("Email already exists")

        user = User.objects.create_superuser(
            name = validated_data['name'],
            email = validated_data['email'],
            phone = validated_data['phone'],
            birthyear = validated_data['birthyear'],
            birthday = validated_data['birthday'],
            gender = validated_data['gender'],
            password = validated_data['password']
        )
        return user
    class Meta:
        model = User
        fields = ['name', 'email', 'phone', 'birthyear', 'birthday','gender', 'password']

class User_Serializer(serializers.ModelSerializer):
    def create(self, validated_data):
        user = User.objects.create_user(
            name = validated_data['name'],
            email = validated_data['email'],
            phone = validated_data['phone'],
            birthyear = validated_data['birthyear'],
            birthday = validated_data['birthday'],
            gender = validated_data['gender']
        )
        return user
    class Meta:
        model = User
        fields = ['name', 'email', 'phone', 'birthyear', 'birthday','gender']

class TokenSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token['email'] = user.email
        token['name'] = user.name
 
        return token