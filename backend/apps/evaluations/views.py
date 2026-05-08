from django.shortcuts import render

from rest_framework import viewsets
from .models import LLMModel,Prompt,Output,Evaluation
from .serializers import (
    LLMModelSerializer,
    PromptSerializer,
    OutputSerializer,
    EvaluationSerializer
)

class LLModelviewset(viewsets.ModelViewSet):
    queryset = LLMModel.objects.all()
    serializer_class = LLMModelSerializer
    
class PromptViewSet (viewsets.ModelViewSet):
    queryset = Prompt.objects.all()
    serializer_class = PromptSerializer
    
    
class OutputViewSet (viewsets.ModelViewSet):
    queryset = Output.objects.all()
    serializer_class = OutputSerializer
    
class EvalutionViewSet(viewsets.ModelViewSet):
    queryset = Evaluation.objects.all()
    serializer_class = EvaluationSerializer



