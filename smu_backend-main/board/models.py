from django.db import models

class Post(models.Model):
   #게시자 정보
   id = models.AutoField(primary_key=True)
   email = models.EmailField(verbose_name='email address', max_length = 255)
   created = models.DateTimeField("작성일", auto_now_add=True, null=False)
   modified = models.DateTimeField("수정일", auto_now=True, null=False)
   #게시글
   title = models.CharField("제목", max_length=50, null=False)
   content = models.CharField("내용", max_length=1000, null=False)
   price = models.CharField("가격", max_length=255, null=False)
   region = models.CharField("지역", max_length=100, null=False)
   address = models.CharField("주소", max_length=255, null=False)
   size = models.CharField("크기", max_length=100, null=False)
   direction = models.CharField("방향", max_length=100, null=False)
   availability = models.CharField("입주시기", max_length=100, null=False)
   floor = models.CharField("몇층",max_length=100, null=False)
   apart = models.CharField("아파트", max_length=255, null=False)
   
   class Meta:
        ordering = ['created']

class PostImage(models.Model):
   post = models.ForeignKey(Post, on_delete=models.CASCADE)
   image = models.ImageField(upload_to="images")