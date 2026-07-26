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


# ------------------------------------------


from rest_framework import viewsets, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import LLMModel, Prompt, Output, Evaluation
from .serializers import (
    LLMModelSerializer,
    PromptSerializer,
    OutputSerializer,
    EvaluationSerializer
)
from .services import compare_llm_responses

class LLMModelViewSet(viewsets.ModelViewSet):
    queryset = LLMModel.objects.all()
    serializer_class = LLMModelSerializer

class PromptViewSet(viewsets.ModelViewSet):
    queryset = Prompt.objects.all()
    serializer_class = PromptSerializer

class OutputViewSet(viewsets.ModelViewSet):
    queryset = Output.objects.all()
    serializer_class = OutputSerializer

class EvaluationViewSet(viewsets.ModelViewSet):
    queryset = Evaluation.objects.all()
    serializer_class = EvaluationSerializer


# ← NEW: Compare API
class CompareView(APIView):
    def post(self, request):
        prompt_text = request.data.get('prompt')

        if not prompt_text:
            return Response(
                {"error": "Prompt is required!"},
                status=status.HTTP_400_BAD_REQUEST
            )

        # LLM se responses lo
        results = compare_llm_responses(prompt_text)

        # Prompt save karo database mein
        prompt = Prompt.objects.create(text=prompt_text)

        return Response({
            "prompt": prompt_text,
            "prompt_id": prompt.id,
            "results": results
        }, status=status.HTTP_200_OK)
