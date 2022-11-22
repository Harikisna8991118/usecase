from django.urls import path
from base.views import products_views as views


urlpatterns = [
    
    path('',views.getProducts,name="products"),
    path('<str:pk>',views.getProduct,name="product"),
    path('delete/<str:pk>/', views.deleteProduct, name="product-delete"),
    path('create/', views.createProduct, name="product-create"),
    path('upload/', views.uploadImage, name="image-upload"),
    path('update/<str:pk>/', views.updateProduct, name="product-update"),
   
    
]