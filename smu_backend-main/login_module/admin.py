from django.contrib import admin
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
# 내가 생성한 라이브러리
from .forms import UserCreationForm,UserChangeForm
from .models import User

class UserAdmin(BaseUserAdmin):
    form = UserChangeForm
    add_form = UserCreationForm

    list_display = ('name','email','phone','birthyear','birthday','gender','is_admin')
    list_filter = ('is_admin',)
    fieldsets = (
        (None,{'fields':('name','email','password')}),
        ("Personal info",{'fields':('birthyear','birthday','phone','gender')}),
        ("Permissions",{'fields':('is_admin',)})
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('name','email','phone','birthyear','birthday','gender','password1', 'password2'),
        }),
    )
    search_fields = ('email',)
    ordering = ('email',)
    filter_horizontal = ()

admin.site.register(User, UserAdmin)
admin.site.unregister(Group)
