from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager, PermissionsMixin

class UserManager(BaseUserManager):
    def create_user(self, name, email, phone, birthyear, birthday, gender, password = None):
        user = self.model(
            name = name,
            email = self.normalize_email(email),
            phone = phone,
            birthyear = birthyear,
            birthday = birthday,
            gender = gender
        )
        if password: 
            user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, name, email, phone, birthyear, birthday, gender, password):
        if password is None:
            raise TypeError("Superusers must have a password.")
        
        user = self.create_user(name, email, phone, birthyear, birthday, gender, password)
        user.is_admin = True
        user.is_active = True
        user.save()

        return user

class User(AbstractUser, PermissionsMixin):
    # User information
    username = None
    name = models.CharField(max_length = 30, blank = False)
    email = models.EmailField(verbose_name='email address', max_length = 255, unique = True)
    phone = models.CharField(max_length = 50, blank = False)
    birthyear = models.IntegerField()
    birthday = models.IntegerField()
    gender = models.CharField(max_length = 10, blank = False)
    # setting
    created = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    objects = UserManager()
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name', 'phone', 'birthyear', 'birthday', 'gender','username']

    def __str__(self):
        return self.email

    class Meta:
        ordering = ['created']

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.is_admin