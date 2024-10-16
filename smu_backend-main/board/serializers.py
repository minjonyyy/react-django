from rest_framework import serializers
from .models import Post, PostImage

# PostImageSerializer는 PostImage 모델의 image 필드만 직렬화
class PostImageSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(use_url=True)
    class Meta:
        model = PostImage
        fields = ['image']

# PostSerializer는 Post 모델의 email, title, content 필드와 관련된 PostImage 모델의 images 필드를 포함
class PostSerializer(serializers.ModelSerializer):
    images = serializers.SerializerMethodField()

    # image_set 변수에 PostImage 모델에서 현재 Post 객체(obj)와 관련된 이미지들을 필터링하여 할당
    # PostImageSerializer를 사용하여 image_set을 직렬화합니다. many=True는 여러 개의 PostImage 객체를 직렬화할 수 있도록 설정
    # context=self.context는 현재 컨텍스트를 전달하여 직렬화에 필요한 추가 정보를 제공
    # .data를 사용하여 직렬화된 데이터를 반환
    # get_images 메서드는 Post 객체와 관련된 PostImage 객체들을 직렬화
    def get_images(self, obj):
        image_set = PostImage.objects.filter(post=obj)
        return PostImageSerializer(instance=image_set, many=True, context=self.context).data

    class Meta:
        model = Post
        fields = ['id', 'email', 'title', 'content', 'price', 'region', 'address', 'size', 'direction', 'availability', 'floor', 'apart', 'images']
        
    # create 메서드는 새로운 Post 객체와 관련된 PostImage 객체들을 생성하여 저장
    def create(self, validated_data):
        images_data = self.context['request'].FILES
        post = Post.objects.create(**validated_data)
        for image_data in images_data.getlist('image'):
            PostImage.objects.create(post=post, image=image_data)
        return post

