from rest_framework import serializers
from .models import LLMModel, Prompt, Output, Evaluation

class LLMModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = LLMModel
        fields = '__all__'

class PromptSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prompt
        fields = '__all__'

class OutputSerializer(serializers.ModelSerializer):
    class Meta:
        model = Output
        fields = '__all__'

class EvaluationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Evaluation
        fields = '__all__'