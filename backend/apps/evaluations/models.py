from django.db import models

class LLMModel(models.Model):
    """GPT, Gemini, Claude etc."""
    name = models.CharField(max_length=100)        # "GPT-4"
    provider = models.CharField(max_length=100)    # "OpenAI"
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Prompt(models.Model):
    """User ka question"""
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text[:50]


class Output(models.Model):
    """Har model ka jawab"""
    prompt = models.ForeignKey(Prompt, on_delete=models.CASCADE)
    llm_model = models.ForeignKey(LLMModel, on_delete=models.CASCADE)
    response = models.TextField()
    response_time = models.FloatField()            # seconds mein
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.llm_model} - {self.prompt}"


class Evaluation(models.Model):
    """Comparison score"""
    output = models.ForeignKey(Output, on_delete=models.CASCADE)
    score = models.FloatField()                    # 0-10
    feedback = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Eval - {self.output}"