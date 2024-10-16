# django 라이브러리
from rest_framework import generics,status,permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.tokens import Token
from django.shortcuts import render, redirect
import requests

#내가 만든 모듈
from .models import User
from .serializers import SuperUser_Serializer,User_Serializer,TokenSerializer
from .config import CLIENT_ID,REDIRECT_URI, CLIENT_SECRET

class UserCreate(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = SuperUser_Serializer

class OnlyAuthenticatedUserView(APIView):
    permission_classes = [permissions.IsAuthenticated]
		
    # JWT 인증방식 클래스 지정하기
    authentication_classes = [JWTAuthentication]

    def get(self, request):
        # Token에서 인증된 user만 가져온다.
        user = request.user
        print(f"user 정보 : {user}")
        if not user:
            return Response({"error": "접근 권한이 없습니다."}, status=status.HTTP_401_UNAUTHORIZED)
        return Response({"message": "Accepted"})

class KakaoCallback(APIView):
    def post(self, request):
        token_url = "https://kauth.kakao.com/oauth/token"
        KAKAO_USER_API = "https://kapi.kakao.com/v2/user/me"
    
        data = {
          "grant_type": "authorization_code",
          "client_id": CLIENT_ID,
          "redirect_uri": REDIRECT_URI,
          "code": request.data.get('AUTHORIZE_CODE'),
          "client_secret": CLIENT_SECRET,
        }

        token = requests.post(token_url, data=data).json()
        access_token = token['access_token']
        
        headers = {"Authorization": f"Bearer {access_token}"}
        user_infomation = requests.get(KAKAO_USER_API, headers=headers).json()
        kakao_account = user_infomation.get('kakao_account')
        
        user_data = {
            "name": kakao_account.get("name", None),
            "email": kakao_account.get("email", None),
            "phone": kakao_account.get("phone_number", None),
            "birthyear": kakao_account.get("birthyear", None),
            "birthday": kakao_account.get("birthday", None),
            "gender": kakao_account.get("gender", None)
        }  
        
        email = user_data.get('email')
        user = User.objects.filter(email=email).first()

        #데이터베이스에 email이 존재할 때
        if user:
            serializer = User_Serializer(user, data=user_data)
            if serializer.is_valid():
                token: Token = TokenSerializer.get_token(user)
                access_token = str(token.access_token),
                refresh_token = str(token)

                print(access_token)

                res = Response(
                    {
                        "access": access_token,
                        "refresh": refresh_token,
                    },
                    status=status.HTTP_200_OK,
                )

                return res
          
        #데이터베이스에 email이 존재하지 않을 때
        else:
            serializer = User_Serializer(data = user_data)
            if serializer.is_valid():
                user = serializer.save()
                if user is not None:
                    token: Token = TokenSerializer.get_token(user)
                    access_token = str(token.access_token),
                    refresh_token = str(token)
                
                    res = Response(
                        {
                            "access": access_token,
                            "refresh": refresh_token,
                        },
                        status=status.HTTP_200_OK,
                    )
                return res
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
