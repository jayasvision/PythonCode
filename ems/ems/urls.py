from rest_framework import routers
from django.contrib import admin

from authentication.views import AccountViewSet, LoginView, LogoutView
from django.conf.urls import url, include
from django.conf.urls.static import static
from employee.views import EmployeeViewSet


router = routers.SimpleRouter()
router.register(r'accounts', AccountViewSet)
router.register(r'employee', EmployeeViewSet)


urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),

    url(r'^api/v1/', include(router.urls)),
    url(r'^api/v1/auth/login/$', LoginView.as_view(), name='login'),
    url(r'^api/v1/auth/logout/$', LogoutView.as_view(), name='logout'),
]
