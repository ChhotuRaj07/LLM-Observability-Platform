from rest_framework .routers import DefaultRouter
from django.urls import path , include
from .import views

router = DefaultRouter()
router.register(r'llmodels', views.LLMModelViewset)
router.register(r'prompts',views.promptViewSet)
router.register(r'outputs',views.OutputViewSet)
router.register(r'evalution', views.EvalutionViewSet)

urlpatterns = [
    path('',include(router.urls))
]



# if u write old mannual urls its to long 
# urlpatterns = [
    # # LLM Models
    # path('llmmodels/', 
    #      views.LLMModelViewSet.as_view({
    #          'get': 'list',      # GET → sab records
    #          'post': 'create'    # POST → naya banao
    #      })),
    # path('llmmodels/<int:pk>/', 
    #      views.LLMModelViewSet.as_view({
    #          'get': 'retrieve',  # GET → ek record
    #          'put': 'update',    # PUT → update karo
    #          'delete': 'destroy' # DELETE → delete karo
    #      })),


# But as a ROuter = Automatic Kaam KArta hai 
# Now here I router 

# router.register(r'llmmodels', views.LLMModelViewSet)

# Yeh automatically banata hai:

# GET    /llmmodels/      → list()     (sab records)
# POST   /llmmodels/      → create()   (naya banao)
# GET    /llmmodels/1/    → retrieve() (ek record)
# PUT    /llmmodels/1/    → update()   (update karo)
# DELETE /llmmodels/1/    → destroy()  (delete karo)

